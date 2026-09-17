import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

function db() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

export async function POST(req: Request) {
  try {
    const { assetId, assetName } = await req.json();
    const supabase = db();

    // 1. Créer un enregistrement de scan
    const { data: scan, error: scanErr } = await supabase
      .from("scans")
      .insert([{
        asset_id: assetId,
        type: "full",
        status: "running",
        started_at: new Date().toISOString()
      }])
      .select()
      .single();

    if (scanErr) throw scanErr;

    // 2. Mettre à jour le statut de l'actif
    await supabase
      .from("assets")
      .update({ status: "scanning", last_scan: new Date().toISOString() })
      .eq("id", assetId);

    // 3. Simuler la détection de vulnérabilités réelles (ZAP / Trivy / Semgrep)
    const simulatedFindings = [
      {
        asset_id: assetId,
        title: "Injection SQL (Blind Boolean-based) détectée",
        severity: "critical",
        priority: "P0",
        risk_score: 94,
        cwe: "CWE-89",
        endpoint: "/api/v1/search?q=",
        description: "Un paramètre non filtré permet l'injection de commandes SQL arbitraires.",
        remediation: "Utiliser des requêtes préparées (Prepared Statements) et des paramètres liés.",
        status: "open",
        verified: false
      },
      {
        asset_id: assetId,
        title: "Absence d'en-tête de sécurité Strict-Transport-Security (HSTS)",
        severity: "medium",
        priority: "P2",
        risk_score: 45,
        cwe: "CWE-319",
        endpoint: "/",
        description: "L'application ne force pas la communication chiffrée HTTPS via HSTS.",
        remediation: "Ajouter l'en-tête HTTP : Strict-Transport-Security: max-age=31536000; includeSubDomains",
        status: "open",
        verified: false
      },
      {
        asset_id: assetId,
        title: "Vulnérabilité dans dépendance tierce (SCA)",
        severity: "high",
        priority: "P1",
        risk_score: 78,
        cwe: "CWE-1395",
        endpoint: "package.json / lodash@4.17.15",
        description: "Prototype Pollution dans lodash (CVE-2021-23337).",
        remediation: "Mettre à jour vers lodash version 4.17.21 ou supérieure.",
        status: "open",
        verified: false
      }
    ];

    // Insérer les findings
    await supabase.from("findings").insert(simulatedFindings);

    // 4. Clôturer le scan
    await supabase
      .from("scans")
      .update({
        status: "completed",
        findings_count: simulatedFindings.length,
        completed_at: new Date().toISOString()
      })
      .eq("id", scan.id);

    await supabase
      .from("assets")
      .update({ status: "vulnerable" })
      .eq("id", assetId);

    return NextResponse.json({ success: true, count: simulatedFindings.length });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
