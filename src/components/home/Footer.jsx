"use client";

import React from "react";
import { ShieldCheck, Terminal, Globe, Lock, Cpu } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-16 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="p-2 bg-cyan-500/10 border border-cyan-500/30 rounded-xl">
                <ShieldCheck className="w-6 h-6 text-cyan-400" />
              </div>
              <span className="font-bold text-lg tracking-wide bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                CyberVault
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Next-generation cryptographic security vault powered by Next.js, Node.js, and Python. Securing your digital secrets, passwords, and crypto assets.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 transition-colors">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 transition-colors">
                <Terminal className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className="hover:text-cyan-400 transition-colors">Overview</Link></li>
              <li><Link href="/vault" className="hover:text-cyan-400 transition-colors">My Vault</Link></li>
              <li><Link href="/crypto" className="hover:text-cyan-400 transition-colors">Crypto Assets</Link></li>
              <li><Link href="/audit" className="hover:text-cyan-400 transition-colors">Security Audit</Link></li>
            </ul>
          </div>

          {/* Security Features */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Security Core</h4>
            <ul className="space-y-2.5 text-sm">
              <li><span className="text-slate-400">AES-256 Engine</span></li>
              <li><span className="text-slate-400">Argon2 Hashing</span></li>
              <li><span className="text-slate-400">Anomaly Detection</span></li>
              <li><span className="text-slate-400">Python Integration</span></li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Architecture</h4>
            <ul className="space-y-2.5 text-sm">
              <li><span className="text-slate-400">Next.js App Router</span></li>
              <li><span className="text-slate-400">Node.js Express</span></li>
              <li><span className="text-slate-400">MongoDB Secure</span></li>
              <li><span className="text-slate-400">Tailwind CSS</span></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500">
            © {new Date().getFullYear()} CyberVault. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-slate-500">
            <span>Secured with Next.js & Python Engine</span>
          </div>
        </div>
      </div>
    </footer>
  );
}