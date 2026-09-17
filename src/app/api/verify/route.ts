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
    const { findingId, assetId } = await req.json();
    const supabase = db();

    // 1. Marquer la faille comme vérifiée et corrigée
    const { error: findErr } = await supabase
      .from("findings")
      .update({
        status: "verified",
        verified: true,
      })
      .eq("id", findingId);

    if (findErr) throw findErr;

    // 2. Vérifier s'il reste d'autres failles ouvertes sur cet actif
    const { data: openFindings } = await supabase
      .from("findings")
      .select("id")
      .eq("asset_id", assetId)
      .neq("status", "verified");

    // Si plus aucune faille ouverte, l'actif redevient "clean"
    if (!openFindings || openFindings.length === 0) {
      await supabase
        .from("assets")
        .update({ status: "clean" })
        .eq("id", assetId);
    }

    return NextResponse.json({ success: true, message: "Correctif vérifié avec succès." });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
