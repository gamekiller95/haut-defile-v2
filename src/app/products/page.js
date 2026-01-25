'use client';

import React, { useState, useEffect } from 'react';
import { X, ShoppingBag, ChevronLeft, ChevronRight, Trash2, Plus, Minus, Search, Ruler, Info, Box } from 'lucide-react';

// --- Individual Card Component ---
const ProductCard = ({ product, onClick }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % product.images.length);
    }, 3000); 
    return () => clearInterval(timer);
  }, [product.images.length, isHovered]);

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(product)}
      className="group relative bg-white rounded-xl overflow-hidden transition-all duration-500 hover:shadow-xl border border-gray-100 cursor-pointer"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
        {product.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              idx === currentImg ? 'opacity-100' : 'opacity-0'
            }`}
            alt={product.name}
          />
        ))}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-black/5">
          <div 
            className="h-full bg-black transition-all duration-700" 
            style={{ width: `${((currentImg + 1) / product.images.length) * 100}%` }}
          />
        </div>
      </div>
      <div className="p-4 text-center">
        <h3 className="text-[9px] uppercase tracking-[0.2em] text-gray-400 mb-1 font-bold">{product.category}</h3>
        <h3 className="text-sm font-bold text-gray-900 truncate">{product.name}</h3>
        <p className="mt-1 text-sm font-black text-black">৳{(product.price * 110).toLocaleString()}</p>
      </div>
    </div>
  );
};

// --- Main Page Component ---
export default function ProductGallery() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const itemsPerPage = 20;

  useEffect(() => {
    const base = [
      { name: "Elite Cotton Blazer", category: "Blazers", price: 145, fabric: "100% Egyptian Cotton", weight: "280 GSM", stock: 12 },
      { name: "Oxford Premium Shirt", category: "Shirts", price: 45, fabric: "Oxford Weave Cotton", weight: "140 GSM", stock: 45 },
      { name: "Classic Chino Trousers", category: "Trousers", price: 55, fabric: "Twill Cotton Stretch", weight: "220 GSM", stock: 8 },
      { name: "Linen Summer Jacket", category: "Blazers", price: 120, fabric: "Pure Irish Linen", weight: "190 GSM", stock: 15 }
    ];
    const imgs = [
      "https://images.unsplash.com/photo-1594932224030-9409841f273e?q=80&w=500",
      "https://images.unsplash.com/photo-1598808503744-44e88e8941f2?q=80&w=500",
      "https://images.unsplash.com/photo-1592873548280-9759d57a9f73?q=80&w=500"
    ];
    
    const generated = Array.from({ length: 40 }, (_, i) => ({
      id: i + 1,
      ...base[i % base.length],
      name: `${base[i % base.length].name} #${i + 1}`,
      description: "Tailored to perfection in our Bangladesh atelier. This garment features reinforced stitching and a premium hand-feel finish suitable for both formal and semi-formal occasions.",
      images: [...imgs],
      sizes: ["S", "M", "L", "XL", "XXL"]
    }));
    setProducts(generated);
  }, []);

  const addToCart = (product) => {
    if(!selectedSize) { alert("Please select a size"); return; }
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id && item.size === selectedSize);
      if (existing) {
        return prev.map(item => (item.id === product.id && item.size === selectedSize) ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { ...product, qty: 1, size: selectedSize }];
    });
    setIsCartOpen(true);
  };

  const updateQty = (id, size, delta) => {
    setCart(prev => prev.map(item => (item.id === id && item.size === size) ? { ...item, qty: Math.max(1, item.qty + delta) } : item));
  };

  const removeFromCart = (id, size) => setCart(prev => prev.filter(item => !(item.id === id && item.size === size)));
  const cartTotal = cart.reduce((sum, item) => sum + (item.price * 110 * item.qty), 0);

  const filtered = products.filter(p => 
    (activeCategory === 'All' || p.category === activeCategory) &&
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const currentItems = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="min-h-screen bg-white">
      
      {/* HERO SECTION */}
      <div className="bg-stone-900 w-full pt-20 pb-16 px-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/60 mb-3">Atelier Export Quality</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white/90 mb-6 tracking-tight italic">Our Collection</h2>
          <div className="h-0.5 w-16 bg-white/50 mx-auto"></div>
        </div>
      </div>

      {/* MAIN GALLERY AREA */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-16">
          <div className="flex flex-wrap gap-2">
            {['All', 'Blazers', 'Shirts', 'Trousers'].map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-6 py-2 text-[10px] font-black uppercase tracking-widest transition-all rounded-full border ${activeCategory === cat ? 'bg-black text-white border-black' : 'text-gray-400 border-gray-200 hover:border-black'}`}>{cat}</button>
            ))}
          </div>
          <div className="relative w-full md:w-80 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input type="text" placeholder="Search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none text-sm"/>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentItems.map(p => <ProductCard key={p.id} product={p} onClick={(prod) => { setSelectedProduct(prod); setSelectedSize(null); }} />)}
        </div>
      </div>

{/* QUICK VIEW MODAL */}
{selectedProduct && (
  <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-10 bg-black/60 backdrop-blur-sm overflow-y-auto">
    {/* Background Overlay - Clicking this also closes the modal */}
    <div className="absolute inset-0" onClick={() => setSelectedProduct(null)} />

    <div className="bg-white w-full max-w-5xl rounded-[2rem] overflow-hidden flex flex-col md:flex-row relative animate-in fade-in zoom-in duration-300 z-10 shadow-2xl">
      
      {/* --- FIXED CLOSE BUTTON --- */}
      <button 
        onClick={(e) => {
          e.stopPropagation(); 
          setSelectedProduct(null);
        }} 
        className="absolute top-4 right-4 md:top-6 md:right-6 z-[200] bg-white/90 backdrop-blur-md p-3 rounded-full shadow-lg hover:bg-black hover:text-white transition-all duration-300 group"
        aria-label="Close modal"
      >
        <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
      </button>
      
      {/* Image Section */}
      <div className="w-full md:w-1/2 bg-gray-50 aspect-square md:aspect-auto">
         <img 
           src={selectedProduct.images[0]} 
           className="w-full h-full object-cover" 
           alt={selectedProduct.name} 
         />
      </div>

      {/* Info Section */}
      <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto max-h-[90vh]">
        <span className="text-[10px] font-bold tracking-[0.3em] text-gray-400 uppercase mb-2 block">
          {selectedProduct.category}
        </span>
        <h2 className="text-3xl font-serif font-bold mb-2">{selectedProduct.name}</h2>
        <p className="text-2xl font-black mb-6">৳{(selectedProduct.price * 110).toLocaleString()}</p>
        
        <p className="text-gray-500 text-sm mb-8 leading-relaxed">
          {selectedProduct.description}
        </p>

        {/* Technical Details Grid */}
        <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-2xl mb-8">
          <div className="flex items-center gap-3">
            <Info size={16} className="text-gray-400"/>
            <div>
              <p className="text-[9px] uppercase text-gray-400 font-bold">Fabric</p>
              <p className="text-xs font-bold">{selectedProduct.fabric}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Box size={16} className="text-gray-400"/>
            <div>
              <p className="text-[9px] uppercase text-gray-400 font-bold">Weight</p>
              <p className="text-xs font-bold">{selectedProduct.weight}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Box size={16} className="text-gray-400"/>
            <div>
              <p className="text-[9px] uppercase text-gray-400 font-bold">Stock</p>
              <p className={`text-xs font-bold ${selectedProduct.stock < 10 ? 'text-red-500' : 'text-green-600'}`}>
                {selectedProduct.stock} units left
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Ruler size={16} className="text-gray-400"/>
            <button className="text-[10px] font-bold underline uppercase tracking-widest hover:text-black">
              Size Guide
            </button>
          </div>
        </div>

        {/* Size Selection */}
        <div className="mb-8">
          <p className="text-[10px] font-bold uppercase tracking-widest mb-4">Select Size</p>
          <div className="flex gap-3">
            {selectedProduct.sizes.map(size => (
              <button 
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`w-12 h-12 rounded-xl border-2 font-bold text-xs transition-all ${
                  selectedSize === size 
                  ? 'border-black bg-black text-white' 
                  : 'border-gray-100 hover:border-gray-300'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <button 
          onClick={() => addToCart(selectedProduct)}
          className="w-full bg-black text-white py-5 rounded-2xl font-bold tracking-widest flex items-center justify-center gap-4 hover:shadow-2xl transition-all active:scale-95"
        >
          <ShoppingBag size={20}/> ADD TO BAG
        </button>
      </div>
    </div>
  </div>
)}
      {/* CART DRAWER */}
      <div className={`fixed inset-0 z-[100] ${isCartOpen ? 'visible' : 'invisible'}`}>
        <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${isCartOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsCartOpen(false)} />
        <div className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transition-transform duration-500 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}>
          <div className="p-6 border-b flex justify-between items-center">
            <h2 className="text-xl font-bold font-serif">Bag ({cart.length})</h2>
            <button onClick={() => setIsCartOpen(false)}><X /></button>
          </div>
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cart.map((item, idx) => (
              <div key={`${item.id}-${item.size}`} className="flex gap-4 items-center">
                <img src={item.images[0]} className="w-16 h-20 object-cover rounded shadow-sm" />
                <div className="flex-1">
                  <h4 className="font-bold text-sm truncate w-40">{item.name}</h4>
                  <p className="text-[10px] font-bold text-gray-400">SIZE: {item.size}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <button onClick={() => updateQty(item.id, item.size, -1)} className="p-1 border rounded"><Minus size={10}/></button>
                    <span className="text-xs font-bold">{item.qty}</span>
                    <button onClick={() => updateQty(item.id, item.size, 1)} className="p-1 border rounded"><Plus size={10}/></button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-sm">৳{(item.price * 110 * item.qty).toLocaleString()}</p>
                  <button onClick={() => removeFromCart(item.id, item.size)} className="text-gray-300 hover:text-red-500 mt-2"><Trash2 size={16}/></button>
                </div>
              </div>
            ))}
          </div>
          <div className="p-8 bg-gray-50 border-t">
            <div className="flex justify-between mb-6">
              <span className="text-gray-400 uppercase tracking-widest text-[10px] font-bold">Total</span>
              <span className="font-black text-xl text-black">৳{cartTotal.toLocaleString()}</span>
            </div>
            <button className="w-full bg-black text-white py-4 rounded-xl font-bold tracking-widest hover:bg-zinc-900 transition-all shadow-xl">CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
}