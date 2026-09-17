"use client";
import { useState } from "react";
import Link from "next/link";
import { Shield, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0e1a]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-cyan-400" />
            <span className="text-xl font-bold text-white tracking-wider">VERIDIA</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#features" className="text-gray-300 hover:text-white">Fonctionnalités</Link>
            <Link href="/pricing" className="text-gray-300 hover:text-white">Tarifs</Link>
            <Link href="/demo" className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-5 py-2 rounded-lg">Demander une démo</Link>
          </div>
          <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 space-y-3">
            <Link href="/#features" className="block text-gray-300">Fonctionnalités</Link>
            <Link href="/pricing" className="block text-gray-300">Tarifs</Link>
            <Link href="/demo" className="block bg-cyan-500 text-black font-semibold px-5 py-2 rounded-lg text-center">Demander une démo</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
