import Link from "next/link";
import { Shield, MapPin, Lock, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#060912] border-t border-white/10 py-12 text-sm">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand & Réseaux Sociaux */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-cyan-400" />
            <span className="text-lg font-bold text-white">VERIDIA</span>
          </div>
          <p className="text-gray-400 text-xs leading-relaxed">
            La preuve, pas la promesse.
            <br />
            Plateforme de gouvernance et de sécurité applicative vérifiable.
          </p>

          {/* Réseaux sociaux avec SVGs propres */}
          <div className="pt-2">
            <span className="text-xs text-gray-500 block mb-2 font-semibold uppercase tracking-wider">Suivez-nous :</span>
            <div className="flex items-center gap-3">
              {/* LinkedIn */}
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-white/10 transition" title="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z"/></svg>
              </a>
              {/* X (Twitter) */}
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-white/10 transition" title="X (Twitter)">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-white/10 transition" title="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.6 13.78 5.6c1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 3h-2.33v6.8c4.56-.93 8-4.96 8-9.8z"/></svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-white/10 transition" title="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Navigation & Solutions */}
        <div>
          <h3 className="text-white font-semibold mb-3 text-base">Nos Solutions</h3>
          <ul className="space-y-2 text-gray-400 text-xs">
            <li><Link href="/#solutions" className="hover:text-white transition">Fintechs & DORA</Link></li>
            <li><Link href="/#solutions" className="hover:text-white transition">Cabinets de Pentest</Link></li>
            <li><Link href="/#solutions" className="hover:text-white transition">E-commerce & PCI DSS</Link></li>
            <li><Link href="/#solutions" className="hover:text-white transition">PME & NIS2</Link></li>
          </ul>
        </div>

        {/* Respect vie privée & Conformité */}
        <div>
          <h3 className="text-white font-semibold mb-3 text-base flex items-center gap-1.5">
            <Lock className="w-4 h-4 text-cyan-400" />
            Vie Privée & RGPD
          </h3>
          <ul className="space-y-2 text-gray-400 text-xs">
            <li><Link href="/confidentialite" className="text-cyan-400 hover:underline font-semibold flex items-center gap-1">Respect de votre vie privée <ExternalLink className="w-3 h-3" /></Link></li>
            <li><span>Hébergement 100% Souverain (Paris)</span></li>
            <li><span>Chiffrement AES-256 au repos</span></li>
            <li><span>Zéro revente de données</span></li>
            <li><span>Conformité RGPD Art. 25 & 32</span></li>
          </ul>
        </div>

        {/* Adresse & Plan d'accès */}
        <div>
          <h3 className="text-white font-semibold mb-3 text-base flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-cyan-400" />
            Adresse & Plan d&apos;accès
          </h3>
          <div className="space-y-2 text-gray-400 text-xs leading-relaxed">
            <p className="font-medium text-gray-200">VERIDIA Security Technologies</p>
            <p>Station F — 5 Parvis Alan Turing</p>
            <p>75013 Paris, France</p>
            <p className="text-gray-500 pt-1">🚆 Métro 6 (Chevaleret) • Métro 14 (Bibliothèque)</p>
            <a 
              href="https://maps.google.com/?q=Station+F+Paris" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1 text-cyan-400 hover:underline pt-2 font-semibold"
            >
              Voir le plan d&apos;accès Google Maps <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>

      <div className="mt-10 pt-6 border-t border-white/5 text-center text-xs text-gray-500 max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span>© 2026 VERIDIA. Tous droits réservés.</span>
        <div className="flex items-center gap-6">
          <Link href="/confidentialite" className="hover:text-gray-300">Politique de confidentialité</Link>
          <Link href="/demo" className="hover:text-gray-300">Contact & Support</Link>
        </div>
      </div>
    </footer>
  );
}