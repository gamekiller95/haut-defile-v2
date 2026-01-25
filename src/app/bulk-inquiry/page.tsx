'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BsArrowLeft, BsCheckCircle } from 'react-icons/bs';

export default function BulkInquiryPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // ADD 'async' here to allow 'await' inside the function
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      company: formData.get('company'),
      email: formData.get('email'),
      quantity: formData.get('quantity'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-stone-800 flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <BsCheckCircle className="text-amber-500 text-6xl mx-auto mb-6" />
          <h1 className="font-serif text-white text-4xl mb-4">Inquiry Received</h1>
          <p className="text-white/70 mb-8 leading-relaxed">
            Thank you. Our Dhaka atelier team will contact you shortly.
          </p>
          <Link href="/" className="inline-block border border-white text-white px-8 py-3 text-xs uppercase tracking-widest hover:bg-amber-400 hover:text-black hover:border-amber-400 transition">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-800 text-stone-900 font-sans">
      <nav className="p-8">
        <Link href="/" className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-stone-500 hover:text-amber-500 transition">
        </Link>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <span className="text-amber-500 uppercase tracking-[0.3em] text-xs font-bold">Partnerships</span>
          <h1 className="font-serif text-white text-5xl md:text-7xl mt-4 mb-8">Wholesale</h1>
          <p className="text-white/70 leading-relaxed mb-8 max-w-md">
            Haut Défilé provides export-quality manufacturing solutions from Dhaka.
          </p>
        </div>

        <div className="bg-[#FFF9ED]/80 p-8 md:p-12 shadow-sm border border-stone-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[12px] uppercase tracking-widest font-bold">Full Name *</label>
                <input name="name" required type="text" className="border-b border-stone-200 py-2 focus:border-amber-400 outline-none transition" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[12px] uppercase tracking-widest font-bold">Company *</label>
                <input name="company" required type="text" className="border-b border-stone-200 py-2 focus:border-amber-400 outline-none transition" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[12px] uppercase tracking-widest font-bold">Business Email *</label>
              <input name="email" required type="email" className="border-b border-stone-200 py-2 focus:border-amber-400 outline-none transition" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[12px] uppercase tracking-widest font-bold">Estimated Quantity</label>
              <select name="quantity" className="border-b border-stone-200 py-2 focus:border-amber-400 outline-none transition bg-transparent">
                <option>50 - 200 units</option>
                <option>200 - 1000 units</option>
                <option>1000+ units</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[12px] uppercase tracking-widest font-bold">Message</label>
              <textarea name="message" rows={4} className="border-b border-stone-200 py-2 focus:border-amber-400 outline-none transition resize-none" />
            </div>

            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="w-full bg-stone-900 text-white py-5 text-xs uppercase tracking-[0.3em] hover:bg-amber-400 hover:text-black transition-all duration-500 disabled:opacity-50"
            >
              {status === 'loading' ? 'Processing...' : 'Submit Inquiry'}
            </button>

            {status === 'error' && (
              <p className="text-red-600 text-[10px] uppercase tracking-widest text-center">Error sending. Check .env.local and restart server.</p>
            )}
          </form>
        </div>
      </main>
    </div>
  );
}