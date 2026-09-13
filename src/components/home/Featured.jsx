"use client";

import React from "react";
import { Lock, Shield, Cpu, Activity, KeyRound, Database } from "lucide-react";

export default function FeaturesSections() {
  return (
    <section className="bg-slate-950 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Section 1: Vault & Encryption Core */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
              <Lock className="w-3.5 h-3.5" />
              <span>Military-Grade Vault</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Advanced AES-256 & Python <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Cryptographic Engine
              </span>
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Store your sensitive credentials, secret keys, and personal notes inside an isolated digital vault. Powered by secure hashing and master key decryption workflows.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <Database className="w-6 h-6 text-cyan-400 mb-2" />
                <h4 className="text-white font-semibold text-sm">MongoDB Secure</h4>
                <p className="text-xs text-slate-400 mt-1">Hashed credentials & encrypted text payload storage.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <Cpu className="w-6 h-6 text-blue-400 mb-2" />
                <h4 className="text-white font-semibold text-sm">Python Backend</h4>
                <p className="text-xs text-slate-400 mt-1">Heavy cryptography computation handled seamlessly.</p>
              </div>
            </div>
          </div>

          {/* Card Right */}
          <div className="lg:col-span-6">
            <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl relative overflow-hidden group hover:border-cyan-500/50 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all" />
              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Vault Status</span>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono">Active</span>
                </div>
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between">
                    <span className="text-sm text-slate-300 font-medium">Master Password Hash</span>
                    <span className="text-xs font-mono text-cyan-400">Argon2 Verified</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between">
                    <span className="text-sm text-slate-300 font-medium">Data Payload</span>
                    <span className="text-xs font-mono text-blue-400">AES-256 Cipher</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Crypto Assets & Anomaly Guard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Card Left */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl relative overflow-hidden group hover:border-blue-500/50 transition-colors">
              <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all" />
              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">Security Guard</span>
                  <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono">Monitoring</span>
                </div>
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between">
                    <span className="text-sm text-slate-300 font-medium">Anomaly Detection</span>
                    <span className="text-xs font-mono text-emerald-400">0 Threats</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between">
                    <span className="text-sm text-slate-300 font-medium">Crypto Keys Manager</span>
                    <span className="text-xs font-mono text-blue-400">Isolated</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold">
              <Shield className="w-3.5 h-3.5" />
              <span>Threat & Asset Protection</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Secure Crypto Wallets & <br />
              <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                Anomaly Detection System
              </span>
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Manage digital blockchain keys with deterministic generation while keeping a continuous watch on suspicious user behavior through automated audit logging.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <KeyRound className="w-6 h-6 text-blue-400 mb-2" />
                <h4 className="text-white font-semibold text-sm">Crypto Wallet</h4>
                <p className="text-xs text-slate-400 mt-1">Private key control and transaction security layers.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <Activity className="w-6 h-6 text-cyan-400 mb-2" />
                <h4 className="text-white font-semibold text-sm">Audit Trails</h4>
                <p className="text-xs text-slate-400 mt-1">Real-time behavior baseline and threat alerts.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}