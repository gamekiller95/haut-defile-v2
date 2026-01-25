import { useState, useEffect } from 'react';

export function useCart() {
  const [cart, setCart] = useState([]);

  const loadCart = () => {
    const stored = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(stored);
  };

  useEffect(() => {
    // Initial load
    loadCart();

    // Listen for changes from other components
    const handleStorageChange = () => loadCart();
    window.addEventListener('cart-updated', handleStorageChange);
    
    // Also listen for localStorage changes from other tabs
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('cart-updated', handleStorageChange);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return cart;
}

// Helper function to use whenever you "Add to Cart" or "Remove"
export const notifyCartUpdate = () => {
  window.dispatchEvent(new Event('cart-updated'));
};