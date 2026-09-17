"use client";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { createClient } from "@supabase/supabase-js";
import { CheckCircle2, Shield } from "lucide-react";

export default function Demo() {
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    company_size: "",
    message: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    const { error } = await supabase.from("prospects").insert([
      {
        name: form.name,
        email: form.email,
        company: form.company,
        role: form.role,
        company_size: form.company_size,
        message: form.message,
      },
    ]);
    setLoading(false);
    if (!error) setDone(true);
    else alert("Erreur : " + error.message);
  }

  function update(field: string, value: string) {
    setForm({ ...form, [field]: value });
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0a0e1a] text-white pt-32 pb-20 px-4">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
            <h1 className="text-3xl font-bold">Demander une démo</h1>
            <p className="text-gray-400 mt-2">30 minutes, sans engagement.</p>
          </div>
          {done ? (
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-8 text-center">
              <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto mb-3" />
              <h2 className="text-xl font-bold">Demande envoyée !</h2>
              <p className="text-gray-400 mt-2">On vous recontacte sous 24h.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input required placeholder="Nom complet *" value={form.name} onChange={(e) => update("name", e.target.value)} className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 placeholder-gray-500 focus:outline-none focus:border-cyan-500" />
                <input required type="email" placeholder="Email pro *" value={form.email} onChange={(e) => update("email", e.target.value)} className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 placeholder-gray-500 focus:outline-none focus:border-cyan-500" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input required placeholder="Entreprise *" value={form.company} onChange={(e) => update("company", e.target.value)} className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 placeholder-gray-500 focus:outline-none focus:border-cyan-500" />
                <input placeholder="Poste (RSSI, CTO...)" value={form.role} onChange={(e) => update("role", e.target.value)} className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 placeholder-gray-500 focus:outline-none focus:border-cyan-500" />
              </div>
              <select value={form.company_size} onChange={(e) => update("company_size", e.target.value)} className="w-full bg-[#0a0e1a] border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500">
                <option value="">Taille entreprise</option>
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-200">51-200</option>
                <option value="201-1000">201-1000</option>
                <option value="1000+">1000+</option>
              </select>
              <textarea placeholder="Votre défi (DORA, faux positifs...)" value={form.message} onChange={(e) => update("message", e.target.value)} rows={3} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 placeholder-gray-500 focus:outline-none focus:border-cyan-500" />
              <button type="submit" disabled={loading} className="w-full bg-cyan-500 text-black font-bold py-3 rounded-xl disabled:opacity-50">
                {loading ? "Envoi..." : "Envoyer ma demande"}
              </button>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}