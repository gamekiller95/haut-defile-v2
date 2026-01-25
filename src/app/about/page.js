'use client';

import React from 'react';
import { Award, Globe, Heart, PenTool } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 bg-white">
      {/* HERO SECTION */}
      <section className="max-w-5xl mx-auto px-6 text-center mb-24">
        <h1 className="text-xs uppercase tracking-[0.5em] text-gray-400 mb-6">Our Story</h1>
        <h2 className="text-4xl md:text-6xl font-serif font-light leading-tight">
          Redefining Bangladesh's <br /> 
          <span className="italic">Sartorial Heritage</span>
        </h2>
      </section>

      {/* BRAND PHILOSOPHY */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center mb-32">
        <div className="aspect-[4/5] bg-gray-100 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1000" 
            alt="Tailoring" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
          />
        </div>
        <div className="space-y-8">
          <h3 className="text-3xl font-serif">The Atelier Vision</h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            Haut Defilé was founded in Dhaka with a mission to bridge traditional craftsmanship with global fashion. 
          </p>
          <div className="pt-4 border-t w-24 border-black italic font-serif">
            M. Hasan Al Mamun <br />
            <span className="text-xs uppercase tracking-widest text-gray-400 not-italic">Founder</span>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
          <div className="space-y-4">
            <div className="flex justify-center"><PenTool size={32} strokeWidth={1} /></div>
            <h4 className="font-bold uppercase tracking-widest text-sm">Design</h4>
          </div>
          <div className="space-y-4">
            <div className="flex justify-center"><Award size={32} strokeWidth={1} /></div>
            <h4 className="font-bold uppercase tracking-widest text-sm">Quality</h4>
          </div>
          <div className="space-y-4">
            <div className="flex justify-center"><Heart size={32} strokeWidth={1} /></div>
            <h4 className="font-bold uppercase tracking-widest text-sm">Ethics</h4>
          </div>
          <div className="space-y-4">
            <div className="flex justify-center"><Globe size={32} strokeWidth={1} /></div>
            <h4 className="font-bold uppercase tracking-widest text-sm">Global</h4>
          </div>
        </div>
      </section>
    </div>
  );
}