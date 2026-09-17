import Link from "next/link";
import { Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#060912] border-t border-white/10 py-10" translate="no">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Shield className="w-6 h-6 text-cyan-400" />
            <span className="text-lg font-bold text-white">VERIDIA</span>
          </div>
          <p className="text-gray-400 text-sm">
            La preuve, pas la promesse.
            <br />
            Sécurité applicative vérifiable.
          </p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Produit</h3>
          <div className="space-y-2 text-sm text-gray-400">
            <div><Link href="/#features" className="hover:text-white">Fonctionnalités</Link></div>
            <div><Link href="/pricing" className="hover:text-white">Tarifs</Link></div>
            <div><Link href="/demo" className="hover:text-white">Démo</Link></div>
          </div>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Conformité</h3>
          <p className="text-sm text-gray-400">DORA • NIS2 • PCI DSS v4 • RGPD • ISO 27001</p>
          <p className="text-sm text-gray-500 mt-2">contact@veridia.io — Paris, France</p>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-gray-600">
        <span translate="no">© 2026 VERIDIA. Tous droits réservés.</span>
      </div>
    </footer>
  );
}