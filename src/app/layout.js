'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, User, ShoppingBag, MapPin, Phone, Mail, Facebook, Headset } from 'lucide-react';
import './globals.css';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // MOCK USER STATE - Replace with real Auth logic later
  const [user, setUser] = useState({
  });

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
        
        {/* COMPACT DYNAMIC NAVBAR */}
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
    alt="Haut Défilé Logo"
    className="w-14 h-14 object-contain"
  />
  <span>HAUT DÉFILÉ</span>
</Link>

          <div className="hidden md:flex space-x-18 text-[12px] uppercase tracking-[0.2em] font-medium text-white/90">
            <Link href="/" className="hover:text-amber-400 transition">Home</Link>
            <Link href="/products" className="hover:text-amber-400 transition">Products</Link>
            <Link href="/about" className="hover:text-amber-400 transition">About</Link>
            <Link href="/bulk-inquiry" className="hover:text-amber-400 transition">Bulk</Link>
          </div>

{/* Updated Navbar Actions */}
<div className="flex items-center space-x-3 text-white/100">
  <Link href="/profile" className="hover:text-amber-400 transition-colors">
    <User size={24} aria-label="Profile" />
  </Link>
  
  <Link href="/cart" className="relative hover:text-amber-400 transition-colors">
    <ShoppingBag size={24} aria-label="Cart" />
    {/* Optional: Add a small badge if you have cart items */}
    <span className="absolute -top-1 -right-1 bg-amber-400 text-black text-[9px] font-bold px-1 rounded-full">0</span>
  </Link>

  <button className="md:hidden" onClick={toggleMenu}>
    <Menu size={24} />
  </button>
