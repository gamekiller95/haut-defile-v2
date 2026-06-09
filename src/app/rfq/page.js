'use client';

import React, { useState, useRef } from 'react';

export default function RequestForQuote() {
  const [formData, setFormData] = useState({
    corporateName: '',
    buyerName: '',
    email: '',
    category: 'knit',
    quantity: '',
    targetPrice: '',
    specifications: '',
  });

  const [attachments, setAttachments] = useState([]);
  const [fileError, setFileError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef(null);

  const MAX_SIZE_MB = 20;
  const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files || []);
    setFileError('');

    // Calculate total size of existing + new files
    const currentTotalSize = attachments.reduce((sum, f) => sum + f.size, 0);
    const newFilesSize = selectedFiles.reduce((sum, f) => sum + f.size, 0);

    if (currentTotalSize + newFilesSize > MAX_SIZE_BYTES) {
      setFileError(`Total attachment size exceeds the ${MAX_SIZE_MB}MB limit.`);
      return;
    }

    setAttachments((prev) => [...prev, ...selectedFiles]);
  };

  const removeFile = (indexToRemove) => {
    setAttachments((prev) => prev.filter((_, index) => index !== indexToRemove));
    setFileError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (fileError) return;

    setIsSubmitting(true);

    // Use standard FormData to handle file uploads
    const dataToSend = new FormData();
    dataToSend.append('corporateName', formData.corporateName);
    dataToSend.append('buyerName', formData.buyerName);
    dataToSend.append('email', formData.email);
    dataToSend.append('category', formData.category);
    dataToSend.append('quantity', formData.quantity);
    dataToSend.append('targetPrice', formData.targetPrice);
    dataToSend.append('specifications', formData.specifications);

    // Append all selected files
    attachments.forEach((file) => {
      dataToSend.append('files', file);
    });

    try {
      // POSTing to your local Next.js API route (created below)
      const response = await fetch('/api/send-rfq', {
        method: 'POST',
        body: dataToSend, 
      });

      if (response.ok) {
        setSubmitted(true);
        // Reset form state
        setFormData({
          corporateName: '',
          buyerName: '',
          email: '',
          category: 'knit',
          quantity: '',
          targetPrice: '',
          specifications: '',
        });
        setAttachments([]);
      } else {
        const errData = await response.json();
        setFileError(errData.error || 'Failed to dispatch RFQ. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setFileError('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#f7f7f5] min-h-screen pb-20 text-stone-900 w-full">
      
      <div className="w-full bg-stone-900 text-white pt-32 pb-16 px-6 mb-12">
        <div className="max-w-2xl mx-auto text-center">
          <p className="uppercase tracking-[0.4em] text-xs text-amber-400 font-semibold mb-2">B2B Procurement</p>
          <h1 className="font-serif text-4xl tracking-tight mb-3 text-white">Request A Production Quote</h1>
          <p className="text-stone-300 text-sm max-w-md mx-auto leading-relaxed opacity-90">
            Submit your apparel target tech-pack or sizing details. Our merchandising desk will revert with initial costing metrics within 48 hours.
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6">

        {submitted ? (
          <div className="bg-white border border-stone-200 p-12 text-center shadow-sm">
            <h3 className="font-serif text-2xl text-stone-800 mb-2">RFQ Transmitted Successfully</h3>
            <p className="text-xs text-stone-500 max-w-sm mx-auto mb-6">
              Your sourcing matrix allocation ID has been processed. A dedicated commercial merchandiser will contact you shortly via email.
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="text-[11px] uppercase tracking-widest border border-stone-300 px-6 py-2.5 hover:bg-stone-900 hover:text-white transition-all cursor-pointer bg-transparent"
            >
              Submit Another Specification
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white border border-stone-200/80 p-8 space-y-6 shadow-sm">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-2">Company Name *</label>
                <input 
                  type="text" required name="corporateName" value={formData.corporateName} onChange={handleChange}
                  className="w-full bg-stone-50 border border-stone-200 px-4 py-2 text-sm outline-none focus:border-amber-400 transition" 
                  placeholder="e.g. London Apparel Group"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-2">Contact Representative *</label>
                <input 
                  type="text" required name="buyerName" value={formData.buyerName} onChange={handleChange}
                  className="w-full bg-stone-50 border border-stone-200 px-4 py-2 text-sm outline-none focus:border-amber-400 transition" 
                  placeholder="e.g. John Doe"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-2">Corporate Email Address *</label>
              <input 
                type="email" required name="email" value={formData.email} onChange={handleChange}
                className="w-full bg-stone-50 border border-stone-200 px-4 py-2 text-sm outline-none focus:border-amber-400 transition" 
                placeholder="buyer@brand.com"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-2">Apparel Form Category</label>
                <select 
                  name="category" value={formData.category} onChange={handleChange}
                  className="w-full bg-stone-50 border border-stone-200 px-3 py-2 text-sm outline-none focus:border-amber-400 transition"
                >
                  <option value="knit">Knitwear</option>
                  <option value="woven">Woven Garments</option>
                  <option value="denim">Denim & Wash</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-2">Total Quantity (Pcs) *</label>
                <input 
                  type="number" required name="quantity" value={formData.quantity} onChange={handleChange}
                  className="w-full bg-stone-50 border border-stone-200 px-4 py-2 text-sm outline-none focus:border-amber-400 transition" 
                  placeholder="e.g. 5000"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-2">Target FOB Price (USD) *</label>
                <input 
                  type="text" required name="targetPrice" value={formData.targetPrice} onChange={handleChange}
                  className="w-full bg-stone-50 border border-stone-200 px-4 py-2 text-sm outline-none focus:border-amber-400 transition" 
                  placeholder="e.g. $3.50 / pc"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-2">Fabric, GSM & Finish Requirements</label>
              <textarea 
                rows="3" name="specifications" value={formData.specifications} onChange={handleChange}
                className="w-full bg-stone-50 border border-stone-200 px-4 py-2 text-sm outline-none focus:border-amber-400 transition resize-none" 
                placeholder="Specify composition (e.g. 100% Combed Cotton, 180 GSM, Enzyme Wash finish details)..."
              />
            </div>

            {/* NEW: Attachment Panel Component */}
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-2">
                Tech-packs & Document Attachments (Max 20MB)
              </label>
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="border border-dashed border-stone-300 bg-stone-50 p-6 text-center cursor-pointer hover:border-amber-400 transition"
              >
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  multiple 
                  onChange={handleFileChange} 
                  className="hidden" 
                  accept=".pdf,.zip,.rar,.xlsx,.xls,.doc,.docx,.jpg,.jpeg,.png"
                />
                <p className="text-xs text-stone-600 font-medium">
                  Click to upload target design specifications or Techpacks
                </p>
                <p className="text-[10px] text-stone-400 mt-1">
                  PDF, ZIP, Excel, Word or Images up to 20MB
                </p>
              </div>

              {/* Error readout */}
              {fileError && (
                <p className="text-red-600 text-[11px] mt-2 font-semibold tracking-wide uppercase">
                  {fileError}
                </p>
              )}

              {/* Render Selected File List */}
              {attachments.length > 0 && (
                <div className="mt-3 space-y-2">
                  {attachments.map((file, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-stone-100 px-3 py-2 text-xs border border-stone-200">
                      <span className="truncate max-w-[80%] text-stone-700 font-mono">{file.name}</span>
                      <span className="text-[10px] text-stone-400 font-sans ml-2">
                        {(file.size / (1024 * 1024)).toFixed(2)} MB
                      </span>
                      <button 
                        type="button" 
                        onClick={(e) => { e.stopPropagation(); removeFile(idx); }}
                        className="text-stone-400 hover:text-red-600 font-bold px-1 transition"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-stone-900 text-white text-xs uppercase tracking-widest py-4 font-bold hover:bg-amber-400 hover:text-black transition-colors duration-500 cursor-pointer border-none disabled:bg-stone-400 disabled:text-stone-200 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Processing Dispatch...' : 'Dispatch RFQ to Sourcing Panel'}
            </button>

          </form>
        )}

      </div>
    </div>
  );
}