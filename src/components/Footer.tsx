import Link from "next/link";
import { Shield, MapPin, Lock, Linkedin, Facebook, Instagram, Twitter, ExternalLink } from "lucide-react";

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

          {/* Réseaux sociaux */}
          <div className="pt-2">
            <span className="text-xs text-gray-500 block mb-2 font-semibold uppercase tracking-wider">Suivez-nous :</span>
            <div className="flex items-center gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-white/10 transition" title="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-white/10 transition" title="X Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-white/10 transition" title="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-white/10 transition" title="Instagram">
                <Instagram className="w-4 h-4" />
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
