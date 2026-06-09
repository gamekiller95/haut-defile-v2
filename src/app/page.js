'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="bg-[#f7f7f5] text-stone-900">

      {/* HERO SECTION */}
      <section className="relative h-screen overflow-hidden flex items-center justify-center">
        {/* 2. The Background Image Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-90 z-[1]"
          style={{ backgroundImage: `url('/images/background-home.jpg')` }}
        />

        {/* 3. The Full Gray Overlay Layer */}
        <div className="absolute inset-0 bg-gray-600/60 z-[2]" />

        {/* 4. The Content Layer */}
        <div className="relative z-[10] w-full text-center px-6 text-white flex flex-col items-center">
          
          {/* LOGO INSERT */}
          <div className="mb-0 opacity-100">
            <img
              src="/images/logo.png"
              alt="ANS"
              className="w-40 h-40 object-contain"
            />
          </div>

          <h1 className="font-serif text-5xl md:text-5xl tracking-tight mb-7 uppercase">
            Apparel Network Solution (Pvt) Limited
          </h1>
          
          <p className="uppercase tracking-[0.45em] text-xs mb-12 text-amber-400">
            Premium Garments Buying House | Bangladesh • Sri-Lanka • Pakistan
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sourcing-catalog" className="group px-12 py-4 text-xs uppercase tracking-widest border border-white hover:border-amber-400 hover:bg-amber-400 hover:text-black transition-all duration-500 text-center">
              Explore Sourcing Catalog
            </Link>
            <Link 
              href="/rfq" 
              className="group px-12 py-4 text-xs uppercase tracking-widest bg-white text-black hover:bg-amber-400 transition-all duration-500 text-center"
            >
              Request A Quote (RFQ)
            </Link>
          </div>
        </div>
      </section>

      {/* BRAND VALUES / ADVANTAGES */}
      <section className="py-20 bg-[#f7f7f5]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: 'Factory Auditing & QA',
              desc: 'Rigorous AQL inspection protocols and compliance management across certified partner factories.',
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            },
            {
              title: 'Custom Product Development',
              desc: 'End-to-end design patterns, tech-packs development, and fast-turnaround sample coordination.',
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            },
            {
              title: 'Global Supply Chain Logics',
              desc: 'Seamless ocean/air freight booking management from Chittagong port directly to international retailers.',
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2.945M8 3.935A9 9 0 0116.5 3.055M3.055 11a9 9 0 0113.445-7.945" />
            },
          ].map((item, i) => (
            <div key={i} className="group text-center cursor-default">
              <div className="mb-5 flex justify-center">
                <div className="p-3 border border-stone-200 rounded-full group-hover:border-amber-400 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                </div>
              </div>
              <h3 className="font-serif text-xl mb-2 group-hover:text-amber-400 transition-colors duration-300 uppercase tracking-wider">
                {item.title}
              </h3>
              <p className="text-stone-500 text-[13px] leading-relaxed max-w-[280px] mx-auto">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}