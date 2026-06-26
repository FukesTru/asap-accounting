import { Link } from "wouter";
import { useEffect, useRef } from "react";
import { ArrowRight, Calculator, FileText, TrendingUp, DollarSign, Shield, PiggyBank, Heart } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  { icon: Calculator, name: "Bookkeeping", desc: "Accurate, organized financial records that keep your business running smoothly.", href: "/services/bookkeeping" },
  { icon: FileText, name: "Tax Preparation", desc: "Expert tax filing for individuals and businesses. Maximize deductions, minimize stress.", href: "/services/tax-preparation" },
  { icon: TrendingUp, name: "Tax Planning", desc: "Proactive strategies to reduce your tax burden year-round, not just at filing time.", href: "/services/tax-planning" },
  { icon: DollarSign, name: "Payroll Services", desc: "Reliable payroll processing that keeps your team paid and your business compliant.", href: "/services/payroll" },
  { icon: Shield, name: "Financial Planning", desc: "Clear financial roadmaps to help you build, protect, and grow your wealth.", href: "/services/financial-planning" },
  { icon: PiggyBank, name: "Retirement Planning", desc: "Secure your future with strategic retirement and wealth accumulation planning.", href: "/services/retirement-wealth-planning" },
  { icon: Heart, name: "Life Insurance", desc: "Protect what matters most with the right coverage for your family and business.", href: "/services/life-insurance" },
];

