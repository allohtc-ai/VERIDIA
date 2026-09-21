import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { 
  Shield, ArrowRight, Sparkles, Zap, CheckCircle2, 
  BarChart3, Play, ShieldCheck, AlertTriangle, Clock, Award, 
  Building2, Store, Lock, FileText
} from "lucide-react";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0a0e1a] text-white overflow-hidden">
        {/* HERO */}
        <section className="relative pt-32 pb-20 px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-cyan-500/30 rounded-full px-4 py-2 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
            <span className="text-sm font-semibold text-cyan-300">DORA en vigueur — Conformité PCI DSS v4 & NIS2</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight">
            La sécurité applicative
            <br />
            <span className="text-cyan-400">prouvée, pas promise.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            La plateforme française qui orchestre vos tests de sécurité, vérifie les corrections et génère les preuves d&apos;audit DORA, NIS2 et PCI DSS en un clic.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/demo" className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 py-4 rounded-xl text-lg transition flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5" />
              Demander une démo gratuite
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/dashboard" className="border border-white/20 hover:bg-white/5 text-white font-semibold px-8 py-4 rounded-xl text-lg transition flex items-center justify-center gap-2">
              <Play className="w-4 h-4 text-cyan-400" />
              Voir la Démo Live
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="text-3xl font-bold text-cyan-400">80%</div>
              <div className="text-xs text-gray-400 mt-1">de bruit en moins</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="text-3xl font-bold text-emerald-400">4h</div>
              <div className="text-xs text-gray-400 mt-1">MTTR moyen P0</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="text-3xl font-bold text-purple-400">30s</div>
              <div className="text-xs text-gray-400 mt-1">pour générer l&apos;audit</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="text-3xl font-bold text-blue-400">100%</div>
              <div className="text-xs text-gray-400 mt-1">tests autorisés</div>
            </div>
          </div>
        </section>

        {/* SECTION NOS SOLUTIONS PAR SECTEUR */}
        <section id="solutions" className="py-20 px-4 bg-[#060912]">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1 text-cyan-400 text-xs font-semibold mb-3">
              <Building2 className="w-3.5 h-3.5" /> Nos Solutions Métier
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Une réponse adaptée à votre secteur</h2>
            <p className="text-gray-400 text-sm max-w-2xl mx-auto">VERIDIA s&apos;adapte aux contraintes réglementaires et opérationnelles de chaque secteur.</p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-500/30 transition">
              <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl w-fit mb-4">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl mb-2">Fintechs & Banques</h3>
              <p className="text-sm text-gray-400 mb-4">Répondez aux exigences strictes du règlement européen DORA et de PCI DSS v4 avec preuves d&apos;audit automatisées.</p>
              <ul className="space-y-1.5 text-xs text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Registre d&apos;autorisation immuable</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Export de rapport DORA en 1 clic</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition">
              <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl w-fit mb-4">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl mb-2">Cabinets de Pentest & MSSP</h3>
              <p className="text-sm text-gray-400 mb-4">Productisez votre méthodologie. Automatisez la gouvernance des missions et la vérification des correctifs clients.</p>
              <ul className="space-y-1.5 text-xs text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> Traçabilité légale totale des audits</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> Re-tests automatisés des failles corrigées</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition">
              <div className="p-3 bg-purple-500/10 text-purple-400 rounded-xl w-fit mb-4">
                <Store className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl mb-2">E-commerce & Retail</h3>
              <p className="text-sm text-gray-400 mb-4">Protégez vos paniers, transactions et données clients contre les injections, IDOR et failles de logique métier.</p>
              <ul className="space-y-1.5 text-xs text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400" /> Scans non destructifs en production</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400" /> Conformité PCI DSS v4 simplifiée</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-emerald-500/30 transition">
              <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl w-fit mb-4">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl mb-2">PME & Scale-ups SaaS</h3>
              <p className="text-sm text-gray-400 mb-4">Réduisez de 80% le bruit des faux positifs et rassurez vos grands clients enterprise avec des rapports de sécurité clairs.</p>
              <ul className="space-y-1.5 text-xs text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Score de risque 0-100 explicable</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Intégration Jira / GitHub en 5 min</li>
              </ul>
            </div>

          </div>
        </section>

        {/* FONCTIONNALITÉS */}
        <section id="features" className="py-20 px-4">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">La technologie VERIDIA</h2>
            <p className="text-gray-400">Gouvernance, orchestration et preuves en continu.</p>
          </div>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6">
              <ShieldCheck className="w-8 h-8 text-cyan-400 mb-3" />
              <h3 className="font-bold text-xl mb-2">Gouvernance vérifiable</h3>
              <p className="text-sm text-gray-400">Machine à états inviolable. Aucun scan n&apos;est exécuté sans autorisation formelle.</p>
            </div>
            <div className="bg-white/5 border border-blue-500/20 rounded-2xl p-6">
              <Zap className="w-8 h-8 text-blue-400 mb-3" />
              <h3 className="font-bold text-xl mb-2">Orchestration multi-moteurs</h3>
              <p className="text-sm text-gray-400">DAST, SAST et SCA. Vos outils (ZAP, Trivy, Semgrep) enfin coordonnés.</p>
            </div>
            <div className="bg-white/5 border border-purple-500/20 rounded-2xl p-6">
              <BarChart3 className="w-8 h-8 text-purple-400 mb-3" />
              <h3 className="font-bold text-xl mb-2">Priorisation contextuelle</h3>
              <p className="text-sm text-gray-400">Score de risque 0-100 calculé avec votre contexte métier réel.</p>
            </div>
            <div className="bg-white/5 border border-emerald-500/20 rounded-2xl p-6">
              <CheckCircle2 className="w-8 h-8 text-emerald-400 mb-3" />
              <h3 className="font-bold text-xl mb-2">Preuve de correction</h3>
              <p className="text-sm text-gray-400">Re-test déterministe automatique. Pas de fermeture sans preuve validée.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 text-center bg-[#060912]">
          <h2 className="text-3xl font-bold mb-4">Prêt à sécuriser vos applications ?</h2>
          <p className="text-gray-400 mb-8">Démo de 15 minutes, sans engagement.</p>
          <Link href="/demo" className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 py-4 rounded-xl text-lg transition inline-flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            Réserver ma démo gratuite
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}