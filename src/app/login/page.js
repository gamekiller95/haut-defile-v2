'use client';

import React from 'react';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex bg-white pt-20">
      {/* Visual Side - Hidden on Mobile */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <img 
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000" 
          alt="Fashion"
          className="absolute inset-0 w-full h-full object-cover grayscale-[20%]"
        />
        <div className="absolute inset-0 bg-stone-900/20" />
      </div>

      {/* Form Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-8 md:px-16">
        <div className="max-w-md w-full">
          <header className="mb-12">
            <span className="text-[10px] uppercase tracking-[0.5em] text-stone-400">Welcome Back</span>
            <h1 className="text-4xl font-serif text-stone-900 mt-2">Sign In</h1>
          </header>

          <form className="space-y-6">
            <div>
              <label className="text-[10px] uppercase tracking-widest text-stone-500 mb-2 block">Email Address</label>
              <input 
                type="email" 
                className="w-full border-b border-stone-200 py-3 outline-none focus:border-amber-400 transition-colors bg-transparent"
                placeholder="email@example.com"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-[10px] uppercase tracking-widest text-stone-500 block">Password</label>
                <a href="#" className="text-[10px] uppercase tracking-widest text-amber-600 hover:text-amber-400">Forgot?</a>
              </div>
              <input 
                type="password" 
                className="w-full border-b border-stone-200 py-3 outline-none focus:border-amber-400 transition-colors bg-transparent"
                placeholder="••••••••"
              />
            </div>

            <button className="w-full bg-stone-900 text-white py-4 text-xs uppercase tracking-[0.2em] hover:bg-amber-400 hover:text-black transition-all duration-500 flex items-center justify-center gap-2 group">
              Enter the Atelier
              <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <p className="mt-8 text-stone-500 text-xs tracking-wide">
            Don't have an account? 
            <Link href="/signup" className="text-stone-900 font-bold ml-2 border-b border-stone-900">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}