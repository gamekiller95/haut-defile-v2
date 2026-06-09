'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Factory, Layers, Cpu, ShieldAlert, CheckCircle2 } from 'lucide-react';

// Structuring the standard manufacturing matrix for high-volume apparel sourcing
const FACTORY_DATA = [
  {
    name: "Hameem Group.",
    location: "Ashulia, Dhaka",
    category: "denim",
    lines: 24,
    workers: "2,800+",
    capacity: "500,000 Pcs / Month",
    specialty: "Denim, Chinos, Heavy Wash Denim Jeans, Distressed Jackets, Laser-Engraved Garments",
    machinery: ["Mayer & Cie Circular Knitting", "Pegasus Overlock", "Santex Finishing Tunnels"],
    compliance: ["BSCI", "OEKO-TEX", "SEDEX 4-Pillar", "RSC Approved"]
  },
  {
    name: "Vanguard Woven Apparels Ltd.",
    location: "Savar, Dhaka",
    category: "woven",
    lines: 18,
    workers: "2,200+",
    capacity: "500,000 Pcs / Month",
    specialty: "Casual Button-Down Shirts, Structured Chinos, Cargo Shorts",
    machinery: ["Juki Automatic Pocket Setters", "Brother Programmable Quilting", "Macpi Pressing Units"],
    compliance: ["WRAP Gold", "BSCI", "RSC Approved"]
  },
  {
    name: "Dhaka Denim Matrix & Wash Facility",
    location: "Narayanganj, Bangladesh",
    category: "denim",
    lines: 12,
    workers: "1,500+",
    capacity: "400,000 Pcs / Month",
    specialty: "Heavy Wash Denim Jeans, Distressed Jackets, Laser-Engraved Garments",
    machinery: ["VAV Laser Engraving Systems", "Tonello Eco-Wash Tumbelers", "Juki Heavy-Duty Twin Needle"],
    compliance: ["GOTS Organic Certified", "GRS (Recycled Claim)", "Sedex Member"]
  }
];

