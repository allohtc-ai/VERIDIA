"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Shield, Menu, X, LogIn, Sparkles } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-[#0a0e1a]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20" 
        : "bg-[#0a0e1a]/50 backdrop-blur-sm"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <Shield className="w-6 h-6 text-black font-bold" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-white tracking-tight">VERIDIA</span>
              <span className="text-[10px] text-cyan-400 font-semibold tracking-widest">SECURITY.PROVEN.</span>
            </div>
          </Link>

          {/* Nav Desktop */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/#solutions" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Nos solutions
            </Link>
            <Link href="/#features" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Fonctionnalités
            </Link>
            <Link href="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Tarifs
            </Link>
            <Link href="/dashboard" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Démo Live
            </Link>
            
            <div className="h-4 w-px bg-white/20 my-auto mx-2" />

            {/* Bouton Se connecter */}
            <Link 
              href="/login" 
              className="text-gray-300 hover:text-white flex items-center gap-1.5 px-3 py-2 rounded-lg border border-white/10 hover:bg-white/5 transition"
            >
              <LogIn className="w-4 h-4 text-cyan-400" />
              <span>Se connecter</span>
            </Link>

            {/* Bouton Démo */}
            <Link
              href="/demo"
              className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-5 py-2.5 rounded-xl transition shadow-lg shadow-cyan-500/20 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-black" />
              <span>Démo gratuite</span>
            </Link>
          </div>

          {/* Bouton Mobile */}
          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/5"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu Mobile */}
        {open && (
          <div className="md:hidden pb-6 space-y-3 border-t border-white/10 pt-4">
            <Link href="/#solutions" className="block px-4 py-2 text-gray-300 hover:text-white">Nos solutions</Link>
            <Link href="/#features" className="block px-4 py-2 text-gray-300 hover:text-white">Fonctionnalités</Link>
            <Link href="/pricing" className="block px-4 py-2 text-gray-300 hover:text-white">Tarifs</Link>
            <Link href="/dashboard" className="block px-4 py-2 text-gray-300 hover:text-white">Démo Live</Link>
            <Link href="/login" className="block px-4 py-2 text-cyan-400 font-semibold">Se connecter</Link>
            <Link href="/demo" className="block bg-cyan-500 text-black font-bold px-4 py-3 rounded-xl text-center">
              Démo gratuite
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}