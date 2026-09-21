import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ShieldCheck, Lock, Database, Server, FileText, CheckCircle2 } from "lucide-react";

export default function Confidentialite() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0a0e1a] text-white pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 text-emerald-400 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4" /> Engagement Souveraineté & RGPD
            </div>
            <h1 className="text-3xl md:text-5xl font-black">Respect de votre Vie Privée</h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm">
              La sécurité de vos applications commence par la protection absolue de vos propres données.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
              <Database className="w-8 h-8 text-cyan-400" />
              <h3 className="text-lg font-bold">Zéro Revente de Données</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Vos données d&apos;analyse, rapports d&apos;audit, périmètres et informations de contact ne sont et ne seront JAMAIS vendues, louées ou transmises à des tiers.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
              <Server className="w-8 h-8 text-emerald-400" />
              <h3 className="text-lg font-bold">Hébergement 100% Européen</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Toutes nos infrastructures et bases de données PostgreSQL sont hébergées exclusivement au sein de l&apos;Union Européenne (Région Paris / France).
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
              <Lock className="w-8 h-8 text-purple-400" />
              <h3 className="text-lg font-bold">Chiffrement de Bout en Bout</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Vos données sont chiffrées en transit via TLS 1.3 et au repos via l&apos;algorithme AES-256 avec isolation stricte des clés par tenant.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
              <FileText className="w-8 h-8 text-blue-400" />
              <h3 className="text-lg font-bold">Droits RGPD (Art. 15-22)</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Vous conservez un droit d&apos;accès, de rectification et de suppression totale de vos données en un simple email à dpo@veridia.io.
              </p>
            </div>
          </div>

          <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 space-y-4">
            <h2 className="text-xl font-bold text-white">Vos garanties de souveraineté :</h2>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" /> Conformité stricte au Règlement Général sur la Protection des Données (RGPD 2016/679).</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" /> Purge automatique des données de preuve de test après 30 jours (configurables).</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" /> Audit trail immuable avec horodatage cryptographique.</li>
            </ul>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
