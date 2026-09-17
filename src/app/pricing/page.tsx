import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "990 €",
    period: "/mois",
    desc: "Pour cabinets pentest et PME",
    features: [
      "Jusqu'à 10 actifs",
      "DAST + SCA",
      "Vérification correctifs",
      "Score de risque",
      "Intégration Jira",
      "Support email",
    ],
    popular: false,
  },
  {
    name: "Standard",
    price: "2 500 €",
    period: "/mois",
    desc: "Pour entreprises en croissance",
    features: [
      "Jusqu'à 50 actifs",
      "DAST + SAST + SCA + Config",
      "Score 0-100 + blast radius",
      "Jira + GitHub + Slack",
      "Compliance PCI DSS",
      "Kill switch avancé",
      "Support prioritaire",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Sur devis",
    period: "",
    desc: "Pour grandes entreprises régulées",
    features: [
      "Actifs illimités",
      "Tous moteurs + IAST",
      "Compliance DORA + NIS2 + RGPD",
      "Learning Engine",
      "On-premise possible",
      "SLA garanti",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0a0e1a] text-white pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-3">Tarifs simples</h1>
          <p className="text-gray-400 text-center mb-10">Sans engagement. Premier mois gratuit.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-7 ${
                  plan.popular
                    ? "bg-cyan-500/10 border-2 border-cyan-500/50"
                    : "bg-white/5 border border-white/10"
                }`}
              >
                {plan.popular && (
                  <div className="text-xs bg-cyan-500 text-black font-bold px-3 py-1 rounded-full inline-block mb-3">
                    POPULAIRE
                  </div>
                )}
                <h3 className="font-bold text-xl">{plan.name}</h3>
                <p className="text-gray-400 text-sm">{plan.desc}</p>
                <div className="my-5">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-400 text-sm">{plan.period}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/demo"
                  className={`block text-center font-semibold py-3 rounded-xl ${
                    plan.popular
                      ? "bg-cyan-500 text-black"
                      : "border border-white/20"
                  }`}
                >
                  Demander une démo
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}