export default function AssociatedFactories() {
  const [filter, setFilter] = useState('all');

  const filteredFactories = filter === 'all' 
    ? FACTORY_DATA 
    : FACTORY_DATA.filter(f => f.category === filter);

  // Consolidated statistics for corporate profiling
  const totalCapacity = "1.8 Million Pcs / Month";
  const partnerFactoriesCount = FACTORY_DATA.length;
  const aggregateWorkers = "6,500+ Certified Operators";

  return (
    // FIX 1: Removed 'pt-32' and 'px-6' from the outer wrapper container
    <div className="bg-[#f7f7f5] min-h-screen pb-20 text-stone-900 w-full">
      
      {/* FIX 2: Full-width container header block stretching completely to viewport edges */}
      <div className="w-full bg-stone-900 text-white pt-32 pb-12 px-6 mb-16">
        <div className="max-w-6xl mx-auto">
          
          {/* HEADER BLOCK CONTENT */}
          <div className="text-center mb-12">
            <p className="uppercase tracking-[0.4em] text-xs text-amber-400 font-semibold mb-2">Industrial Footprint</p>
            <h1 className="font-serif text-4xl md:text-5xl tracking-tight mb-4 text-white">Our Associated Factories</h1>
            <p className="text-stone-300 text-sm max-w-2xl mx-auto leading-relaxed opacity-90">
              We operate a distributed network of heavily audited, technologically advanced manufacturing bases in key manufacturing sectors across Dhaka, Bangladesh.
            </p>
          </div>

          {/* INDUSTRIAL METRICS OVERVIEW INSIDE DARK HERO */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-stone-800 py-8 text-center sm:text-left">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-stone-400 block mb-1">Aggregate Output</span>
              <span className="font-serif text-2xl font-bold text-amber-400">{totalCapacity}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-stone-400 block mb-1">Network Base</span>
              <span className="font-serif text-2xl font-bold text-white">{partnerFactoriesCount} Tier-1 Facilities</span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-stone-400 block mb-1">Ethical Workforce</span>
              <span className="font-serif text-2xl font-bold text-white">{aggregateWorkers}</span>
            </div>
          </div>

        </div>
      </div>

      {/* FIX 3: Isolated structural wrapper container keeping the main content cleanly centered */}
      <div className="max-w-6xl mx-auto px-6">

        {/* TAB FILTER SELECTION */}
        <div className="flex justify-center space-x-6 mb-12">
          {['all', 'knit', 'woven', 'denim'].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`text-xs uppercase tracking-widest pb-2 px-1 transition-all border-b-2 font-medium bg-transparent border-none cursor-pointer ${
                filter === type 
                  ? 'border-stone-900 text-stone-900 font-bold' 
                  : 'border-transparent text-stone-400 hover:text-stone-700'
              }`}
            >
              {type} Facility Group
            </button>
          ))}
        </div>

        {/* DYNAMIC FACTORY LISTING LAYOUT */}
        <div className="space-y-8">
          {filteredFactories.map((factory, index) => (
            <div key={index} className="bg-white border border-stone-200/80 p-8 flex flex-col lg:flex-row gap-8 justify-between hover:shadow-sm transition-shadow">
              
              {/* PRIMARY DETAILS */}
              <div className="lg:w-1/2 space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-stone-400 text-xs mb-1">
                    <Factory size={14} /> <span>{factory.location}</span>
                  </div>
                  <h3 className="font-serif text-2xl tracking-wide text-stone-900">{factory.name}</h3>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold block">Primary Sourcing Range</span>
                  <p className="text-stone-600 text-xs leading-relaxed">{factory.specialty}</p>
                </div>

                {/* LINE & LABOR MATRIX */}
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="bg-stone-50 p-3 border border-stone-100 rounded-sm">
                    <span className="text-[9px] uppercase tracking-wider text-stone-400 block">Active Layout Lines</span>
                    <span className="text-sm font-bold text-stone-800 flex items-center gap-1.5 mt-0.5">
                      <Layers size={14} className="text-amber-500" /> {factory.lines} Active Lines
                    </span>
                  </div>
                  <div className="bg-stone-50 p-3 border border-stone-100 rounded-sm">
                    <span className="text-[9px] uppercase tracking-wider text-stone-400 block">Monthly Yield Target</span>
                    <span className="text-sm font-bold text-stone-800 block mt-0.5">
                      {factory.capacity}
                    </span>
                  </div>
                </div>
              </div>

              {/* TECHNICAL MACHINERY & COMPLIANCE BADGES */}
              <div className="lg:w-1/2 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-stone-100 pt-6 lg:pt-0 lg:pl-8 space-y-6">
                
                {/* ADVANCED MACHINERY ASSET MATRIX */}
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold flex items-center gap-1.5">
                    <Cpu size={12} /> Hardware Infrastructure
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {factory.machinery.map((machine, mIdx) => (
                      <span key={mIdx} className="text-[11px] bg-stone-100 text-stone-600 px-2.5 py-1 rounded-sm">
                        {machine}
                      </span>
                    ))}
                  </div>
                </div>

                {/* COMPLIANCE PASSPORT CODES */}
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold flex items-center gap-1.5">
                    <ShieldAlert size={12} /> Audit Certification Passport
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {factory.compliance.map((cert, cIdx) => (
                      <span key={cIdx} className="text-[10px] font-bold uppercase tracking-wider text-amber-600 bg-amber-50 border border-amber-200/40 px-2 py-0.5 flex items-center gap-1">
                        <CheckCircle2 size={10} /> {cert}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* RE-ROUTING GATEWAY */}
        <div className="mt-16 bg-stone-900 text-white p-8 md:p-12 text-center space-y-4">
          <h3 className="font-serif text-2xl tracking-wide">Require custom factory allocation benchmarks?</h3>
          <p className="text-stone-400 text-xs max-w-xl mx-auto leading-relaxed">
            We match specialized orders with specific factory layouts based on machine capabilities, target price limitations, and speed constraints. Contact our commercial merchandising hub for allocations.
          </p>
          <div className="pt-2">
            <Link href="/rfq" className="inline-block bg-amber-400 text-black px-12 py-3 text-xs uppercase tracking-widest font-bold hover:bg-white transition-colors duration-300">
              Submit Factory Allocation Request
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}