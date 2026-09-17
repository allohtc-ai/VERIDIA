import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0a0e1a] text-white">
        {/* HERO */}
        <section className="pt-32 pb-16 px-4 text-center">
          <p className="text-cyan-400 text-sm mb-6 border border-cyan-500/30 rounded-full px-4 py-1 inline-block">
            DORA en vigueur — NIS2 — PCI DSS v4 obligatoire
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            La sécurité applicative
            <br />
            <span className="text-cyan-400">prouvée, pas promise.</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
            VERIDIA orchestre vos tests de sécurité, vérifie les corrections,
            et génère les preuves DORA, NIS2, PCI DSS et RGPD en 1 clic.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo" className="bg-cyan-500 text-black font-bold px-8 py-3 rounded-xl">
              Demander une démo gratuite
            </Link>
            <Link href="#features" className="border border-white/20 px-8 py-3 rounded-xl">
              Voir les fonctionnalités
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-2xl mx-auto">
            <div><div className="text-2xl font-bold text-cyan-400">80%</div><div className="text-xs text-gray-500">de bruit en moins</div></div>
            <div><div className="text-2xl font-bold text-cyan-400">4h</div><div className="text-xs text-gray-500">MTTR moyen P0</div></div>
            <div><div className="text-2xl font-bold text-cyan-400">30s</div><div className="text-xs text-gray-500">pour générer l&apos;audit</div></div>
            <div><div className="text-2xl font-bold text-cyan-400">100%</div><div className="text-xs text-gray-500">tests autorisés</div></div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="py-16 px-4 bg-[#060912]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">Comment VERIDIA vous aide</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="font-semibold text-lg mb-2">🛡️ Gouvernance d&apos;autorisation</h3>
                <p className="text-gray-400 text-sm">Chaque test est autorisé, borné et tracé. Kill switch automatique en cas de dérive.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="font-semibold text-lg mb-2">⚡ Orchestration</h3>
                <p className="text-gray-400 text-sm">DAST + SAST + SCA. VERIDIA connecte vos outils existants (ZAP, Trivy, Semgrep).</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="font-semibold text-lg mb-2">📊 Priorisation</h3>
                <p className="text-gray-400 text-sm">Score 0-100 avec votre contexte réel. Pas juste le CVSS.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="font-semibold text-lg mb-2">✅ Vérification</h3>
                <p className="text-gray-400 text-sm">Quand un dev dit c&apos;est fait, VERIDIA retourne vérifier. Pas de fermeture sans preuve.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à prouver votre sécurité ?</h2>
          <p className="text-gray-400 mb-6">Démo 30 min, sans engagement.</p>
          <Link href="/demo" className="bg-cyan-500 text-black font-bold px-8 py-3 rounded-xl inline-block">
            Demander une démo
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}