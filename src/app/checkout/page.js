export default function CheckoutPage() {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
      {/* LEFT: Shipping & Payment (2 Columns) */}
      <div className="md:col-span-2 space-y-8">
        <section>
          <div className="flex justify-between items-center border-b pb-4 mb-4">
            <h2 className="font-serif text-2xl">1. Shipping Details</h2>
            <button className="text-xs underline">Change</button>
          </div>
          <p className="text-sm text-gray-600">M. Hasan Al Mamun • +880 1XXX XXXXXX</p>
          <p className="text-sm text-gray-600">House 12, Road 5, Dhanmondi, Dhaka</p>
        </section>

        <section>
          <h2 className="font-serif text-2xl border-b pb-4 mb-4">2. Payment Method</h2>
          <div className="grid grid-cols-2 gap-4">
            <label className="border p-4 rounded-lg cursor-pointer hover:border-black flex items-center gap-3">
              <input type="radio" name="pay" /> Cash on Delivery
            </label>
            <label className="border p-4 rounded-lg cursor-pointer hover:border-black flex items-center gap-3">
              <input type="radio" name="pay" /> Online Payment (bKash/Cards)
            </label>
          </div>
        </section>
      </div>

      {/* RIGHT: Summary & Vouchers (1 Column) */}
      <div className="bg-gray-50 p-8 rounded-2xl h-fit">
        <h3 className="font-serif text-xl mb-6">Order Summary</h3>
        <div className="space-y-3 pb-6 border-b text-sm">
          <div className="flex justify-between"><span>Subtotal</span><span>$145.00</span></div>
          <div className="flex justify-between"><span>Delivery</span><span>$5.00</span></div>
        </div>
        
        {/* Voucher Section */}
        <div className="py-6 border-b">
          <input type="text" placeholder="Voucher Code" className="w-full p-3 bg-white border rounded-lg text-sm mb-2" />
          <button className="w-full text-xs font-bold uppercase underline text-left">Apply Code</button>
        </div>

        <div className="flex justify-between font-bold text-lg pt-6 mb-8">
          <span>Total</span><span>$150.00</span>
        </div>

        <button className="w-full bg-black text-white py-4 rounded-full uppercase tracking-widest text-xs font-bold shadow-xl hover:scale-[1.02] transition-transform">
          Place Order & Pay
        </button>
      </div>
    </div>
  );
}