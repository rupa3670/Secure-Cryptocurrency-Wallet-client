"use client";

import React from "react";
import { ShieldCheck, Lock, ArrowRight, Terminal, Cpu } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 lg:py-32">
      {/* Background Neon Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Actions */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-6">
              <Terminal className="w-3.5 h-3.5" />
              <span>Next-Gen Cryptographic Security Vault</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Secure Your Secrets & <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Crypto Assets
              </span> with Military-Grade Python Encryption
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Protect your sensitive keys, passwords, and digital assets inside an isolated vault powered by Advanced AES-256 encryption, AI anomaly detection, and decentralized architecture.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/register"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:opacity-95 transition-all text-base"
              >
                <span>Get Started Free</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/vault"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white font-semibold transition-all text-base"
              >
                <Lock className="w-4 h-4 text-cyan-400" />
                <span>Explore Vault</span>
              </Link>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-slate-800/80 max-w-lg mx-auto lg:mx-0">
              <div>
                <p className="text-2xl font-bold text-white">AES-256</p>
                <p className="text-xs text-slate-400 mt-1">Encryption Core</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">100%</p>
                <p className="text-xs text-slate-400 mt-1">Data Isolation</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">Node + Py</p>
                <p className="text-xs text-slate-400 mt-1">Hybrid Stack</p>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Vault Card / Graphic */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glow Card Container */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 to-indigo-600 opacity-30 blur-xl" />
              
              <div className="relative rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
                
                <div className="flex items-center justify-between pb-6 border-b border-slate-800 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                      <ShieldCheck className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg">Active Vault Status</h3>
                      <p className="text-xs text-cyan-400 font-mono">Encrypted & Protected</p>
                    </div>
                  </div>
                  <span className="inline-block w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                {/* Simulated Vault Items */}
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Cpu className="w-5 h-5 text-cyan-400" />
                      <div>
                        <p className="text-sm font-medium text-slate-200">Master Secret Engine</p>
                        <p className="text-xs text-slate-500 font-mono">Python Core Connected</p>
                      </div>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 font-mono">Secure</span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Lock className="w-5 h-5 text-blue-400" />
                      <div>
                        <p className="text-sm font-medium text-slate-200">Crypto Wallet Keys</p>
                        <p className="text-xs text-slate-500 font-mono">SHA-256 Hashed</p>
                      </div>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 font-mono">Synced</span>
                  </div>
                </div>

                {/* Footer status box */}
                <div className="mt-6 p-4 rounded-xl bg-slate-950/60 border border-slate-800/60 text-center">
                  <p className="text-xs text-slate-400">
                    Anomaly Detection: <span className="text-emerald-400 font-semibold">No threats detected</span>
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}