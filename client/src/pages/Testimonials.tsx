import { Link } from "wouter";
import { useEffect, useRef } from "react";
import { Phone } from "lucide-react";

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("test-animate-in");
        });
      },
      { threshold: 0.08 }
    );
    const el = ref.current;
    if (el) el.querySelectorAll(".test-reveal").forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);
  return ref;
}

const StarIcon = () => (
  <svg className="w-5 h-5 text-[oklch(0.62_0.12_75)]" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const reviews = [
  {
    quote: "Susan did an outstanding job on my taxes. Professional, efficient, and highly knowledgeable. I'm impressed with their service. Highly recommend!",
    name: "Andre Eguigure",
    source: "Verified Google Review",
  },
  {
    quote: "Highly recommend Susan she handled my taxes professionally, saving me time and is knowledgeable!",
    name: "The Feminine Development",
    source: "Verified Google Review",
  },
];

export default function Testimonials() {
  const containerRef = useScrollReveal();

  return (
    <div ref={containerRef}>
      <style>{`
        .test-reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.9s cubic-bezier(0.23, 1, 0.32, 1), transform 0.9s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .test-reveal.test-animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      {/* Hero */}
      <section className="section-dark py-28 md:py-36 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 60px, oklch(0.62 0.12 75) 60px, oklch(0.62 0.12 75) 61px)', backgroundSize: '100% 61px'}} />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[oklch(0.62_0.12_75)] text-sm uppercase tracking-[0.2em] font-sans font-medium mb-6 test-reveal">Client Reviews</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6 font-serif test-reveal" style={{transitionDelay:'80ms'}}>
              What Our Clients Say
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-2xl mx-auto test-reveal" style={{transitionDelay:'160ms'}}>
              Real reviews from real clients. We are proud of the relationships we build and the results we deliver.
            </p>
            <div className="flex items-center justify-center gap-3 test-reveal" style={{transitionDelay:'240ms'}}>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
              </div>
              <span className="text-white/60 text-sm">5.0 on Google Business Profile</span>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-cream py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-8">
            {reviews.map((r, i) => (
              <div
                key={r.name}
                className="test-reveal border border-[oklch(0.88_0.01_80)] bg-white p-10"
                style={{transitionDelay:`${i * 120}ms`}}
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => <StarIcon key={j} />)}
                </div>
                <p className="text-[oklch(0.30_0.01_260)] leading-relaxed italic text-lg mb-8">"{r.quote}"</p>
                <div className="w-8 h-px bg-[oklch(0.62_0.12_75)] mb-4" />
                <p className="text-[oklch(0.15_0.01_260)] font-medium">{r.name}</p>
                <p className="text-[oklch(0.50_0.01_260)] text-sm mt-1">{r.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark py-20 md:py-28">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center test-reveal">
            <div className="w-px h-12 bg-[oklch(0.62_0.12_75)] mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl text-white leading-tight mb-6 font-serif">
              Ready to Become Our Next Success Story?
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              Schedule a free consultation and experience the ASAP Accounting difference for yourself.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book" className="btn-gold rounded-sm text-center">Book a Free Consultation</Link>
              <a href="tel:+13058777107" className="btn-outline-gold rounded-sm text-center">
                <span className="flex items-center gap-2 justify-center"><Phone className="w-4 h-4" /> (305) 877-7107</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
