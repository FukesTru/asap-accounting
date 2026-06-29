import { Link } from "wouter";
import PageHero from "@/components/PageHero";

export default function OurTeam() {
  return (
    <div>
      <PageHero label="Our Team" title="The People Behind ASAP Accounting" subtitle="Meet the professionals dedicated to your financial success." />

      {/* Susan Rodriguez */}
      <section className="section-cream py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <img
                src="/manus-storage/susan-headshot_3c40effc.png"
                alt="Susan Rodriguez - Founder of ASAP Accounting"
                className="w-full max-w-sm mx-auto object-cover aspect-[3/4] rounded-sm"
              />
              <div>
                <h2 className="text-3xl font-serif text-[oklch(0.15_0.01_260)] mb-2">Susan Rodriguez</h2>
                <p className="text-[oklch(0.62_0.12_75)] text-sm uppercase tracking-wider mb-4 font-medium">Founder &amp; Accountant</p>
                <p className="text-[oklch(0.40_0.01_260)] leading-relaxed mb-4">Susan Rodriguez brings over 15 years of professional experience in accounting, tax preparation, financial planning, and business advisory. She founded ASAP Accounting to provide fast, reliable, and personalized financial services to individuals and businesses throughout South Florida.</p>
                <p className="text-[oklch(0.40_0.01_260)] leading-relaxed mb-4">Susan is passionate about making financial services accessible and understandable for all of her clients.</p>
                <p className="text-[oklch(0.40_0.01_260)] leading-relaxed">Her approach combines deep technical knowledge with genuine care for each client's unique situation and goals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nubia Medina */}
      <section className="section-dark py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-serif text-white mb-2">Nubia Medina</h2>
                <p className="text-[oklch(0.62_0.12_75)] text-sm uppercase tracking-wider mb-4 font-medium">Accountant</p>
                <p className="text-white/70 leading-relaxed mb-4">Nubia Medina is an accountant with over 30 years of accounting experience. She also speaks Spanish and helps ASAP Accounting serve both English- and Spanish-speaking clients.</p>
                <p className="text-white/70 leading-relaxed">Her decades of hands-on experience bring a depth of knowledge and reliability that our clients depend on.</p>
              </div>
              <img
                src="/manus-storage/nubia-medina-headshot_1116f78b.webp"
                alt="Nubia Medina - Accountant at ASAP Accounting"
                className="w-full max-w-sm mx-auto object-cover aspect-[3/4] rounded-sm order-1 md:order-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-cream py-20 md:py-28">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl text-[oklch(0.15_0.01_260)] leading-tight mb-6 font-serif">Work With Our Team</h2>
          <p className="text-[oklch(0.40_0.01_260)] text-lg leading-relaxed mb-10 max-w-xl mx-auto">Schedule a consultation to discuss your financial needs with Susan, Nubia, and the ASAP Accounting team. Spanish-speaking clients are welcome.</p>
          <Link href="/book" className="btn-gold rounded-sm inline-block">Book a Free Consultation</Link>
        </div>
      </section>
    </div>
  );
}
