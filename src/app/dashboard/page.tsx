import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Shield, AlertTriangle, CheckCircle2, Activity, Clock, TrendingDown } from "lucide-react";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0a0e1a] text-white pt-24 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold">Tableau de bord</h1>
              <p className="text-gray-400 text-sm">Vue d&apos;ensemble de votre sécurité</p>
            </div>
            <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-emerald-400 text-sm">Scans actifs</span>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-white/5 border border-cyan-500/20 rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-gray-400 text-sm">Actifs surveillés</span>
                <Shield className="w-5 h-5 text-cyan-400" />
              </div>
              <div className="text-3xl font-bold">12</div>
            </div>
            <div className="bg-white/5 border border-red-500/20 rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-gray-400 text-sm">Critiques</span>
                <AlertTriangle className="w-5 h-5 text-red-400" />
              </div>
              <div className="text-3xl font-bold">2</div>
            </div>
            <div className="bg-white/5 border border-emerald-500/20 rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-gray-400 text-sm">Vérifiées</span>
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="text-3xl font-bold">38</div>
            </div>
            <div className="bg-white/5 border border-purple-500/20 rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-gray-400 text-sm">Conformité</span>
                <Activity className="w-5 h-5 text-purple-400" />
              </div>
              <div className="text-3xl font-bold">92%</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="font-semibold mb-4">Findings par priorité</h2>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3"><span className="w-6 font-mono">P0</span><div className="flex-1 bg-white/5 rounded-full h-6"><div className="bg-red-500 h-full rounded-full" style={{ width: "20%" }} /></div><span>2</span></div>
                <div className="flex items-center gap-3"><span className="w-6 font-mono">P1</span><div className="flex-1 bg-white/5 rounded-full h-6"><div className="bg-orange-500 h-full rounded-full" style={{ width: "50%" }} /></div><span>5</span></div>
                <div className="flex items-center gap-3"><span className="w-6 font-mono">P2</span><div className="flex-1 bg-white/5 rounded-full h-6"><div className="bg-yellow-500 h-full rounded-full" style={{ width: "70%" }} /></div><span>14</span></div>
                <div className="flex items-center gap-3"><span className="w-6 font-mono">P3</span><div className="flex-1 bg-white/5 rounded-full h-6"><div className="bg-blue-500 h-full rounded-full" style={{ width: "75%" }} /></div><span>23</span></div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="font-semibold mb-4">Métriques clés</h2>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between"><span className="text-gray-400 flex items-center gap-2"><Clock className="w-4 h-4" /> MTTR P0</span><span className="font-bold">18h</span></div>
                <div className="flex justify-between"><span className="text-gray-400 flex items-center gap-2"><TrendingDown className="w-4 h-4" /> Tendance bruit</span><span className="text-emerald-400 font-bold">-12%</span></div>
                <div className="flex justify-between"><span className="text-gray-400">Dernier scan</span><span>Il y a 2 heures</span></div>
                <div className="flex justify-between"><span className="text-gray-400">Prochain scan</span><span>Dans 22 heures</span></div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-cyan-500/5 border border-cyan-500/20 rounded-xl p-4 text-center">
            <p className="text-cyan-300 text-sm">Dashboard MVP — Données simulées. Connexion ZAP / Trivy à l&apos;étape suivante.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
