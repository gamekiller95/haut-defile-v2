'use client';

import React, { useState } from 'react';
import { ShoppingBag, Settings, MapPin, LogOut, Plus, Trash2, Save } from 'lucide-react';

export default function ProfilePage() {
  // 1. Expanded User State
  const [userData, setUserData] = useState({
    name: "Ahmed Zayan",
    email: "zayan.atelier@example.com",
    phone: "+880 ",
    dob: "1995-05-15",
    memberSince: "January 2026",
    orders: 3,
  });

	// This goes at the very top of your component function
const [isSettingsOpen, setIsSettingsOpen] = useState(false);

const [settings, setSettings] = useState({
  marketingEmails: true,
  orderUpdates: true,
  twoFactor: false,
  publicProfile: false,
});

  // 2. Address State (Multiple Options)
  const [addresses, setAddresses] = useState([
    { id: 1, type: 'Shipping', address: '123 Atelier Street, Sector 4, Uttara, Dhaka' },
    { id: 2, type: 'Billing', address: '45 Fashion Road, Gulshan 2, Dhaka' }
  ]);

  const removeAddress = (id) => setAddresses(addresses.filter(a => a.id !== id));

  return (
    <div className="min-h-screen bg-[#f7f7f5] pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        
        <header className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.5em] text-stone-400">Your Atelier Account</span>
            <h1 className="text-5xl font-serif text-stone-900 mt-2">Bonjour, {userData.name.split(' ')[0]}</h1>
          </div>
          <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-red-800 hover:text-red-600 transition font-bold">
            <LogOut size={14} /> Sign Out
          </button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT COLUMN: NAVIGATION */}
          <div className="space-y-6">
            <div className="bg-white p-8 border border-stone-200 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={`https://ui-avatars.com/api/?name=${userData.name}&background=fbbf24&color=000&bold=true`} 
                  alt="Profile" 
                  className="w-16 h-16 rounded-full border border-stone-100"
                />
                <div>
                  <p className="text-xs text-stone-400 uppercase tracking-tighter">Member Since</p>
                  <p className="text-sm font-medium">{userData.memberSince}</p>
                </div>
              </div>
              
              <nav className="flex flex-col gap-4">
                <button className="flex items-center justify-between p-3 hover:bg-stone-50 transition text-xs uppercase tracking-widest">
                  <span className="flex items-center gap-3"><ShoppingBag size={16} /> My Orders</span>
                  <span className="bg-stone-900 text-white px-2 py-0.5 rounded-full text-[10px]">{userData.orders}</span>
                </button>
<button 
  onClick={() => setIsSettingsOpen(true)} // Add this trigger
  className="flex items-center justify-between p-3 hover:bg-amber-400/10 transition text-xs uppercase tracking-widest text-amber-600 w-full"
>
  <span className="flex items-center gap-3"><Settings size={16} /> Account Settings</span>
</button>              </nav>
            </div>
          </div>

          {/* RIGHT COLUMN: EDITABLE FORMS */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* PERSONAL DETAILS SECTION */}
            <section className="bg-white border border-stone-200 shadow-sm p-8">
              <div className="flex justify-between items-center mb-8">
                <h3 className="font-serif text-xl">Personal Information</h3>
                <button className="text-[10px] uppercase tracking-[0.2em] font-bold text-amber-600 flex items-center gap-1 hover:text-stone-900 transition">
                  <Save size={14}/> Save Changes
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-stone-400">Full Name</label>
                  <input 
                    type="text" 
                    value={userData.name}
                    onChange={(e) => setUserData({...userData, name: e.target.value})}
                    className="w-full border-b border-stone-200 py-2 text-sm focus:border-amber-400 outline-none transition-colors bg-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-stone-400">Email Address</label>
                  <input 
                    type="email" 
                    value={userData.email}
                    onChange={(e) => setUserData({...userData, email: e.target.value})}
                    className="w-full border-b border-stone-200 py-2 text-sm focus:border-amber-400 outline-none transition-colors bg-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-stone-400">Phone Number</label>
                  <input 
                    type="text" 
                    value={userData.phone}
                    onChange={(e) => setUserData({...userData, phone: e.target.value})}
                    className="w-full border-b border-stone-200 py-2 text-sm focus:border-amber-400 outline-none transition-colors bg-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-stone-400">Date of Birth</label>
                  <input 
                    type="date" 
                    value={userData.dob}
                    onChange={(e) => setUserData({...userData, dob: e.target.value})}
                    className="w-full border-b border-stone-200 py-2 text-sm focus:border-amber-400 outline-none transition-colors bg-transparent"
                  />
                </div>
              </div>
            </section>

            {/* ADDRESS MANAGEMENT SECTION */}
            <section className="bg-white border border-stone-200 shadow-sm p-8">
              <div className="flex justify-between items-center mb-8">
                <h3 className="font-serif text-xl">Address Book</h3>
                <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest bg-stone-900 text-white px-4 py-2 hover:bg-amber-500 transition">
                  <Plus size={14} /> Add New
                </button>
              </div>

              <div className="space-y-4">
                {addresses.map((addr) => (
                  <div key={addr.id} className="group border border-stone-100 p-4 flex justify-between items-start hover:border-amber-200 transition">
                    <div className="flex gap-4">
                      <div className="mt-1 text-amber-500">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <span className="text-[9px] uppercase tracking-widest bg-stone-100 px-2 py-0.5 font-bold mb-2 inline-block">
                          {addr.type}
                        </span>
                        <p className="text-sm text-stone-600 leading-relaxed">{addr.address}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => removeAddress(addr.id)}
                      className="text-stone-300 hover:text-red-600 transition"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}