'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, MapPin, Phone, MessageSquare, Mail, Facebook } from 'lucide-react';
import './globals.css';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen font-sans bg-[#f7f7f5]">
        
        {/* COMPACT B2B DYNAMIC NAVBAR */}
        <nav className={`fixed w-full z-[100] transition-all duration-500 px-6 py-3 flex justify-between items-center ${
          scrolled 
            ? 'bg-stone-900/90 backdrop-blur-md py-2 shadow-sm' 
            : 'bg-transparent'
        }`}>
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold tracking-tighter font-serif text-white"
          >
            <img
              src="/images/logo.png"
              alt="Buying House Logo"
              className="w-14 h-14 object-contain"
            />
          </Link>

          {/* B2B Sourcing Navigation Links */}
          <div className="hidden md:flex space-x-12 text-[12px] uppercase tracking-[0.2em] font-medium text-white/90">
            <Link href="/" className="hover:text-amber-400 transition">Home</Link>
            <Link href="/sourcing-catalog" className="hover:text-amber-400 transition">Sourcing</Link>
            <Link href="/compliance" className="hover:text-amber-400 transition">Associated Factories</Link>
            <Link href="/about" className="hover:text-amber-400 transition">About Us</Link>
            <Link href="/rfq" className="hover:text-amber-400 transition">Request Quote</Link>
          </div>

          {/* Actions / Mobile trigger */}
          <div className="flex items-center space-x-3 text-white">
            <Link 
              href="/rfq" 
              className="hidden sm:inline-block border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black text-[11px] uppercase tracking-widest px-4 py-2 transition-colors duration-300"
            >
              Submit RFQ
            </Link>

            <button className="md:hidden p-1 text-white hover:text-amber-400" onClick={toggleMenu}>
              <Menu size={24} />
            </button>
          </div>
        </nav>

        {/* CONTENT */}
        <main className="flex-grow">{children}</main>

        {/* THIN COMPACT FOOTER */}
        <footer className="bg-stone-900 text-white pt-8 pb-4 px-6 border-t border-stone-800">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-2">
            
            {/* Corporate Office */}
            <div className="space-y-2">
              <h4 className="text-[14px] uppercase tracking-[0.3em] text-amber-400 font-bold">HQ Office</h4>
              <div className="text-[11px] text-stone-400 leading-relaxed">
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition">
                  <MapPin size={12} className="text-amber-400" /> BD Office: Nizam Tower, Level 4, Avenue 9, Diabari, Dhaka, Bangladesh
                </a>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition">
                  <MapPin size={12} className="text-amber-400" /> Sri-Lanka Office: 187/D, Weda Mawatha, Piliyandala, Srilanka
                </a>
                <a href="tel:+880123456789" className="flex items-center gap-2 hover:text-white mt-1">
                  <Phone size={12} className="text-amber-400" /> +880 9614-666 555
                </a>
              </div>
            </div>

            {/* Socials / Professional Networks */}
            <div className="md:text-center space-y-2">
              <h4 className="text-[14px] uppercase tracking-[0.3em] text-amber-400 font-bold">Connect</h4>
              <div className="flex md:justify-center space-x-4">
                <a href="https://www.facebook.com/m.hasanalmamun" className="text-stone-400 hover:text-[#1877F2] transition-all"><Facebook size={20} /></a>
                <a href="https://www.instagram.com/mhasan.almamun" className="text-stone-400 hover:text-[#d62976] transition-all"><FaInstagram size={20} /></a>
                <a href="https://x.com/MHasanAlMamun3" className="text-stone-400 hover:text-[#000000] transition-all"><FaXTwitter size={20} /></a>
                <a href="https://wa.me/8801329748072" className="text-stone-400 hover:text-[#128C7E] transition-all"><FaWhatsapp size={20} /></a>
              </div>
            </div>

            {/* Sourcing Updates Subscription */}
            <div className="md:text-right space-y-2">
              <h4 className="text-[14px] uppercase tracking-[0.3em] text-amber-400 font-bold">Market Intelligence</h4>
              <p className="text-[10px] text-stone-400">Get monthly apparel trade reports.</p>
              <div className="flex md:justify-end">
                <input type="info@anspl.lk" placeholder="Corporate Email" className="bg-stone-800 text-[11px] px-3 py-1.5 w-40 outline-none border border-transparent focus:border-amber-400 transition-all text-white" />
                <button className="bg-amber-400 text-black px-3 py-1.5 text-[9px] uppercase font-bold tracking-widest hover:bg-white">Subscribe</button>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="max-w-7xl mx-auto pt-4 border-t border-stone-800/50 text-center">
            <p className="text-[9px] tracking-[0.4em] text-stone-500 uppercase">
              © {new Date().getFullYear()} APPAREL NETWORK SOLUTION (PVT) LIMITED. ALL RIGHTS RESERVED.
            </p>
          </div>
        </footer>

        {/* MOBILE SIDE DRAWER MENU */}
        {isMenuOpen && (
          <>
            <div className="fixed inset-0 z-[190] bg-black/60 backdrop-blur-sm" onClick={toggleMenu} />
            
            <div className="fixed top-0 right-0 h-full w-[80%] md:w-[400px] z-[200] bg-stone-900 shadow-2xl flex flex-col p-10 transition-transform duration-500">
              
              <button onClick={toggleMenu} className="self-end text-white hover:text-amber-400 mb-8">
                <X size={28} />
              </button>

              <div className="mb-10 pb-6 border-b border-stone-800">
                <h3 className="text-white font-serif text-xl tracking-wide">ANS (Pvt) Limited </h3>
                <p className="text-stone-400 text-[10px] uppercase tracking-[0.15em] mt-1">Ready Supply Solutions</p>
              </div>

              {/* CLEAN B2B LINKS */}
              <nav className="flex flex-col space-y-8 text-white uppercase tracking-[0.3em] text-xs font-light">
                <Link href="/" onClick={toggleMenu} className="hover:text-amber-400 transition">Home</Link>
                <Link href="/sourcing-catalog" onClick={toggleMenu} className="hover:text-amber-400 transition">Sourcing Catalog</Link>
                <Link href="/compliance" onClick={toggleMenu} className="hover:text-amber-400 transition">Associated Factories</Link>
                <Link href="/about" onClick={toggleMenu} className="hover:text-amber-400 transition">About Our Network</Link>
                <Link href="/rfq" onClick={toggleMenu} className="hover:text-amber-400 transition">Request Quote (RFQ)</Link>
              </nav>

              <div className="mt-auto pt-10 flex gap-6 text-stone-500">
                <FaInstagram size={20} className="hover:text-white cursor-pointer" />
                <FaWhatsapp size={20} className="hover:text-white cursor-pointer" />
                <FaXTwitter size={20} className="hover:text-white cursor-pointer" />
              </div>
            </div>
          </>
        )}

      </body>
    </html>
  );
}