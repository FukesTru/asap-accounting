import { Link } from "wouter";
import { CheckCircle, Phone } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const values = [
  { title: "Integrity", desc: "We operate with complete transparency and honesty. Your trust is the foundation of everything we do." },
  { title: "Efficiency", desc: "ASAP is our promise. We deliver accurate, timely results so you can focus on what matters most." },
  { title: "Expertise", desc: "Backed by years of experience and ongoing education, we stay current with tax law and financial best practices." },
];

const credentials = [
  "Over 15 years of professional accounting experience",
  "Specialization in small business and individual tax",
  "English- and Spanish-speaking services available",
  "Serving Miami-Dade, Broward, and all of South Florida",
];

export default function About() {
  const containerRef = useScrollReveal();

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="section-dark py-28 md:py-36 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 60px, oklch(0.62 0.12 75) 60px, oklch(0.62 0.12 75) 61px)', backgroundSize: '100% 61px'}} />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[oklch(0.62_0.12_75)] text-sm uppercase tracking-[0.2em] font-sans font-medium mb-6 reveal">Our Story</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6 font-serif reveal" style={{transitionDelay:'80ms'}}>
              About ASAP Accounting
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-2xl mx-auto reveal" style={{transitionDelay:'160ms'}}>
              A trusted South Florida accounting firm built on integrity, expertise, and a commitment to your financial success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center reveal" style={{transitionDelay:'240ms'}}>
              <Link href="/book" className="btn-gold rounded-sm text-center">Book a Free Consultation</Link>
              <a href="tel:+13058777107" className="btn-outline-gold rounded-sm text-center">
                <span className="flex items-center gap-2 justify-center"><Phone className="w-4 h-4" /> (305) 877-7107</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Susan Bio */}
      <section className="section-cream py-20 md:py-28">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="reveal">
                <img
                  src="/manus-storage/susan-headshot_3c40effc.png"
                  alt="Susan Rodriguez - Founder of ASAP Accounting"
                  className="w-full max-w-md mx-auto object-cover object-top"
                  style={{aspectRatio: '3/4'}}
                />
              </div>
              <div>
                <p className="text-[oklch(0.62_0.12_75)] text-sm uppercase tracking-[0.15em] mb-3 font-sans font-medium reveal">Founder &amp; Accountant</p>
                <h2 className="text-3xl md:text-4xl text-[oklch(0.15_0.01_260)] leading-tight mb-6 font-serif reveal" style={{transitionDelay:'80ms'}}>
                  Susan Rodriguez
                </h2>
                <p className="text-[oklch(0.40_0.01_260)] leading-relaxed mb-4 reveal" style={{transitionDelay:'120ms'}}>
                  ASAP Accounting LLC was founded with a clear mission: to provide fast, reliable, and personalized accounting services to individuals and businesses throughout South Florida. Based in Doral, FL, we serve clients across Miami-Dade County, Broward County, and beyond.
                </p>
                <p className="text-[oklch(0.40_0.01_260)] leading-relaxed mb-4 reveal" style={{transitionDelay:'160ms'}}>
                  Susan Rodriguez brings over 15 years of professional experience in accounting, tax preparation, financial planning, and business advisory. She combines deep technical expertise with a genuine commitment to helping clients achieve their financial goals.
                </p>
                <p className="text-[oklch(0.40_0.01_260)] leading-relaxed mb-8 reveal" style={{transitionDelay:'200ms'}}>
                  Susan understands the unique needs of South Florida's diverse business community. Whether you are a startup founder, a growing small business, or an individual seeking tax guidance, ASAP Accounting provides the attentive, knowledgeable service you deserve. We proudly serve both English- and Spanish-speaking clients.
                </p>
                <div className="space-y-3 mb-8">
                  {credentials.map((c, i) => (
                    <div key={i} className="flex items-start gap-3 reveal" style={{transitionDelay:`${240 + i * 60}ms`}}>
                      <CheckCircle className="w-5 h-5 text-[oklch(0.62_0.12_75)] shrink-0 mt-0.5" />
                      <p className="text-[oklch(0.40_0.01_260)] text-sm leading-relaxed">{c}</p>
                    </div>
                  ))}
                </div>
                <div className="reveal" style={{transitionDelay:'480ms'}}>
                  <Link href="/book" className="btn-gold rounded-sm inline-block">
                    Schedule a Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nubia Medina Bio */}
      <section className="section-dark py-20 md:py-28">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="order-2 lg:order-1">
                <p className="text-[oklch(0.62_0.12_75)] text-sm uppercase tracking-[0.15em] mb-3 font-sans font-medium reveal">Accountant</p>
                <h2 className="text-3xl md:text-4xl text-white leading-tight mb-6 font-serif reveal" style={{transitionDelay:'80ms'}}>
                  Nubia Medina
                </h2>
                <p className="text-white/70 leading-relaxed mb-4 reveal" style={{transitionDelay:'120ms'}}>
                  Nubia Medina is an accountant with over 30 years of accounting experience. She also speaks Spanish and helps ASAP Accounting serve both English- and Spanish-speaking clients throughout South Florida.
                </p>
                <p className="text-white/70 leading-relaxed mb-8 reveal" style={{transitionDelay:'160ms'}}>
                  Her decades of hands-on experience bring a depth of knowledge and reliability that our clients depend on. Nubia's background spans a wide range of accounting disciplines, making her an invaluable part of the ASAP Accounting team.
                </p>
              </div>
              <div className="order-1 lg:order-2 reveal" style={{transitionDelay:'80ms'}}>
                <img
                  src="/manus-storage/nubia-medina-headshot_1116f78b.webp"
                  alt="Nubia Medina - Accountant at ASAP Accounting"
                  className="w-full max-w-md mx-auto object-cover object-top"
                  style={{aspectRatio: '3/4'}}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-cream py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-14">
            <p className="text-[oklch(0.62_0.12_75)] text-sm uppercase tracking-[0.15em] mb-3 font-sans font-medium reveal">What Guides Us</p>
            <h2 className="text-3xl md:text-4xl text-[oklch(0.15_0.01_260)] leading-tight font-serif reveal" style={{transitionDelay:'80ms'}}>Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {values.map((v, i) => (
              <div key={v.title} className="reveal border border-[oklch(0.88_0.01_80)] p-8 hover:border-[oklch(0.62_0.12_75)] transition-all duration-300" style={{transitionDelay:`${i * 80}ms`}}>
                <div className="w-8 h-px bg-[oklch(0.62_0.12_75)] mb-5" />
                <h3 className="text-xl text-[oklch(0.15_0.01_260)] mb-3 font-serif">{v.title}</h3>
                <p className="text-[oklch(0.40_0.01_260)] text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark py-20 md:py-28">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center reveal">
            <div className="w-px h-12 bg-[oklch(0.62_0.12_75)] mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl text-white leading-tight mb-6 font-serif">
              Ready to Work With Us?
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              Let us show you what personalized, professional accounting looks like. Your first consultation is free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book" className="btn-gold rounded-sm text-center">Book a Free Consultation</Link>
              <a href="tel:+13058777107" className="btn-outline-gold rounded-sm text-center">(305) 877-7107</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
