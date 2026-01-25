'use client';
import React, { useState } from 'react';
import { Mail, Phone, Lock, Chrome, Apple, ArrowRight } from 'lucide-react';

export default function AuthPage() {
  const [step, setStep] = useState('identify'); // identify, otp, register
  const [method, setMethod] = useState('email'); // email or phone

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl uppercase tracking-widest">Haut Defilé</h2>
          <p className="text-gray-500 text-sm mt-2">Sign in to your atelier account</p>
        </div>

        {/* SOCIAL LOGINS */}
        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-2 border py-3 rounded-full hover:bg-gray-50 transition text-sm font-medium">
            <Chrome size={18} /> Google
          </button>
          <button className="flex items-center justify-center gap-2 border py-3 rounded-full hover:bg-gray-50 transition text-sm font-medium">
            <Apple size={18} /> Apple
          </button>
        </div>

        <div className="relative flex items-center py-4">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="flex-shrink mx-4 text-gray-400 text-xs uppercase tracking-widest">Or continue with</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>

        {/* OTP / EMAIL FLOW */}
        <div className="space-y-4">
          <input 
            type="text" 
            placeholder="Email or Phone Number"
            className="w-full px-4 py-4 bg-gray-50 border-none rounded-xl focus:ring-1 focus:ring-black transition outline-none"
          />
          <button 
            onClick={() => setStep('otp')}
            className="w-full bg-black text-white py-4 rounded-xl uppercase tracking-widest text-xs font-bold hover:bg-gray-800 transition"
          >
            Send OTP
          </button>
        </div>

        {step === 'otp' && (
          <div className="mt-4 p-4 bg-yellow-50 rounded-lg text-center animate-pulse">
            <p className="text-xs text-yellow-800">Please enter the 6-digit code sent to your device.</p>
          </div>
        )}
      </div>
    </div>
  );
}