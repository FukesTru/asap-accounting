import { Link } from "wouter";
import { useEffect, useRef, ReactNode } from "react";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";

interface ServicePageProps {
  label: string;
  title: string;
  subtitle: string;
  intro: string;
  benefits: { title: string; desc: string }[];
  details: string[];
  image: string;
  ctaText?: string;
  children?: ReactNode;
}

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("svc-animate-in");
        });
      },
      { threshold: 0.08 }
    );
    const el = ref.current;
    if (el) el.querySelectorAll(".svc-reveal").forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function ServicePage({ label, title, subtitle, intro, benefits, details, image, ctaText, children }: ServicePageProps) {
  const containerRef = useScrollReveal();

  return (
    <div ref={containerRef}>
      <style>{`
        .svc-reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.9s cubic-bezier(0.23, 1, 0.32, 1), transform 0.9s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .svc-reveal.svc-animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      {/* Hero */}
      <section className="section-dark py-28 md:py-36 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 60px, oklch(0.62 0.12 75) 60px, oklch(0.62 0.12 75) 61px)', backgroundSize: '100% 61px'}} />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[oklch(0.62_0.12_75)] text-sm uppercase tracking-[0.2em] font-sans font-medium mb-6 svc-reveal">{label}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6 font-serif svc-reveal" style={{transitionDelay:'80ms'}}>
              {title}
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-2xl mx-auto svc-reveal" style={{transitionDelay:'160ms'}}>
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center svc-reveal" style={{transitionDelay:'240ms'}}>
              <Link href="/book" className="btn-gold rounded-sm text-center">{ctaText || "Book a Free Consultation"}</Link>
              <a href="tel:+13058777107" className="btn-outline-gold rounded-sm text-center">
                <span className="flex items-center gap-2 justify-center"><Phone className="w-4 h-4" /> (305) 877-7107</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Photo + Intro */}
      <section className="section-cream py-20 md:py-28">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="svc-reveal mb-14 overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full object-cover"
                style={{maxHeight: '480px', objectPosition: 'center'}}
              />
            </div>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-[oklch(0.62_0.12_75)] text-sm uppercase tracking-[0.15em] mb-3 font-sans font-medium svc-reveal">Overview</p>
              <h2 className="text-3xl md:text-4xl text-[oklch(0.15_0.01_260)] leading-tight mb-8 font-serif svc-reveal" style={{transitionDelay:'80ms'}}>
                What We Provide
              </h2>
              <p className="text-[oklch(0.40_0.01_260)] text-lg leading-relaxed mb-8 svc-reveal" style={{transitionDelay:'120ms'}}>{intro}</p>
              {details.map((d, i) => (
                <div key={i} className="flex items-start gap-3 text-left mb-4 svc-reveal" style={{transitionDelay:`${160 + i * 60}ms`}}>
                  <CheckCircle className="w-5 h-5 text-[oklch(0.62_0.12_75)] shrink-0 mt-0.5" />
                  <p className="text-[oklch(0.40_0.01_260)] leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-dark py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-14 svc-reveal">
            <p className="text-[oklch(0.62_0.12_75)] text-sm uppercase tracking-[0.15em] mb-3 font-sans font-medium">Why It Matters</p>
            <h2 className="text-3xl md:text-4xl text-white leading-tight font-serif">
              What You Can Expect
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="svc-reveal border border-white/10 p-7 hover:border-[oklch(0.62_0.12_75)] transition-all duration-300"
                style={{transitionDelay:`${i * 60}ms`}}
              >
                <div className="w-8 h-px bg-[oklch(0.62_0.12_75)] mb-4" />
                <h3 className="font-serif text-lg text-white mb-2">{b.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {children}

      {/* CTA */}
      <section className="section-cream py-20 md:py-28">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center svc-reveal">
            <div className="w-px h-12 bg-[oklch(0.62_0.12_75)] mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl text-[oklch(0.15_0.01_260)] leading-tight mb-6 font-serif">
              Ready to Get Started?
            </h2>
            <p className="text-[oklch(0.40_0.01_260)] text-lg leading-relaxed mb-10">
              Schedule a free consultation to discuss how we can help with your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book" className="btn-gold rounded-sm text-center">
                Book a Free Consultation
              </Link>
              <a href="tel:+13058777107" className="btn-outline-gold rounded-sm text-center">(305) 877-7107</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
