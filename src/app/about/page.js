'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AboutUs() {
  const milestones = [
    { year: '2023', title: 'Foundation', desc: 'Started operations in Dhaka as a specialized apparel sourcing agency for European fashion retail brands.' },
    { year: '2024', title: 'Network Expansion', desc: 'Working With best certified eco friendly garments factory to ensure best quality products for our customers.' },
    { year: '2025', title: 'Global Delivery Logistics', desc: 'Established cross-border customs optimization handling freight smoothly into UK, EU, and North American markets.' },
    { year: '2026', title: 'Sustainable Horizon', desc: 'Pivoted core operations to prioritize certified sustainable fabrics, organic threads, and green supply infrastructure.' }
  ];

  const team = [
    { name: 'A.W.H.V.P Gomes', role: 'Managing Director', email: 'prasanna@anspl.lk' },
    { name: 'Mr. Y', role: 'Head of Quality Assurance & Audits', email: 'qa@anspl.lk' },
    { name: 'Mr. X', role: 'Head of Marketing & Sourcing (Knit & Woven Portfolio)', email: 'mt@anspl.lk' }
  ];

  const reviews = [
    { quote: "SourcingHub has completely transformed our supply chain reliability. Their strict AQL adherence ensures we rarely face QA friction.", author: "Peter Grondin", company: "Pardon International, France" },
    { quote: "Finding fully compliant, LEED-certified factory matches in Bangladesh was a breeze with their local network infrastructure.", author: "Elena Rostova", company: "Urban Vibe, Germany" },
    { quote: "Their transparency on fabric certification and carbon footprint metrics made our pivot to sustainable apparel effortless.", author: "Jameson Blake", company: "Econic Label, UK" },
    { quote: "Their transparency on fabric certification and carbon footprint metrics made our pivot to sustainable apparel effortless.", author: "Jameson Blake", company: "Econic Label, UK" }
  ];

  // Auto-sliding review logic
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000); // Slides every 5 seconds
    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <div className="bg-[#f7f7f5] min-h-screen pb-20 text-stone-900 w-full">
      
      {/* SECTION 1: HERO CONTAINER */}
      <div className="w-full bg-stone-900 text-white pt-32 pb-20 px-6 mb-20">
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.4em] text-xs text-amber-400 font-semibold mb-2">Our Profile</p>
          <h1 className="font-serif text-4xl md:text-5xl tracking-tight mb-6 text-white">Apparel Network Solution</h1>
          <p className="text-stone-100 text-sm max-w-2xl mx-auto leading-relaxed opacity-90">
            Operating out of the heart of global garment manufacturing in Dhaka, Bangladesh, we bridge the gap between international apparel labels and high-compliance manufacturing ecosystem. We treat corporate product parameters with mathematical precision.
          </p>
        </div>
      </div>

      {/* CORE WRAPPER */}
      <div className="max-w-5xl mx-auto px-6">
        
        {/* SECTION 2: VALUES/PHILOSOPHY */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 border-t border-stone-200/60 pt-16">
          <div>
            <h2 className="font-serif text-2xl uppercase tracking-wide mb-4">Ethical Procurement</h2>
            <p className="text-stone-500 text-xs leading-relaxed">
              We do not believe in cost shortcuts at the cost of safety. Every partner mill in our network must strictly maintain baseline standard certifications. Our permanent physical oversight ensures that workplace fairness and sustainability are guaranteed realities, not just marketing checkboxes.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl uppercase tracking-wide mb-4">Merchandising Precision</h2>
            <p className="text-stone-500 text-xs leading-relaxed">
              From design pattern iterations to lab-dip color checking, our specialized production desks monitor step-by-step developments. We protect your margin target formulas while maintaining international standard AQL guidelines across all product runs.
            </p>
          </div>
        </div>

        {/* NEW SECTION: DIRECTOR & MANAGING DIRECTOR SPEECH */}
        <div className="bg-stone-100 border border-stone-200/80 p-8 md:p-12 mb-24 rounded-sm">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <p className="uppercase tracking-[0.3em] text-[10px] text-amber-500 font-bold mb-2">Leadership Insights</p>
            <h3 className="font-serif text-2xl uppercase tracking-wider">Executive Address</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-xs leading-relaxed text-stone-600">
            {/* Director Speech */}
            <div className="relative border-l-2 border-stone-300 pl-6">
              <span className="absolute left-2 -top-3 text-4xl font-serif text-stone-300 pointer-events-none">“</span>
              <p className="italic mb-4">
                "Our vision has always outgrown the transactional landscape of typical sourcing. Bangladesh holds unparalleled manufacturing potential, but the key to unlocking it globally rests entirely on radical transparency and strict compliance infrastructure."
              </p>
              <div>
                <h4 className="font-serif text-sm font-semibold text-stone-800">A.W.H.V.P Gomes</h4>
                <p className="text-[10px] uppercase tracking-wider text-stone-400">Managing Director</p>
              </div>
            </div>

            {/* Chairman / Executive Director Speech */}
            <div className="relative border-l-2 border-stone-300 pl-6">
              <span className="absolute left-2 -top-3 text-4xl font-serif text-stone-300 pointer-events-none">“</span>
              <p className="italic mb-4">
                "As we step further into green logistics and organic pipelines, we challenge our international partners to reconsider what sustainable manufacturing costs. True resilience isn’t built overnight; it is engineered piece by piece on the factory floor."
              </p>
              <div>
                <h4 className="font-serif text-sm font-semibold text-stone-800">S.A.L Gomes</h4>
                <p className="text-[10px] uppercase tracking-wider text-stone-400">Director</p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3: TIMELINE MILESTONES */}
        <div className="mb-24 border-t border-stone-200/60 pt-16">
          <h3 className="font-serif text-2xl text-center uppercase tracking-wider mb-12">Our Journey Matrix</h3>
          <div className="space-y-8 max-w-3xl mx-auto">
            {milestones.map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-4 border-l-2 border-amber-400 sm:border-l-0 pl-4 sm:pl-0">
                <div className="sm:w-1/4 font-serif text-xl font-bold text-amber-500 sm:text-right sm:pr-8">
                  {item.year}
                </div>
                <div className="sm:w-3/4 pb-4 border-b border-stone-100 last:border-0">
                  <h4 className="font-bold text-sm uppercase tracking-wider text-stone-800 mb-1">{item.title}</h4>
                  <p className="text-stone-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 4: MANAGEMENT DESK */}
        <div className="bg-white border border-stone-200 p-8 md:p-12 mb-24">
          <h3 className="font-serif text-2xl tracking-wide uppercase border-b pb-4 border-stone-100 mb-8 text-center sm:text-left">
            Sourcing Command Center
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="space-y-2 border-b sm:border-b-0 pb-6 sm:pb-0 last:border-0 border-stone-100">
                <h4 className="font-serif text-lg tracking-wide font-semibold text-stone-800">{member.name}</h4>
                <p className="text-[10px] uppercase tracking-widest text-amber-500 font-bold">{member.role}</p>
                <a 
                  href={`mailto:${member.email}`} 
                  className="block text-xs text-stone-400 hover:text-stone-900 transition-colors pt-1"
                >
                  {member.email}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* NEW SECTION: AUTO-SLIDING CUSTOMER REVIEWS */}
        <div className="border-t border-b border-stone-200/60 py-16 mb-24 text-center">
          <p className="uppercase tracking-[0.3em] text-[10px] text-amber-500 font-bold mb-4">Global Partner Feedback</p>
          <div className="max-w-2xl mx-auto h-32 md:h-24 flex items-center justify-center relative overflow-hidden">
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`absolute w-full transition-all duration-700 ease-in-out transform ${
                  index === currentReview 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-8 pointer-events-none'
                }`}
              >
                <p className="font-serif text-base md:text-lg italic text-stone-800 mb-4">
                  "{review.quote}"
                </p>
                <p className="text-xs tracking-wider text-stone-500 uppercase">
                  <strong>{review.author}</strong> — {review.company}
                </p>
              </div>
            ))}
          </div>
          {/* Slide Indicator Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentReview ? 'w-6 bg-amber-500' : 'w-1.5 bg-stone-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* FOOTER CALL-TO-ACTION */}
        <div className="text-center">
          <p className="text-xs text-stone-400 uppercase tracking-widest mb-4">Want to launch a line with us?</p>
          <Link href="/rfq" className="inline-block px-12 py-4 border border-stone-900 text-stone-900 text-xs uppercase tracking-widest hover:bg-stone-900 hover:text-white transition-colors duration-300">
            Connect With A Merchandiser
          </Link>
        </div>

      </div>
    </div>
  );
}