'use client';

import { Mail, Phone, MessageSquare, Clock, ShieldCheck } from 'lucide-react';

export default function SupportPage() {
  const contactMethods = [
    {
      icon: <Phone size={24} />,
      title: "Direct Line",
      detail: "+880 1234 56789",
      sub: "Sun - Thu, 9am - 6pm",
      action: "Call Now",
      link: "tel:+880123456789"
    },
    {
      icon: <Mail size={24} />,
      title: "Email Concierge",
      detail: "care@hautdefile.com",
      sub: "Response within 24 hours",
      action: "Send Email",
      link: "mailto:care@hautdefile.com"
    },
    {
      icon: <MessageSquare size={24} />,
      title: "WhatsApp",
      detail: "Instant Chat",
      sub: "Quick bulk inquiries",
      action: "Chat Now",
      link: "https://wa.me/880123456789"
    }
  ];

  return (
    <div className="bg-[#f7f7f5] min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.4em] text-amber-500 font-bold">Client Relations</span>
          <h1 className="font-serif text-5xl mt-4 text-stone-900">How can we assist?</h1>
          <p className="text-stone-500 mt-4 font-light italic">Dedicated support for global retailers and private clients.</p>
        </div>

        {/* CONTACT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, idx) => (
            <div key={idx} className="bg-white border border-stone-200 p-8 text-center flex flex-col items-center group hover:border-amber-400 transition-all duration-500">
              <div className="text-stone-400 group-hover:text-amber-500 transition-colors mb-4">
                {method.icon}
              </div>
              <h3 className="uppercase tracking-widest text-xs font-bold mb-2">{method.title}</h3>
              <p className="text-stone-900 font-medium mb-1">{method.detail}</p>
              <p className="text-[10px] text-stone-400 uppercase tracking-tighter mb-6">{method.sub}</p>
              <a href={method.link} className="mt-auto text-[10px] uppercase tracking-[0.2em] font-bold border-b border-stone-900 pb-1 hover:text-amber-500 hover:border-amber-500 transition-all">
                {method.action}
              </a>
            </div>
          ))}
        </div>

        {/* TRUST SECTION */}
        <div className="border-t border-stone-200 pt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex gap-4">
            <ShieldCheck className="text-amber-500 shrink-0" size={32} />
            <div>
              <h4 className="font-serif text-lg mb-2">Quality Guarantee</h4>
              <p className="text-xs text-stone-500 leading-relaxed">Every export-grade garment undergoes a 5-point quality check before leaving our Dhaka atelier.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Clock className="text-amber-500 shrink-0" size={32} />
            <div>
              <h4 className="font-serif text-lg mb-2">Global Shipping</h4>
              <p className="text-xs text-stone-500 leading-relaxed">Real-time tracking for all international wholesale and retail shipments via DHL/FedEx.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}