import { Link } from "wouter";
import { useEffect, useRef } from "react";
import { ArrowRight, MapPin, Phone, CheckCircle } from "lucide-react";

interface LocationPageProps {
  city: string;
  description: string;
  intro: string;
  details: string[];
}

const services = [
  { name: "Bookkeeping", href: "/services/bookkeeping", desc: "Accurate, organized financial records that keep your business running smoothly." },
  { name: "Tax Preparation", href: "/services/tax-preparation", desc: "Expert tax filing for individuals and businesses. Maximize deductions, minimize stress." },
  { name: "Tax Planning", href: "/services/tax-planning", desc: "Proactive strategies to reduce your tax burden year-round, not just at filing time." },
  { name: "Payroll Services", href: "/services/payroll", desc: "Reliable payroll processing that keeps your team paid and your business compliant." },
  { name: "Financial Planning", href: "/services/financial-planning", desc: "Clear financial roadmaps to help you build, protect, and grow your wealth." },
  { name: "Retirement Planning", href: "/services/retirement-wealth-planning", desc: "Secure your future with strategic retirement and wealth accumulation planning." },
];

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("loc-animate-in");
        });
      },
      { threshold: 0.08 }
    );
    const el = ref.current;
    if (el) el.querySelectorAll(".loc-reveal").forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function LocationPage({ city, description, intro, details }: LocationPageProps) {
  const containerRef = useScrollReveal();

  return (
    <div ref={containerRef}>
      <style>{`
        .loc-reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.9s cubic-bezier(0.23, 1, 0.32, 1), transform 0.9s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .loc-reveal.loc-animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      {/* Hero */}
      <section className="section-dark py-28 md:py-36 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 60px, oklch(0.62 0.12 75) 60px, oklch(0.62 0.12 75) 61px)', backgroundSize: '100% 61px'}} />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6 loc-reveal">
              <MapPin className="w-4 h-4 text-[oklch(0.62_0.12_75)]" />
              <p className="text-[oklch(0.62_0.12_75)] text-sm uppercase tracking-[0.2em] font-sans font-medium">Serving {city}, FL</p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6 font-serif loc-reveal" style={{transitionDelay:'80ms'}}>
              Accounting &amp; Tax Services<br />in {city}
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-2xl mx-auto loc-reveal" style={{transitionDelay:'160ms'}}>
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center loc-reveal" style={{transitionDelay:'240ms'}}>
              <Link href="/book" className="btn-gold rounded-sm text-center">Book a Free Consultation</Link>
              <a href="tel:+13058777107" className="btn-outline-gold rounded-sm text-center">
                <span className="flex items-center gap-2 justify-center"><Phone className="w-4 h-4" /> (305) 877-7107</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Content */}
      <section className="section-cream py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[oklch(0.62_0.12_75)] text-sm uppercase tracking-[0.15em] mb-3 font-sans font-medium loc-reveal">Why ASAP Accounting</p>
            <h2 className="text-3xl md:text-4xl text-[oklch(0.15_0.01_260)] leading-tight mb-8 font-serif loc-reveal" style={{transitionDelay:'80ms'}}>
              Trusted CPA Services for {city} Residents &amp; Businesses
            </h2>
            <p className="text-[oklch(0.40_0.01_260)] text-lg leading-relaxed mb-6 loc-reveal" style={{transitionDelay:'120ms'}}>{intro}</p>
            {details.map((d, i) => (
              <div key={i} className="flex items-start gap-3 text-left mb-4 loc-reveal" style={{transitionDelay:`${160 + i * 60}ms`}}>
                <CheckCircle className="w-5 h-5 text-[oklch(0.62_0.12_75)] shrink-0 mt-0.5" />
                <p className="text-[oklch(0.40_0.01_260)] leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-dark py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-14 loc-reveal">
            <p className="text-[oklch(0.62_0.12_75)] text-sm uppercase tracking-[0.15em] mb-3 font-sans font-medium">Our Services in {city}</p>
            <h2 className="text-3xl md:text-4xl text-white leading-tight font-serif">
              What We Offer
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service, i) => (
              <Link
                key={service.name}
                href={service.href}
                className="loc-reveal group border border-white/10 p-7 hover:border-[oklch(0.62_0.12_75)] transition-all duration-300 block"
                style={{transitionDelay:`${i * 60}ms`}}
              >
                <h3 className="font-serif text-lg text-white mb-2">{service.name}</h3>
                <p className="text-sm text-white/50 leading-relaxed mb-4">{service.desc}</p>
                <span className="text-[oklch(0.62_0.12_75)] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-cream py-20 md:py-28">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center loc-reveal">
            <div className="w-px h-12 bg-[oklch(0.62_0.12_75)] mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl text-[oklch(0.15_0.01_260)] leading-tight mb-6 font-serif">
              Ready to Work with a {city} CPA?
            </h2>
            <p className="text-[oklch(0.40_0.01_260)] text-lg leading-relaxed mb-10">
              ASAP Accounting serves clients throughout {city} and all of South Florida. Schedule your free consultation today — in person or virtually.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book" className="btn-gold rounded-sm text-center">Book a Free Consultation</Link>
              <a href="tel:+13058777107" className="btn-outline-gold rounded-sm text-center">(305) 877-7107</a>
            </div>
          </div>
        </div>
      </section>

      {/* Also Serving */}
      <section className="section-dark py-12">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="text-white/40">Also serving:</span>
            {["Doral", "Miami", "Hialeah", "Coral Gables", "Kendall", "Miami Lakes", "Miami Beach", "Homestead", "Pembroke Pines", "Miramar", "Fort Lauderdale"]
              .filter(c => c !== city)
              .map(c => (
                <Link key={c} href={`/locations/${c.toLowerCase().replace(/\s+/g, '-')}`} className="text-[oklch(0.62_0.12_75)] hover:underline">
                  {c}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
