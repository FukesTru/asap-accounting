import { Link } from "wouter";
import PageHero from "@/components/PageHero";
import { Calculator, FileText, TrendingUp, DollarSign, Shield, PiggyBank, Heart } from "lucide-react";

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
  return (
    <div>
      <PageHero label="Our Services" title="Comprehensive Financial Services" subtitle="From daily bookkeeping to long-term wealth planning, ASAP Accounting provides the full spectrum of financial services your business and family need." />
      <section className="section-cream py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link key={service.name} href={service.href} className="group p-8 border border-[oklch(0.88_0.01_80)] hover:border-[oklch(0.62_0.12_75)] bg-white transition-all duration-300">
                <service.icon className="w-6 h-6 text-[oklch(0.62_0.12_75)] mb-4" />
                <h3 className="text-xl text-[oklch(0.15_0.01_260)] mb-3 font-serif">{service.name}</h3>
                <p className="text-sm text-[oklch(0.50_0.01_260)] leading-relaxed">{service.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section-dark py-20 md:py-28">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl text-white leading-tight mb-6 font-serif">Not Sure What You Need?</h2>
          <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-xl mx-auto">Book a free consultation and we will assess your situation and recommend the right services for your needs.</p>
          <Link href="/book" className="btn-gold rounded-sm inline-block">Book a Free Consultation</Link>
        </div>
      </section>
    </div>
  );
}
