"use client";

import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Shield, AlertTriangle, CheckCircle2, Activity, Plus, Globe, Server, RefreshCw, Play, ShieldAlert } from "lucide-react";

interface Asset {
  id: string;
  name: string;
  url: string;
  type: string;
  criticality: string;
  status: string;
  created_at: string;
}

interface Finding {
  id: string;
  title: string;
  severity: string;
  priority: string;
  risk_score: number;
  status: string;
  cwe?: string;
  endpoint?: string;
  remediation?: string;
}

export default function Dashboard() {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [findings, setFindings] = useState<Finding[]>([]);
  const [loading, setLoading] = useState(true);
  const [scanningId, setScanningId] = useState<string | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newAsset, setNewAsset] = useState({ name: "", url: "", type: "web", criticality: "medium" });
  const [adding, setAdding] = useState(false);

  async function loadData() {
    try {
      setLoading(true);
      const [resAssets, resFindings] = await Promise.all([
        fetch("/api/assets"),
        fetch("/api/findings"),
      ]);
      const dataAssets = await resAssets.json();
      const dataFindings = await resFindings.json();
      setAssets(Array.isArray(dataAssets) ? dataAssets : []);
      setFindings(Array.isArray(dataFindings) ? dataFindings : []);
    } catch (err) {
      console.error("Erreur de chargement", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  async function handleAddAsset(e: React.FormEvent) {
    e.preventDefault();
    setAdding(true);
    try {
      const res = await fetch("/api/assets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newAsset),
      });
      if (res.ok) {
        setNewAsset({ name: "", url: "", type: "web", criticality: "medium" });
        setShowAddModal(false);
        loadData();
      } else {
        alert("Erreur lors de l'ajout de l'actif");
      }
    } finally {
      setAdding(false);
    }
  }

  async function handleLaunchScan(assetId: string, assetName: string) {
    setScanningId(assetId);
    try {
      const res = await fetch("/api/scans", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ assetId, assetName }),
      });
      if (res.ok) {
        await loadData();
      } else {
        alert("Erreur lors du lancement du scan.");
      }
    } finally {
      setScanningId(null);
    }
  }

  const criticalCount = findings.filter((f) => f.severity === "critical").length;
  const highCount = findings.filter((f) => f.severity === "high").length;
  const mediumCount = findings.filter((f) => f.severity === "medium").length;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0a0e1a] text-white pt-24 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 bg-white/[0.02] p-6 rounded-2xl border border-white/5">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Tableau de bord de Sécurité</h1>
              <p className="text-gray-400 text-sm mt-1">
                Données en direct connectées à Supabase
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={loadData}
                className="p-2.5 rounded-lg border border-white/10 hover:bg-white/5 transition text-gray-300"
                title="Actualiser"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
              </button>
              <button
                onClick={() => setShowAddModal(true)}
                className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-4 py-2.5 rounded-xl flex items-center gap-2 transition shadow-lg shadow-cyan-500/20"
              >
                <Plus className="w-4 h-4" />
                Ajouter un actif
              </button>
            </div>
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-white/5 border border-cyan-500/20 rounded-xl p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400 text-sm">Actifs surveillés</span>
                <Shield className="w-5 h-5 text-cyan-400" />
              </div>
              <div className="text-3xl font-bold">{assets.length}</div>
            </div>

            <div className="bg-white/5 border border-red-500/20 rounded-xl p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400 text-sm">Failles Critiques</span>
                <AlertTriangle className="w-5 h-5 text-red-400" />
              </div>
              <div className="text-3xl font-bold">{criticalCount}</div>
            </div>

            <div className="bg-white/5 border border-orange-500/20 rounded-xl p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400 text-sm">Failles Hautes</span>
                <ShieldAlert className="w-5 h-5 text-orange-400" />
              </div>
              <div className="text-3xl font-bold">{highCount}</div>
            </div>

            <div className="bg-white/5 border border-purple-500/20 rounded-xl p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400 text-sm">Score Sécurité</span>
                <Activity className="w-5 h-5 text-purple-400" />
              </div>
              <div className="text-3xl font-bold">
                {findings.length === 0 ? "100%" : `${Math.max(15, 100 - criticalCount * 25 - highCount * 10 - mediumCount * 5)}%`}
              </div>
            </div>
          </div>

          {/* Section 1 : Tableau des Actifs avec Bouton Scanner */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5 text-cyan-400" />
              Vos Actifs & Périmètre d&apos;Évaluation
            </h2>

            {assets.length === 0 ? (
              <p className="text-gray-400 text-sm py-4">Aucun actif enregistré.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-white/10 text-gray-400">
                      <th className="pb-3">Nom</th>
                      <th className="pb-3">URL / Cible</th>
                      <th className="pb-3">Criticité</th>
                      <th className="pb-3">Statut</th>
                      <th className="pb-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {assets.map((asset) => (
                      <tr key={asset.id} className="hover:bg-white/[0.02]">
                        <td className="py-3 font-semibold text-white">{asset.name}</td>
                        <td className="py-3 text-cyan-400 font-mono text-xs">{asset.url}</td>
                        <td className="py-3">
                          <span className="px-2 py-0.5 rounded text-xs font-medium uppercase bg-blue-500/20 text-blue-400">
                            {asset.criticality}
                          </span>
                        </td>
                        <td className="py-3">
                          <span className={`px-2 py-0.5 rounded text-xs uppercase ${
                            asset.status === "vulnerable"
                              ? "bg-red-500/20 text-red-400 border border-red-500/30"
                              : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                          }`}>
                            {asset.status}
                          </span>
                        </td>
                        <td className="py-3 text-right">
                          <button
                            onClick={() => handleLaunchScan(asset.id, asset.name)}
                            disabled={scanningId === asset.id}
                            className="bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 px-3 py-1 rounded-lg text-xs font-semibold inline-flex items-center gap-1.5 transition disabled:opacity-50"
                          >
                            <Play className={`w-3 h-3 ${scanningId === asset.id ? "animate-spin" : ""}`} />
                            {scanningId === asset.id ? "Scan en cours..." : "Lancer le scan"}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Section 2 : Vulnérabilités Détectées */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Server className="w-5 h-5 text-red-400" />
              Vulnérabilités confirmées ({findings.length})
            </h2>

            {findings.length === 0 ? (
              <div className="text-center py-8 text-gray-400">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-2 opacity-80" />
                <p>Aucune vulnérabilité active détectée.</p>
                <p className="text-xs text-gray-500 mt-1">
                  Cliquez sur &quot;Lancer le scan&quot; sur un actif pour exécuter les tests de sécurité.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {findings.map((f) => (
                  <div
                    key={f.id}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-white text-base">{f.title}</span>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                          f.severity === "critical"
                            ? "bg-red-500 text-white"
                            : f.severity === "high"
                            ? "bg-orange-500 text-white"
                            : "bg-yellow-500 text-black"
                        }`}>
                          {f.priority} - {f.severity}
                        </span>
                      </div>
                      <div className="text-xs text-gray-400 mt-1 font-mono">
                        {f.cwe} • Endpoint: {f.endpoint}
                      </div>
                      {f.remediation && (
                        <div className="text-xs text-emerald-400 mt-2 bg-emerald-500/5 p-2 rounded border border-emerald-500/10">
                          <strong>Remédiation :</strong> {f.remediation}
                        </div>
                      )}
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-xs text-gray-400">Score de risque</div>
                      <div className="text-xl font-bold text-red-400">{f.risk_score}/100</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Modal Ajout d'actif */}
        {showAddModal && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-[#0e1424] border border-white/10 rounded-2xl p-6 max-w-md w-full">
              <h3 className="text-xl font-bold text-white mb-4">Ajouter un actif à surveiller</h3>
              <form onSubmit={handleAddAsset} className="space-y-4">
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Nom de l&apos;actif *</label>
                  <input
                    required
                    placeholder="Ex: API Paiements"
                    value={newAsset.name}
                    onChange={(e) => setNewAsset({ ...newAsset, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1">URL / Endpoint *</label>
                  <input
                    required
                    type="url"
                    placeholder="https://api.mon-site.com"
                    value={newAsset.url}
                    onChange={(e) => setNewAsset({ ...newAsset, url: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Type</label>
                    <select
                      value={newAsset.type}
                      onChange={(e) => setNewAsset({ ...newAsset, type: e.target.value })}
                      className="w-full bg-[#0a0e1a] border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-cyan-500"
                    >
                      <option value="web">Web App</option>
                      <option value="api">API REST</option>
                      <option value="mobile">Mobile Backend</option>
                      <option value="infrastructure">Serveur / Infra</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Criticité</label>
                    <select
                      value={newAsset.criticality}
                      onChange={(e) => setNewAsset({ ...newAsset, criticality: e.target.value })}
                      className="w-full bg-[#0a0e1a] border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-cyan-500"
                    >
                      <option value="critical">Critique (P0)</option>
                      <option value="high">Haute (P1)</option>
                      <option value="medium">Moyenne (P2)</option>
                      <option value="low">Basse (P3)</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="px-4 py-2 text-sm text-gray-400 hover:text-white"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    disabled={adding}
                    className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-4 py-2 rounded-lg text-sm transition disabled:opacity-50"
                  >
                    {adding ? "Enregistrement..." : "Enregistrer"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
