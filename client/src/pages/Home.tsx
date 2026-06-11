import { Link } from "wouter";
import { ArrowRight, Calculator, FileText, TrendingUp, DollarSign, Shield, PiggyBank, Heart } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }
  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        </div>
        <p className="font-serif text-charcoal text-xl mb-2">Thank You</p>
        <p className="text-charcoal/60 text-sm">We will be in touch shortly to confirm your consultation.</p>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input required type="text" placeholder="Full Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full border border-gray-300 px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 bg-white focus:outline-none focus:border-[oklch(0.62_0.12_75)]" />
      <input required type="email" placeholder="Email Address" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full border border-gray-300 px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 bg-white focus:outline-none focus:border-[oklch(0.62_0.12_75)]" />
      <input type="tel" placeholder="Phone (optional)" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className="w-full border border-gray-300 px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 bg-white focus:outline-none focus:border-[oklch(0.62_0.12_75)]" />
      <textarea placeholder="How can we help you?" rows={3} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="w-full border border-gray-300 px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 bg-white focus:outline-none focus:border-[oklch(0.62_0.12_75)] resize-none" />
      <button type="submit" style={{backgroundColor: 'oklch(0.62 0.12 75)', color: '#ffffff'}} className="w-full py-3 text-sm font-sans font-semibold tracking-wider uppercase hover:opacity-90 transition-opacity">Request Free Consultation</button>
      <p className="text-center text-gray-500 text-xs">No obligation. Bilingual: English &amp; Spanish.</p>
    </form>
  );
}

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );
    const el = ref.current;
    if (el) {
      el.querySelectorAll(".reveal").forEach((child) => observer.observe(child));
    }
    return () => observer.disconnect();
  }, []);
  return ref;
}

const services = [
  { icon: Calculator, name: "Bookkeeping", desc: "Accurate, organized financial records that keep your business running smoothly.", href: "/services/bookkeeping" },
  { icon: FileText, name: "Tax Preparation", desc: "Expert tax filing for individuals and businesses. Maximize deductions, minimize stress.", href: "/services/tax-preparation" },
  { icon: TrendingUp, name: "Tax Planning", desc: "Proactive strategies to reduce your tax burden year-round, not just at filing time.", href: "/services/tax-planning" },
  { icon: DollarSign, name: "Payroll Services", desc: "Reliable payroll processing that keeps your team paid and your business compliant.", href: "/services/payroll" },
  { icon: Shield, name: "Financial Planning", desc: "Clear financial roadmaps to help you build, protect, and grow your wealth.", href: "/services/financial-planning" },
  { icon: PiggyBank, name: "Retirement Planning", desc: "Secure your future with strategic retirement and wealth accumulation planning.", href: "/services/retirement-wealth-planning" },
  { icon: Heart, name: "Life Insurance", desc: "Protect what matters most with the right coverage for your family and business.", href: "/services/life-insurance" },
];

