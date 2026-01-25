'use client';

import React from 'react';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex bg-white pt-20">
      {/* Form Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-8 md:px-16">
        <div className="max-w-md w-full">
          <header className="mb-12">
            <span className="text-[10px] uppercase tracking-[0.5em] text-stone-400">Join Us</span>
            <h1 className="text-4xl font-serif text-stone-900 mt-2">Create Account</h1>
          </header>

          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] uppercase tracking-widest text-stone-500 mb-2 block">First Name</label>
                <input type="text" className="w-full border-b border-stone-200 py-3 outline-none focus:border-amber-400 transition-colors bg-transparent" />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest text-stone-500 mb-2 block">Last Name</label>
                <input type="text" className="w-full border-b border-stone-200 py-3 outline-none focus:border-amber-400 transition-colors bg-transparent" />
              </div>
            </div>

            <div>
              <label className="text-[10px] uppercase tracking-widest text-stone-500 mb-2 block">Email Address</label>
              <input type="email" className="w-full border-b border-stone-200 py-3 outline-none focus:border-amber-400 transition-colors bg-transparent" />
            </div>

            <div>
              <label className="text-[10px] uppercase tracking-widest text-stone-500 mb-2 block">Create Password</label>
              <input type="password" className="w-full border-b border-stone-200 py-3 outline-none focus:border-amber-400 transition-colors bg-transparent" />
            </div>

            <div className="flex items-start gap-3 py-2">
              <input type="checkbox" className="mt-1 accent-stone-900" id="terms" />
              <label htmlFor="terms" className="text-[10px] text-stone-500 leading-relaxed uppercase tracking-wider">
                I agree to the <span className="text-stone-900 underline">Terms of Service</span> and <span className="text-stone-900 underline">Privacy Policy</span>.
              </label>
            </div>

            <button className="w-full bg-stone-900 text-white py-4 text-xs uppercase tracking-[0.2em] hover:bg-amber-400 hover:text-black transition-all duration-500 flex items-center justify-center gap-2 group">
              Create Account
              <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <p className="mt-8 text-stone-500 text-xs tracking-wide">
            Already a member? 
            <Link href="/login" className="text-stone-900 font-bold ml-2 border-b border-stone-900">Sign In</Link>
          </p>
        </div>
      </div>

      {/* Visual Side */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <img 
          src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1000" 
          alt="Fashion Atelier"
          className="absolute inset-0 w-full h-full object-cover grayscale-[20%]"
        />
        <div className="absolute inset-0 bg-stone-900/20" />
      </div>
    </div>
  );
}