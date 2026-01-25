'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Trash2, Minus, Plus, ShoppingBag } from 'lucide-react';

export default function CartPage() {
  const [cart, setCart] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  // 1. Handle Initial Mounting and Load Data
  useEffect(() => {
    setIsMounted(true);
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  // 2. Persist cart changes to localStorage
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart, isMounted]);

  const updateQty = (id, delta) => {
    setCart(prev =>
      prev
        .map(item =>
          item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity + delta) }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const removeItem = id => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // 3. Prevent Hydration Mismatch
  // This ensures the server and client render the exact same thing (nothing) 
  // until the client-side JS takes over.
  if (!isMounted) {
    return <div className="min-h-screen bg-white" />; 
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <header className="mb-12 flex items-center gap-4">
        <ShoppingBag className="text-amber-400" size={28} />
        <h1 className="text-3xl font-serif tracking-tight text-stone-900">
          Your Cart
        </h1>
      </header>

      {cart.length === 0 ? (
        <div
          role="status"
          className="text-center py-20 border border-stone-200 bg-white"
        >
          <p className="text-stone-500 mb-6">
            Your cart is currently empty.
          </p>
          <Link
            href="/products"
            className="inline-block bg-stone-900 text-white px-8 py-3 text-xs uppercase tracking-widest hover:bg-amber-400 hover:text-black transition"
          >
            Browse Collection
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* CART ITEMS */}
          <ul className="lg:col-span-2 space-y-6" role="list">
            {cart.map(item => (
              <li
                key={item.id}
                className="flex gap-6 bg-white p-6 border border-stone-200"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-32 object-cover"
                />

                <div className="flex-1">
                  <h2 className="font-serif text-lg text-stone-900">
                    {item.name}
                  </h2>
                  <p className="text-xs text-stone-500 mt-1">
                    ৳ {item.price.toLocaleString()}
                  </p>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3 mt-4">
                    <button
                      aria-label="Decrease quantity"
                      onClick={() => updateQty(item.id, -1)}
                      className="border p-2 hover:bg-stone-900 hover:text-white transition"
                    >
                      <Minus size={14} />
                    </button>

                    <span
                      aria-live="polite"
                      className="min-w-[24px] text-center text-sm"
                    >
                      {item.quantity}
                    </span>

                    <button
                      aria-label="Increase quantity"
                      onClick={() => updateQty(item.id, 1)}
                      className="border p-2 hover:bg-stone-900 hover:text-white transition"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                {/* Remove */}
                <button
                  aria-label={`Remove ${item.name}`}
                  onClick={() => removeItem(item.id)}
                  className="text-stone-400 hover:text-red-600 transition"
                >
                  <Trash2 size={18} />
                </button>
              </li>
            ))}
          </ul>

          {/* SUMMARY */}
          <aside
            aria-labelledby="order-summary"
            className="bg-white border border-stone-200 p-6 h-fit"
          >
            <h3
              id="order-summary"
              className="font-serif text-xl mb-6"
            >
              Order Summary
            </h3>

            <div className="flex justify-between text-sm mb-4">
              <span>Subtotal</span>
              <span>৳ {subtotal.toLocaleString()}</span>
            </div>

            <div className="flex justify-between text-sm mb-4">
              <span>Shipping</span>
              <span className="text-stone-500">Calculated at checkout</span>
            </div>

            <div className="border-t pt-4 flex justify-between font-medium">
              <span>Total</span>
              <span>৳ {subtotal.toLocaleString()}</span>
            </div>

            <button
              className="mt-8 w-full bg-stone-900 text-white py-4 text-xs uppercase tracking-widest hover:bg-amber-400 hover:text-black transition"
            >
              Proceed to Checkout
            </button>
          </aside>
        </div>
      )}
    </section>
  );
}