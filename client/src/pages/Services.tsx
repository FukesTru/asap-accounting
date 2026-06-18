import { Link } from "wouter";
import { Calculator, FileText, TrendingUp, DollarSign, Shield, PiggyBank, Heart, ArrowRight, Phone } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  { icon: Calculator, name: "Bookkeeping", desc: "Accurate, organized financial records that keep your business running smoothly. We handle accounts payable, receivable, reconciliation, and financial reporting.", href: "/services/bookkeeping" },
  { icon: FileText, name: "Tax Preparation", desc: "Expert tax filing for individuals and businesses. We ensure accuracy, maximize deductions, and file on time — every time.", href: "/services/tax-preparation" },
  { icon: TrendingUp, name: "Tax Planning", desc: "Proactive strategies to reduce your tax burden year-round. We analyze your situation and implement legal strategies to keep more money in your pocket.", href: "/services/tax-planning" },
  { icon: DollarSign, name: "Payroll Services", desc: "Reliable payroll processing, tax deposits, W-2s, and compliance reporting. Keep your team paid accurately and on schedule.", href: "/services/payroll" },
  { icon: Shield, name: "Financial Planning", desc: "Comprehensive financial roadmaps tailored to your goals. From budgeting to investment strategy, we help you build a secure future.", href: "/services/financial-planning" },
  { icon: PiggyBank, name: "Retirement & Wealth Planning", desc: "Strategic planning for retirement accounts, wealth accumulation, and long-term financial security for you and your family.", href: "/services/retirement-wealth-planning" },
  { icon: Heart, name: "Life Insurance", desc: "Protect your family and business with the right life insurance coverage. We help you evaluate options and find the best fit.", href: "/services/life-insurance" },
];

export default function Services() {
  const containerRef = useScrollReveal();

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="section-dark py-28 md:py-36 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 60px, oklch(0.62 0.12 75) 60px, oklch(0.62 0.12 75) 61px)', backgroundSize: '100% 61px'}} />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[oklch(0.62_0.12_75)] text-sm uppercase tracking-[0.2em] font-sans font-medium mb-6 reveal">Our Services</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6 font-serif reveal" style={{transitionDelay:'80ms'}}>
              Comprehensive Financial Services
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-2xl mx-auto reveal" style={{transitionDelay:'160ms'}}>
              From daily bookkeeping to long-term wealth planning, ASAP Accounting provides the full spectrum of financial services your business and family need.
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

      {/* Services Grid */}
      <section className="section-cream py-20 md:py-28">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[oklch(0.62_0.12_75)] text-sm uppercase tracking-[0.15em] mb-3 font-sans font-medium reveal">What We Offer</p>
            <h2 className="text-3xl md:text-4xl text-[oklch(0.15_0.01_260)] leading-tight font-serif reveal" style={{transitionDelay:'80ms'}}>
              Every Service Your Business Needs
            </h2>
            <p className="text-[oklch(0.40_0.01_260)] mt-4 text-lg leading-relaxed reveal" style={{transitionDelay:'160ms'}}>
              Select a service below to learn more about how ASAP Accounting can help you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((service, i) => (
              <Link
                key={service.name}
                href={service.href}
                className="reveal group p-8 border border-[oklch(0.88_0.01_80)] hover:border-[oklch(0.62_0.12_75)] bg-white transition-all duration-300 block"
                style={{transitionDelay:`${i * 60}ms`}}
              >
                <service.icon className="w-6 h-6 text-[oklch(0.62_0.12_75)] mb-4" />
                <h3 className="text-xl text-[oklch(0.15_0.01_260)] mb-3 font-serif">{service.name}</h3>
                <p className="text-sm text-[oklch(0.50_0.01_260)] leading-relaxed mb-4">{service.desc}</p>
                <span className="text-[oklch(0.62_0.12_75)] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark py-20 md:py-28">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center reveal">
            <div className="w-px h-12 bg-[oklch(0.62_0.12_75)] mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl text-white leading-tight mb-6 font-serif">Not Sure What You Need?</h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              Book a free consultation and we will assess your situation and recommend the right services for your needs.
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
