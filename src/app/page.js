'use client';

import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';

export default function HomePage() {
  const arrivals = [
    { id: 1, name: "Signature Linen Blazer", price: "120", img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000" },
    { id: 2, name: "Premium Cotton Oxford", price: "85", img: "https://images.unsplash.com/photo-1598033129183-c4f50c717658?q=80&w=1000" },
    { id: 3, name: "Tapered Chino Trouser", price: "95", img: "https://images.unsplash.com/photo-1624373266717-3939d9c190c2?q=80&w=1000" },
    { id: 4, name: "Silk Blend Scarf", price: "45", img: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=1000" },
  ];

  return (
    <div className="bg-[#f7f7f5] text-stone-900">

      {/* HERO SECTION */}
      <section className="relative h-screen overflow-hidden flex items-center justify-center">
        {/* 1. The Video Layer */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover grayscale-[35%]"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-fashion-model-walking-in-a-long-dress-2431-large.mp4" />
        </video>

        {/* 2. The Background Image Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-90 z-[1]"
          style={{ backgroundImage: `url('/images/background-pattern.jpg')` }}
        />

        {/* 3. The Full Gray Overlay Layer */}
        <div className="absolute inset-0 bg-gray-600/60 z-[2]" />

        {/* 4. The Content Layer */}
        <div className="relative z-[10] w-full text-center px-6 text-white flex flex-col items-center">
          
          {/* LOGO INSERT */}
          <div className="mb-0 opacity-100">
            <img
              src="/images/logo.png"
              alt="Haut Défilé Logo"
              className="w-40 h-40 object-contain"
            />
          </div>

          <h1 className="font-serif text-7xl md:text-9xl tracking-tight mb-8">
            Haut Défilé
          </h1>
          
          <p className="uppercase tracking-[0.45em] text-xs mb-12 text-amber-400">
            Export Quality • Dhaka Atelier
          </p>

<div className="flex flex-col sm:flex-row gap-4 justify-center">
  <Link href="/products" className="group px-12 py-4 text-xs uppercase tracking-widest border border-white hover:border-amber-400 hover:bg-amber-400 hover:text-black transition-all duration-500 text-center">
    Shop Collection
  </Link>
<Link 
    href="/bulk-inquiry" 
    className="group px-12 py-4 text-xs uppercase tracking-widest bg-white text-black hover:bg-amber-400 transition-all duration-500 text-center"
  >
    Bulk Inquiry
  </Link>
  </div>
        </div>
      </section>

      {/* BRAND VALUES */}
      <section className="py-20 bg-[#f7f7f5]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: 'Export Grade',
              desc: 'International luxury fabric standards.',
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            },
            {
              title: 'Bulk Ready',
              desc: 'Wholesale & private label capability.',
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            },
            {
              title: 'Direct Shipping',
              desc: 'From Bangladesh to global retailers.',
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
              <p className="text-stone-500 text-[13px] leading-relaxed max-w-[250px] mx-auto">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-14">
            <div>
              <span className="text-xs uppercase tracking-widest text-stone-400">
                Latest Drops
              </span>
              <h2 className="text-4xl font-serif mt-2">New Arrivals</h2>
            </div>

            <a
              href="/products"
              className="group flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 hover:text-amber-400 transition"
            >
              View All
              <BsArrowRight className="group-hover:translate-x-1 transition" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {arrivals.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden mb-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition" />
                </div>

                <h3 className="text-sm uppercase tracking-wider group-hover:text-amber-400 transition">
                  {item.name}
                </h3>
                <p className="text-stone-500 mt-1">${item.price}.00</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}