export default function Home() {
  const containerRef = useScrollReveal();

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center section-dark overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663303940668/cNUSTNFzMCFwRDHvZHurhf/hero-accounting-N6mJQeSrVFKwzhZDgvtyn4.webp"
            alt="Professional accounting office"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.12_0.01_260)] via-[oklch(0.12_0.01_260)/90%] to-transparent" />
        </div>

        <div className="container relative z-10 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: tagline */}
            <div>
              <p className="text-[oklch(0.62_0.12_75)] text-sm uppercase tracking-[0.2em] mb-6 font-sans font-medium">
                Doral, FL — Certified Public Accountant
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6">
                Financial Clarity,<br />Done Right.
              </h1>
              <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-lg font-light">
                Expert accounting, tax, and financial advisory services for individuals and businesses across South Florida. Bilingual support in English and Spanish.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services" className="btn-outline-gold rounded-sm text-center">
                  Our Services
                </Link>
              </div>
            </div>
            {/* Right: consultation form */}
            <div className="bg-white shadow-2xl border border-gray-200">
              <div className="bg-[oklch(0.15_0.01_260)] px-6 py-4">
                <p className="text-[oklch(0.62_0.12_75)] font-sans text-xs tracking-[0.2em] uppercase mb-1">Free Consultation</p>
                <p className="text-white font-serif text-xl">Book a Meeting</p>
              </div>
              <div className="p-6">
                <ConsultationForm />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-white/30 text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="section-cream py-12 border-b border-[oklch(0.88_0.01_80)]">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-center">
            <div className="reveal opacity-0 translate-y-4 transition-all duration-600">
              <p className="text-3xl font-serif text-[oklch(0.62_0.12_75)]">5.0</p>
              <p className="text-xs text-[oklch(0.40_0.01_260)] uppercase tracking-wider mt-1">Google Rating</p>
            </div>
            <div className="w-px h-10 bg-[oklch(0.88_0.01_80)] hidden md:block" />
            <div className="reveal opacity-0 translate-y-4 transition-all duration-600 delay-100">
              <p className="text-3xl font-serif text-[oklch(0.62_0.12_75)]">15+</p>
              <p className="text-xs text-[oklch(0.40_0.01_260)] uppercase tracking-wider mt-1">Years Experience</p>
            </div>
            <div className="w-px h-10 bg-[oklch(0.88_0.01_80)] hidden md:block" />
            <div className="reveal opacity-0 translate-y-4 transition-all duration-600 delay-200">
              <p className="text-3xl font-serif text-[oklch(0.62_0.12_75)]">Bilingual</p>
              <p className="text-xs text-[oklch(0.40_0.01_260)] uppercase tracking-wider mt-1">English & Spanish</p>
            </div>
            <div className="w-px h-10 bg-[oklch(0.88_0.01_80)] hidden md:block" />
            <div className="reveal opacity-0 translate-y-4 transition-all duration-600 delay-300">
              <p className="text-3xl font-serif text-[oklch(0.62_0.12_75)]">CPA</p>
              <p className="text-xs text-[oklch(0.40_0.01_260)] uppercase tracking-wider mt-1">Certified</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-cream py-20 md:py-28">
        <div className="container">
          <div className="max-w-2xl mb-16 reveal opacity-0 translate-y-4 transition-all duration-600">
            <p className="text-[oklch(0.62_0.12_75)] text-sm uppercase tracking-[0.15em] mb-3 font-sans font-medium">What We Do</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-[oklch(0.15_0.01_260)] leading-tight">
              Comprehensive Financial Services
            </h2>
            <p className="text-[oklch(0.40_0.01_260)] mt-4 text-lg leading-relaxed">
              From daily bookkeeping to long-term financial strategy, we provide the expertise your business needs to thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <Link
                key={service.name}
                href={service.href}
                className={`reveal opacity-0 translate-y-4 transition-all duration-600 group p-8 border border-[oklch(0.88_0.01_80)] hover:border-[oklch(0.62_0.12_75)] bg-white hover:bg-white transition-all duration-300`}
                style={{ transitionDelay: `${i * 75}ms` }}
              >
                <service.icon className="w-6 h-6 text-[oklch(0.62_0.12_75)] mb-4" />
                <h3 className="text-xl text-[oklch(0.15_0.01_260)] mb-2 font-serif">{service.name}</h3>
                <p className="text-sm text-[oklch(0.50_0.01_260)] leading-relaxed mb-4">{service.desc}</p>
                <span className="text-[oklch(0.62_0.12_75)] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12 reveal opacity-0 translate-y-4 transition-all duration-600">
            <Link href="/book" className="btn-gold rounded-sm inline-block">
              Schedule a Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-dark py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal opacity-0 translate-y-4 transition-all duration-600">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663303940668/cNUSTNFzMCFwRDHvZHurhf/about-susan-4oDS4cpqRAR3D4y9yBuG73.webp"
                alt="Susan Rodriguez, CPA - Founder of ASAP Accounting"
                className="w-full max-w-md mx-auto lg:mx-0 object-cover aspect-[3/4] rounded-sm"
              />
            </div>
            <div className="reveal opacity-0 translate-y-4 transition-all duration-600 delay-150">
              <p className="text-[oklch(0.62_0.12_75)] text-sm uppercase tracking-[0.15em] mb-3 font-sans font-medium">About Us</p>
              <h2 className="text-3xl md:text-4xl text-white leading-tight mb-6">
                Meet Susan Rodriguez, CPA
              </h2>
              <p className="text-white/60 leading-relaxed mb-4">
                With over 15 years of experience in accounting and financial services, Susan founded ASAP Accounting to provide fast, reliable, and personalized financial support to individuals and businesses throughout South Florida.
              </p>
              <p className="text-white/60 leading-relaxed mb-8">
                Fluent in both English and Spanish, Susan specializes in helping small businesses, entrepreneurs, and families navigate the complexities of tax compliance, financial planning, and business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about" className="btn-outline-gold rounded-sm text-center">
                  Read Our Story
                </Link>
                <Link href="/our-team" className="text-white/60 hover:text-white text-sm uppercase tracking-wider flex items-center gap-2 transition-colors py-3">
                  Meet the Team <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-cream py-20 md:py-28">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal opacity-0 translate-y-4 transition-all duration-600">
            <p className="text-[oklch(0.62_0.12_75)] text-sm uppercase tracking-[0.15em] mb-3 font-sans font-medium">Why ASAP Accounting</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-[oklch(0.15_0.01_260)] leading-tight">
              Built on Trust, Driven by Results
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 reveal opacity-0 translate-y-4 transition-all duration-600 delay-100">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full border border-[oklch(0.62_0.12_75)] flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-serif text-[oklch(0.62_0.12_75)]">1</span>
              </div>
              <h3 className="text-xl font-serif text-[oklch(0.15_0.01_260)] mb-3">Personalized Service</h3>
              <p className="text-sm text-[oklch(0.50_0.01_260)] leading-relaxed">
                Every client receives tailored attention. We take the time to understand your unique financial situation and goals.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full border border-[oklch(0.62_0.12_75)] flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-serif text-[oklch(0.62_0.12_75)]">2</span>
              </div>
              <h3 className="text-xl font-serif text-[oklch(0.15_0.01_260)] mb-3">Fast Turnaround</h3>
              <p className="text-sm text-[oklch(0.50_0.01_260)] leading-relaxed">
                ASAP is not just our name — it is our promise. We deliver accurate work on time, every time.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full border border-[oklch(0.62_0.12_75)] flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-serif text-[oklch(0.62_0.12_75)]">3</span>
              </div>
              <h3 className="text-xl font-serif text-[oklch(0.15_0.01_260)] mb-3">Bilingual Support</h3>
              <p className="text-sm text-[oklch(0.50_0.01_260)] leading-relaxed">
                Full service in English and Spanish. We make complex financial matters clear in your preferred language.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-dark py-20 md:py-28">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal opacity-0 translate-y-4 transition-all duration-600">
            <p className="text-[oklch(0.62_0.12_75)] text-sm uppercase tracking-[0.15em] mb-3 font-sans font-medium">Client Reviews</p>
            <h2 className="text-3xl md:text-4xl text-white leading-tight">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto reveal opacity-0 translate-y-4 transition-all duration-600 delay-100">
            <div className="border border-white/10 p-8 rounded-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[oklch(0.62_0.12_75)]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/70 text-sm leading-relaxed italic mb-6">
                "Susan did an outstanding job on my taxes. Professional, efficient, and highly knowledgeable. I'm impressed with their service. Highly recommend!"
              </p>
              <p className="text-white text-sm font-medium">Andre Eguigure</p>
              <p className="text-white/40 text-xs mt-1">Google Review</p>
            </div>

            <div className="border border-white/10 p-8 rounded-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[oklch(0.62_0.12_75)]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/70 text-sm leading-relaxed italic mb-6">
                "Highly recommend Susan she handled my taxes professionally, saving me time and is knowledgeable!"
              </p>
              <p className="text-white text-sm font-medium">The Feminine Development</p>
              <p className="text-white/40 text-xs mt-1">Google Review</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Assistant Mention */}
      <section className="section-cream py-16 border-b border-[oklch(0.88_0.01_80)]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto reveal opacity-0 translate-y-4 transition-all duration-600">
            <p className="text-[oklch(0.62_0.12_75)] text-sm uppercase tracking-[0.15em] mb-3 font-sans font-medium">Available 24/7</p>
            <h2 className="text-2xl md:text-3xl text-[oklch(0.15_0.01_260)] leading-tight mb-4">
              Have a Quick Question?
            </h2>
            <p className="text-[oklch(0.50_0.01_260)] leading-relaxed">
              Our AI assistant is available around the clock to answer common questions about our services, scheduling, and general accounting inquiries. For personalized advice, book a consultation with Susan directly.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-dark py-20 md:py-28">
        <div className="container text-center">
          <div className="max-w-2xl mx-auto reveal opacity-0 translate-y-4 transition-all duration-600">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
              Ready to Take Control of Your Finances?
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              Schedule a free consultation and discover how ASAP Accounting can help you save time, reduce taxes, and grow your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book" className="btn-gold rounded-sm text-center">
                Book a Free Consultation
              </Link>
              <a href="tel:+13058777107" className="btn-outline-gold rounded-sm text-center">
                Call (305) 877-7107
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Inline styles for scroll reveal animation */}
      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s cubic-bezier(0.23, 1, 0.32, 1), transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .reveal.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}