</div>
        </nav>

        {/* CONTENT */}
        <main className="flex-grow">{children}</main>

        {/* THIN COMPACT FOOTER */}
        <footer className="bg-stone-900 text-white pt-8 pb-4 px-6 border-t border-stone-800">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-2">
            
            {/* Office - Minimalist */}
            <div className="space-y-2">
              <h4 className="text-[14px] uppercase tracking-[0.3em] text-amber-400 font-bold">Office</h4>
              <div className="text-[11px] text-stone-400 leading-relaxed">
                <a href="https://maps.google.com" target="_blank" className="flex items-center gap-2 hover:text-white transition">
                  <MapPin size={12} className="text-amber-400" /> Uttara, Dhaka, BD
                </a>
                <a href="tel:+880123456789" className="flex items-center gap-2 hover:text-white mt-1">
                  <Phone size={12} className="text-amber-400" /> +880 1234 56789
                </a>
              </div>
            </div>

            {/* Socials - Tight Row */}
            <div className="md:text-center space-y-2">
              <h4 className="text-[14px] uppercase tracking-[0.3em] text-amber-400 font-bold">Follow</h4>
              <div className="flex md:justify-center space-x-4">
				<a href="#" className="text-stone-400 hover:text-[#1877F2] transition-all"><Facebook size={20} /></a>
                <a href="#" className="text-stone-400 hover:text-[#d62976] transition-all"><FaInstagram size={20} /></a>
                <a href="#" className="text-stone-400 hover:text-[#000000] transition-all"><FaXTwitter size={20} /></a>
                <a href="#" className="text-stone-400 hover:text-[#128C7E] transition-all"><FaWhatsapp size={20} /></a>
              </div>
            </div>

            {/* Newsletter - Compact Input */}
            <div className="md:text-right space-y-2">
              <h4 className="text-[14px] uppercase tracking-[0.3em] text-amber-400 font-bold">Newsletter</h4>
              <div className="flex md:justify-end">
                <input type="email" placeholder="Email" className="bg-stone-800 text-[11px] px-3 py-1.5 w-32 outline-none border border-transparent focus:border-amber-400 transition-all" />
                <button className="bg-amber-400 text-black px-3 py-1.5 text-[9px] uppercase font-bold tracking-widest hover:bg-white">Join</button>
              </div>
            </div>
          </div>

          {/* Bottom Copyright - Thin Border & Small Font */}
          <div className="max-w-7xl mx-auto pt-4 border-t border-stone-800/50 text-center">
            <p className="text-[9px] tracking-[0.4em] text-stone-500 uppercase">
              © 2026 HAUT DÉFILÉ. ALL RIGHTS RESERVED.
            </p>
          </div>
        </footer>

        {/* SIDE DRAWER MENU */}
        {isMenuOpen && (
          <>
            <div className="fixed inset-0 z-[190] bg-black/60 backdrop-blur-sm" onClick={toggleMenu} />
            
            <div className="fixed top-0 right-0 h-full w-[80%] md:w-[400px] z-[200] bg-stone-900 shadow-2xl flex flex-col p-10 transition-transform duration-500">
              
              <button onClick={toggleMenu} className="self-end text-white hover:text-amber-400 mb-8">
                <X size={28} />
              </button>

{/* LOGICAL PROFILE SECTION */}
<div className="flex items-center gap-5 mb-10 pb-10 border-b border-stone-800">
  <div className="relative">
    {/* Avatar Logic */}
    <img 
      src={user?.image || `https://ui-avatars.com/api/?name=${user?.name || 'Guest'}&background=fbbf24&color=000&bold=true`} 
      alt="Profile Avatar" 
      className="w-16 h-16 rounded-full object-cover border-2 border-amber-400 p-0.5"
    />
    {/* Online Status Dot (Optional) */}
    {user && (
      <span className="absolute bottom-1 right-1 w-3 h-3 bg-green-500 border-2 border-stone-900 rounded-full"></span>
    )}
  </div>

  <div className="flex flex-col">
    {user ? (
      <>
        <h3 className="text-white font-serif text-xl leading-tight">
          {user.name}
        </h3>
        <Link 
          href="/profile" 
          onClick={toggleMenu}
          className="text-amber-400 text-[10px] uppercase tracking-[0.2em] mt-1 hover:text-amber-400 transition"
        >
          View Account
        </Link>
      </>
    ) : (
      <>
        <h3 className="text-white font-serif text-xl leading-tight">
          Welcome
        </h3>
        <div className="flex gap-2 mt-1">
          <Link 
            href="/login" 
            onClick={toggleMenu}
            className="text-amber-400 text-[10px] uppercase tracking-[0.2em] hover:text-white transition"
          >
            Login
          </Link>
          <span className="text-stone-700 text-[10px]">/</span>
          <Link 
            href="/signup" 
            onClick={toggleMenu}
            className="text-amber-400 text-[10px] uppercase tracking-[0.2em] hover:text-white transition"
          >
            Sign Up
          </Link>
        </div>
      </>
    )}
  </div>
</div>
              {/* LINKS */}
              <nav className="flex flex-col space-y-8 text-white uppercase tracking-[0.3em] text-xs font-light">
                <Link href="/" onClick={toggleMenu} className="hover:text-amber-400 transition">Home</Link>
                <Link href="/products" onClick={toggleMenu} className="hover:text-amber-400 transition">Our Collection</Link>
                <Link href="/about" onClick={toggleMenu} className="hover:text-amber-400 transition">The Atelier</Link>
                <Link href="/bulk-order" onClick={toggleMenu} className="hover:text-amber-400 transition">Bulk Inquiry</Link>
              </nav>

              <div className="mt-auto pt-10 flex gap-6 text-stone-500">
                <FaInstagram size={20} className="hover:text-white cursor-pointer" />
                <FaWhatsapp size={20} className="hover:text-white cursor-pointer" />
                <FaXTwitter size={20} className="hover:text-white cursor-pointer" />
              </div>
            </div>
          </>
        )}
{/* FLOATING CUSTOMER SUPPORT */}
<Link 
  href="/support" 
  className="fixed bottom-8 right-8 z-[90] bg-stone-900 text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:bg-stone-900 hover:text-amber-400 transition-all duration-300 group flex items-center justify-center"
  title="Customer Support"
>
  {/* The Customer Care Logo */}
  <Headset size={24} className="group-hover:-rotate-12 transition-transform duration-300" />
  
  {/* Tooltip Label */}
  <span className="absolute right-16 bg-stone-900 text-white text-[10px] py-2 px-4 uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none border border-amber-400/20 translate-x-4 group-hover:translate-x-0">
    Customer Care
  </span>
</Link>
     </body>
    </html>
  );
}