const StarIcon = () => (
  <svg className="w-4 h-4 text-[oklch(0.62_0.12_75)]" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default function Home() {
  const containerRef = useScrollReveal();
  const heroRef = useRef<HTMLDivElement>(null);

  // Trigger hero entrance animations after mount
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    // Small delay to ensure paint is complete before animating
    const t = setTimeout(() => {
      el.querySelectorAll(".hero-enter").forEach((child) => {
        (child as HTMLElement).style.animationPlayState = "running";
      });
    }, 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center section-dark overflow-hidden">
        <style>{`
          @keyframes heroFadeUp {
            from { opacity: 0; transform: translateY(32px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes heroFadeIn {
            from { opacity: 0; }
            to   { opacity: 1; }
          }
          @keyframes heroBgReveal {
            from { opacity: 0; transform: scale(1.04); }
            to   { opacity: 0.30; transform: scale(1); }
          }
          @keyframes heroLineGrow {
            from { transform: scaleX(0); opacity: 0; }
            to   { transform: scaleX(1); opacity: 1; }
          }
          .hero-enter {
            animation-fill-mode: both;
            animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
            animation-play-state: paused;
          }
          @media (prefers-reduced-motion: reduce) {
            .hero-enter { animation: none !important; opacity: 1 !important; transform: none !important; }
          }
        `}</style>
        <div className="absolute inset-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663303940668/cNUSTNFzMCFwRDHvZHurhf/hero-bg-alt-v1-bMgf4WdepkWJNfFxjYSSm3.webp"
            alt="Professional accounting office"
            className="w-full h-full object-cover hero-enter"
            style={{animationName:'heroBgReveal', animationDuration:'1.8s', animationDelay:'0ms'}}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.12_0.01_260)] via-[oklch(0.12_0.01_260)/90%] to-transparent" />
        </div>

        <div className="container relative z-10 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: tagline */}
            <div>
              {/* Gold accent line */}
              <div
                className="hero-enter w-10 h-px mb-6 origin-left"
                style={{background:'oklch(0.62 0.12 75)', animationName:'heroLineGrow', animationDuration:'0.7s', animationDelay:'200ms'}}
              />
              <p
                className="hero-enter text-[oklch(0.62_0.12_75)] text-sm uppercase tracking-[0.2em] mb-6 font-sans font-medium"
                style={{animationName:'heroFadeUp', animationDuration:'0.9s', animationDelay:'320ms'}}
              >
                Doral, FL — Certified Public Accountant
              </p>
              <h1
                className="hero-enter text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6"
                style={{animationName:'heroFadeUp', animationDuration:'1.0s', animationDelay:'460ms'}}
              >
                Accounting That Works<br />as Hard as You Do.
              </h1>
              <p
                className="hero-enter text-white/60 text-lg leading-relaxed mb-10 max-w-lg font-light"
                style={{animationName:'heroFadeUp', animationDuration:'1.0s', animationDelay:'600ms'}}
              >
                Expert accounting, tax, and financial advisory services for individuals and businesses across South Florida.
              </p>
              <div
                className="hero-enter flex flex-col sm:flex-row gap-4"
                style={{animationName:'heroFadeUp', animationDuration:'1.0s', animationDelay:'740ms'}}
              >
                <Link href="/book" className="btn-gold rounded-sm text-center" style={{color:'#ffffff'}}>
                  Book a Free Consultation
                </Link>
                <a href="tel:3058777107" className="btn-outline-gold rounded-sm text-center">
                  (305) 877-7107
                </a>
              </div>
            </div>
            {/* Right: GHL consultation form */}
            <div
              className="hero-enter relative"
              style={{background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.15)', boxShadow: '0 25px 60px rgba(0,0,0,0.4)', animationName:'heroFadeUp', animationDuration:'1.1s', animationDelay:'560ms'}}
            >
              <div className="h-1 w-full" style={{background: 'linear-gradient(90deg, oklch(0.62 0.12 75), oklch(0.72 0.10 75))'}} />
              <div className="px-7 pt-6 pb-2 text-center">
                <p className="font-serif text-white text-2xl leading-tight mb-1">Reach Out To Our Team</p>
                <p className="text-xs text-white/60 mt-0.5">Speak with a CPA — no commitment required</p>
                <div className="h-px mt-4" style={{background: 'rgba(255,255,255,0.15)'}} />
              </div>
              <div className="px-4 pb-4">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/L0f9VxAUVJUOvPm938qF"
                  style={{width:'100%', height:'639px', border:'none', borderRadius:'4px'}}
                  id="inline-L0f9VxAUVJUOvPm938qF"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="ASAP Website Form"
                  data-height="639"
                  data-layout-iframe-id="inline-L0f9VxAUVJUOvPm938qF"
                  data-form-id="L0f9VxAUVJUOvPm938qF"
                  title="ASAP Website Form"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="section-cream py-12 border-b border-[oklch(0.88_0.01_80)]">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-center">
            <div className="reveal">
              <p className="text-3xl font-serif text-[oklch(0.62_0.12_75)]">5.0</p>
              <p className="text-xs text-[oklch(0.40_0.01_260)] uppercase tracking-wider mt-1">Google Rating</p>
            </div>
            <div className="w-px h-10 bg-[oklch(0.88_0.01_80)] hidden md:block" />
            <div className="reveal" style={{transitionDelay:'80ms'}}>
              <p className="text-3xl font-serif text-[oklch(0.62_0.12_75)]">15+</p>
              <p className="text-xs text-[oklch(0.40_0.01_260)] uppercase tracking-wider mt-1">Years Experience</p>
            </div>
            <div className="w-px h-10 bg-[oklch(0.88_0.01_80)] hidden md:block" />
            <div className="reveal" style={{transitionDelay:'160ms'}}>
              <p className="text-3xl font-serif text-[oklch(0.62_0.12_75)]">South FL</p>
              <p className="text-xs text-[oklch(0.40_0.01_260)] uppercase tracking-wider mt-1">Based in Doral</p>
            </div>
            <div className="w-px h-10 bg-[oklch(0.88_0.01_80)] hidden md:block" />
            <div className="reveal" style={{transitionDelay:'240ms'}}>
              <p className="text-3xl font-serif text-[oklch(0.62_0.12_75)]">CPA</p>
              <p className="text-xs text-[oklch(0.40_0.01_260)] uppercase tracking-wider mt-1">Certified</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-cream py-20 md:py-28">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[oklch(0.62_0.12_75)] text-sm uppercase tracking-[0.15em] mb-3 font-sans font-medium reveal">What We Do</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-[oklch(0.15_0.01_260)] leading-tight font-serif reveal" style={{transitionDelay:'80ms'}}>
              Comprehensive Financial Services
            </h2>
            <p className="text-[oklch(0.40_0.01_260)] mt-4 text-lg leading-relaxed reveal" style={{transitionDelay:'160ms'}}>
              From daily bookkeeping to long-term financial strategy, we provide the expertise your business needs to thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <Link
                key={service.name}
                href={service.href}
                className="reveal group p-8 border border-[oklch(0.88_0.01_80)] hover:border-[oklch(0.62_0.12_75)] bg-white hover:bg-white transition-all duration-300 block"
                style={{ transitionDelay: `${i * 60}ms` }}
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

          <div className="text-center mt-12 reveal">
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
            <div className="reveal">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663303940668/cNUSTNFzMCFwRDHvZHurhf/about-susan-4oDS4cpqRAR3D4y9yBuG73.webp"
                alt="Susan Rodriguez, CPA - Founder of ASAP Accounting"
                className="w-full max-w-md mx-auto lg:mx-0 object-cover aspect-[3/4] rounded-sm"
              />
            </div>
            <div className="reveal" style={{transitionDelay:'120ms'}}>
              <p className="text-[oklch(0.62_0.12_75)] text-sm uppercase tracking-[0.15em] mb-3 font-sans font-medium">About Us</p>
              <h2 className="text-3xl md:text-4xl text-white leading-tight mb-6 font-serif">
                Meet Susan Rodriguez, CPA
              </h2>
              <p className="text-white/60 leading-relaxed mb-4">
                With over 15 years of experience in accounting and financial services, Susan founded ASAP Accounting to provide fast, reliable, and personalized financial support to individuals and businesses throughout South Florida.
              </p>
              <p className="text-white/60 leading-relaxed mb-8">
                Susan specializes in helping small businesses, entrepreneurs, and families navigate the complexities of tax compliance, financial planning, and business growth.
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
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[oklch(0.62_0.12_75)] text-sm uppercase tracking-[0.15em] mb-3 font-sans font-medium reveal">Why ASAP Accounting</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-[oklch(0.15_0.01_260)] leading-tight font-serif reveal" style={{transitionDelay:'80ms'}}>
              Built on Trust, Driven by Results
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { num: "1", title: "Personalized Service", desc: "Every client receives tailored attention. We take the time to understand your unique financial situation and goals." },
              { num: "2", title: "Fast Turnaround", desc: "ASAP is not just our name — it is our promise. We deliver accurate work on time, every time." },
              { num: "3", title: "Transparent Pricing", desc: "No surprise fees. We discuss pricing upfront so you always know exactly what to expect." },
            ].map((item, i) => (
              <div key={item.num} className="text-center reveal" style={{transitionDelay:`${i * 80}ms`}}>
                <div className="w-16 h-16 rounded-full border border-[oklch(0.62_0.12_75)] flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-serif text-[oklch(0.62_0.12_75)]">{item.num}</span>
                </div>
                <h3 className="text-xl font-serif text-[oklch(0.15_0.01_260)] mb-3">{item.title}</h3>
                <p className="text-sm text-[oklch(0.50_0.01_260)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-dark py-20 md:py-28">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[oklch(0.62_0.12_75)] text-sm uppercase tracking-[0.15em] mb-3 font-sans font-medium reveal">Client Reviews</p>
            <h2 className="text-3xl md:text-4xl text-white leading-tight font-serif reveal" style={{transitionDelay:'80ms'}}>
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="reveal border border-white/10 p-8 hover:border-[oklch(0.62_0.12_75)] transition-all duration-300">
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
              </div>
              <p className="text-white/70 text-sm leading-relaxed italic mb-6">
                "Susan did an outstanding job on my taxes. Professional, efficient, and highly knowledgeable. I'm impressed with their service. Highly recommend!"
              </p>
              <div className="w-8 h-px bg-[oklch(0.62_0.12_75)] mb-4" />
              <p className="text-white text-sm font-medium">Andre Eguigure</p>
              <p className="text-white/40 text-xs mt-1">Verified Google Review</p>
            </div>

            <div className="reveal border border-white/10 p-8 hover:border-[oklch(0.62_0.12_75)] transition-all duration-300" style={{transitionDelay:'80ms'}}>
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
              </div>
              <p className="text-white/70 text-sm leading-relaxed italic mb-6">
                "Highly recommend Susan she handled my taxes professionally, saving me time and is knowledgeable!"
              </p>
              <div className="w-8 h-px bg-[oklch(0.62_0.12_75)] mb-4" />
              <p className="text-white text-sm font-medium">The Feminine Development</p>
              <p className="text-white/40 text-xs mt-1">Verified Google Review</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Assistant Mention */}
      <section className="section-cream py-16 border-b border-[oklch(0.88_0.01_80)]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto reveal">
            <p className="text-[oklch(0.62_0.12_75)] text-sm uppercase tracking-[0.15em] mb-3 font-sans font-medium">Available 24/7</p>
            <h2 className="text-2xl md:text-3xl text-[oklch(0.15_0.01_260)] leading-tight mb-4 font-serif">
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
        <div className="container">
          <div className="max-w-2xl mx-auto text-center reveal">
            <div className="w-px h-12 bg-[oklch(0.62_0.12_75)] mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6 font-serif">
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
    </div>
  );
}
