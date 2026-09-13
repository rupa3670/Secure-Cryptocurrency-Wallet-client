"use client";

import React, { useState, useEffect } from "react";
import { ShieldCheck, User, LogOut, LayoutDashboard, Settings, Menu, X } from "lucide-react";
import Link from "next/link";

export default function AppNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    window.location.href = "/login";
  };

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
        
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="p-2 bg-cyan-500/10 border border-cyan-500/30 rounded-xl">
                <ShieldCheck className="w-6 h-6 text-cyan-400" />
              </div>
              <span className="font-bold text-lg tracking-wide bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                CyberVault
              </span>
            </Link>
          </div>

          
          <div className="hidden sm:flex items-center gap-8">
            <Link href="/" className="text-slate-300 hover:text-cyan-400 text-sm font-medium">Overview</Link>
            {isLoggedIn && (
              <>
                <Link href="/vault" className="text-slate-300 hover:text-cyan-400 text-sm font-medium">My Vault</Link>
                <Link href="/crypto" className="text-slate-300 hover:text-cyan-400 text-sm font-medium">Crypto Assets</Link>
              </>
            )}
            <Link href="/audit" className="text-slate-300 hover:text-cyan-400 text-sm font-medium">Security Audit</Link>
          </div>

          
          <div className="hidden sm:flex items-center gap-3">
            {!isLoggedIn ? (
              <>
                <Link
                  href="/login"
                  className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white text-sm font-medium transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium shadow-lg shadow-cyan-500/20"
                >
                  Register
                </Link>
              </>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white text-sm font-medium transition-colors focus:outline-none"
                >
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <User className="w-4 h-4" />
                  </div>
                  <span>Account</span>
                </button>

                {/* User Dropdown Menu */}
                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-52 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl py-2 z-50">
                    <div className="px-4 py-2 border-b border-slate-800 mb-1">
                      <p className="text-xs text-slate-400">Signed in as</p>
                      <p className="text-sm font-semibold text-white truncate">User Account</p>
                    </div>

                    <Link
                      href="/dashboard"
                      onClick={() => setShowDropdown(false)}
                      className="flex items-center gap-2 px-4 py-2.5 text-sm text-slate-300 hover:bg-slate-800/80 hover:text-cyan-400 transition-colors"
                    >
                      <LayoutDashboard className="w-4 h-4 text-cyan-400" />
                      Dashboard
                    </Link>

                    <Link
                      href="/profile"
                      onClick={() => setShowDropdown(false)}
                      className="flex items-center gap-2 px-4 py-2.5 text-sm text-slate-300 hover:bg-slate-800/80 hover:text-cyan-400 transition-colors"
                    >
                      <Settings className="w-4 h-4 text-cyan-400" />
                      Profile Page
                    </Link>

                    <div className="h-px bg-slate-800 my-1" />

                    <button
                      onClick={handleLogout}
                      className="w-full text-left flex items-center gap-2 px-4 py-2.5 text-sm text-red-400 hover:bg-red-500/10 transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-400 hover:text-white">
              {isMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6 text-cyan-400" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="sm:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
          <Link href="/" onClick={() => setIsMenuOpen(false)} className="block py-2 text-slate-300 hover:text-cyan-400 text-base font-medium">Overview</Link>
          {isLoggedIn && (
            <>
              <Link href="/vault" onClick={() => setIsMenuOpen(false)} className="block py-2 text-slate-300 hover:text-cyan-400 text-base font-medium">My Vault</Link>
              <Link href="/crypto" onClick={() => setIsMenuOpen(false)} className="block py-2 text-slate-300 hover:text-cyan-400 text-base font-medium">Crypto Assets</Link>
            </>
          )}
          <Link href="/audit" onClick={() => setIsMenuOpen(false)} className="block py-2 text-slate-300 hover:text-cyan-400 text-base font-medium">Security Audit</Link>
          
          <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
            {!isLoggedIn ? (
              <>
                <Link href="/login" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-center w-full py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 text-sm font-medium">Login</Link>
                <Link href="/register" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-center w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium">Register</Link>
              </>
            ) : (
              <>
                <Link href="/dashboard" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 py-2 text-slate-300 hover:text-cyan-400 text-base font-medium">
                  <LayoutDashboard className="w-4 h-4 text-cyan-400" /> Dashboard
                </Link>
                <Link href="/profile" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 py-2 text-slate-300 hover:text-cyan-400 text-base font-medium">
                  <Settings className="w-4 h-4 text-cyan-400" /> Profile Page
                </Link>
                <button onClick={handleLogout} className="flex items-center gap-2 py-2 text-red-400 text-base font-medium w-full text-left">
                  <LogOut className="w-4 h-4" /> Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}