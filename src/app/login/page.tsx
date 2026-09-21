"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Shield, Lock, ArrowRight } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    window.location.href = "/dashboard";
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0a0e1a] text-white pt-32 pb-20 px-4 flex items-center justify-center">
        <div className="max-w-md w-full space-y-8 bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md shadow-2xl shadow-black/50">
          
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center mx-auto shadow-lg shadow-cyan-500/20">
              <Shield className="w-6 h-6 text-black font-bold" />
            </div>
            <h1 className="text-2xl font-bold text-white">Espace Client VERIDIA</h1>
            <p className="text-gray-400 text-xs">Accédez à votre console de gouvernance</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">Email professionnel</label>
              <input
                type="email"
                required
                placeholder="rssi@entreprise.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">Mot de passe</label>
              <input
                type="password"
                required
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition"
              />
            </div>

            <div className="flex items-center justify-between text-xs text-gray-400 pt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded bg-white/5 border-white/10 text-cyan-500 focus:ring-0" defaultChecked />
                <span>Se souvenir de moi</span>
              </label>
              <a href="#" className="text-cyan-400 hover:underline">Mot de passe oublié ?</a>
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3.5 rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 mt-2"
            >
              <span>Se connecter</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="pt-4 border-t border-white/10 text-center text-xs text-gray-400">
            Pas encore de compte ?{" "}
            <Link href="/demo" className="text-cyan-400 font-semibold hover:underline">
              Demander un accès démo
            </Link>
          </div>

          <div className="text-center text-[11px] text-gray-500 flex items-center justify-center gap-1">
            <Lock className="w-3 h-3 text-emerald-400" /> Connexion sécurisée SSL TLS 1.3
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}