import { useState, useEffect } from "react";
import { X } from "lucide-react";

function useWindowWidth() {
  const [width, setWidth] = useState(() => typeof window !== "undefined" ? window.innerWidth : 1280);
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return width;
}

export default function ConsultationWidget() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [mobileOpen, setMobileOpen] = useState(true);
  const width = useWindowWidth();
  const isMobile = width < 1024;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const formContent = submitted ? (
    <div className="text-center py-6">
      <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-3">
        <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <p className="font-serif text-charcoal text-lg mb-1">Thank You</p>
      <p className="text-charcoal/60 text-sm">We will be in touch shortly to confirm your consultation.</p>
    </div>
  ) : (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        required type="text" placeholder="Full Name"
        value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
        className="w-full border border-border px-3 py-2 text-sm text-charcoal bg-white focus:outline-none focus:border-gold"
      />
      <input
        required type="email" placeholder="Email Address"
        value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
        className="w-full border border-border px-3 py-2 text-sm text-charcoal bg-white focus:outline-none focus:border-gold"
      />
      <input
        type="tel" placeholder="Phone (optional)"
        value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
        className="w-full border border-border px-3 py-2 text-sm text-charcoal bg-white focus:outline-none focus:border-gold"
      />
      <textarea
        placeholder="How can we help you?" rows={3}
        value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
        className="w-full border border-border px-3 py-2 text-sm text-charcoal bg-white focus:outline-none focus:border-gold resize-none"
      />
      <button type="submit" className="w-full bg-gold text-white py-2.5 text-sm font-sans tracking-wider uppercase hover:bg-gold/90 transition-colors">
        Request Consultation
      </button>
      <p className="text-center text-charcoal/40 text-xs">No obligation. Free consultation.</p>
    </form>
  );

  if (!isMobile) {
    // Desktop: fixed right panel
    return (
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 w-72 bg-cream border border-border shadow-xl">
        <div className="bg-charcoal px-4 py-3">
          <p className="text-gold font-sans text-xs tracking-[0.15em] uppercase">Free Consultation</p>
          <p className="text-white font-serif text-base mt-0.5">Book a Meeting</p>
        </div>
        <div className="p-4">{formContent}</div>
      </div>
    );
  }

  // Mobile: top sticky banner
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {mobileOpen ? (
        <div className="bg-cream border-b border-border shadow-md">
          <div className="flex items-center justify-between bg-charcoal px-4 py-2.5">
            <div>
              <p className="text-gold font-sans text-xs tracking-[0.15em] uppercase">Free Consultation</p>
              <p className="text-white font-serif text-sm">Book a Meeting</p>
            </div>
            <button onClick={() => setMobileOpen(false)} className="text-white/60 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="p-4">{formContent}</div>
        </div>
      ) : (
        <button
          onClick={() => setMobileOpen(true)}
          className="w-full bg-gold text-white py-2.5 text-sm font-sans tracking-wider uppercase shadow-md"
        >
          Book a Free Consultation
        </button>
      )}
    </div>
  );
}
