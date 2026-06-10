import { Link } from "wouter";
import PageHero from "@/components/PageHero";

export default function OurTeam() {
  return (
    <div>
      <PageHero label="Our Team" title="The People Behind ASAP Accounting" subtitle="Meet the professionals dedicated to your financial success." />
      <section className="section-cream py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663303940668/cNUSTNFzMCFwRDHvZHurhf/about-susan-4oDS4cpqRAR3D4y9yBuG73.webp" alt="Susan Rodriguez, CPA" className="w-full max-w-sm mx-auto object-cover aspect-[3/4] rounded-sm" />
              <div>
                <h2 className="text-3xl font-serif text-[oklch(0.15_0.01_260)] mb-2">Susan Rodriguez</h2>
                <p className="text-[oklch(0.62_0.12_75)] text-sm uppercase tracking-wider mb-4 font-medium">Founder & CPA</p>
                <p className="text-[oklch(0.40_0.01_260)] leading-relaxed mb-4">Susan is a Certified Public Accountant with over 15 years of experience serving individuals and businesses throughout South Florida. She specializes in tax planning, business advisory, and financial strategy.</p>
                <p className="text-[oklch(0.40_0.01_260)] leading-relaxed mb-4">Fluent in English and Spanish, Susan is passionate about making financial services accessible and understandable for all of her clients.</p>
                <p className="text-[oklch(0.40_0.01_260)] leading-relaxed">Her approach combines deep technical knowledge with genuine care for each client's unique situation and goals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-dark py-20 md:py-28">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl text-white leading-tight mb-6 font-serif">Work With Our Team</h2>
          <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-xl mx-auto">Schedule a consultation to discuss your financial needs with Susan and the ASAP Accounting team.</p>
          <Link href="/book" className="btn-gold rounded-sm inline-block">Book a Free Consultation</Link>
        </div>
      </section>
    </div>
  );
}
