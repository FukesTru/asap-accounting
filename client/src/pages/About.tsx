import { Link } from "wouter";
import PageHero from "@/components/PageHero";

export default function About() {
  return (
    <div>
      <PageHero
        label="Our Story"
        title="About ASAP Accounting"
        subtitle="A trusted South Florida accounting firm built on integrity, expertise, and a commitment to your financial success."
      />

      <section className="section-cream py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663303940668/cNUSTNFzMCFwRDHvZHurhf/about-susan-4oDS4cpqRAR3D4y9yBuG73.webp"
                alt="Susan Rodriguez, CPA"
                className="w-full max-w-md mx-auto object-cover aspect-[3/4] rounded-sm"
              />
            </div>
            <div>
              <p className="text-[oklch(0.62_0.12_75)] text-sm uppercase tracking-[0.15em] mb-3 font-sans font-medium">Founded by Susan Rodriguez, CPA</p>
              <h2 className="text-3xl md:text-4xl text-[oklch(0.15_0.01_260)] leading-tight mb-6 font-serif">
                Dedicated to Your Financial Well-Being
              </h2>
              <p className="text-[oklch(0.40_0.01_260)] leading-relaxed mb-4">
                ASAP Accounting LLC was founded with a clear mission: to provide fast, reliable, and personalized accounting services to individuals and businesses throughout South Florida. Based in Doral, FL, we serve clients across Miami-Dade County, Broward County, and beyond.
              </p>
              <p className="text-[oklch(0.40_0.01_260)] leading-relaxed mb-4">
                Susan Rodriguez brings over 15 years of professional experience in accounting, tax preparation, financial planning, and business advisory. As a Certified Public Accountant, she combines technical expertise with a genuine commitment to helping clients achieve their financial goals.
              </p>
              <p className="text-[oklch(0.40_0.01_260)] leading-relaxed mb-8">
                Susan understands the unique needs of South Florida's diverse business community. Whether you are a startup founder, a growing small business, or an individual seeking tax guidance, ASAP Accounting provides the attentive, knowledgeable service you deserve.
              </p>
              <Link href="/book" className="btn-gold rounded-sm inline-block">
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl text-white leading-tight mb-8 font-serif">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-white/10 p-8 rounded-sm">
                <h3 className="text-xl text-white mb-3 font-serif">Integrity</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  We operate with complete transparency and honesty. Your trust is the foundation of everything we do.
                </p>
              </div>
              <div className="border border-white/10 p-8 rounded-sm">
                <h3 className="text-xl text-white mb-3 font-serif">Efficiency</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  ASAP is our promise. We deliver accurate, timely results so you can focus on what matters most.
                </p>
              </div>
              <div className="border border-white/10 p-8 rounded-sm">
                <h3 className="text-xl text-white mb-3 font-serif">Expertise</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Backed by years of experience and ongoing education, we stay current with tax law and financial best practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-cream py-20 md:py-28">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl text-[oklch(0.15_0.01_260)] leading-tight mb-6 font-serif">
            Ready to Work With Us?
          </h2>
          <p className="text-[oklch(0.40_0.01_260)] text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Let us show you what personalized, professional accounting looks like. Your first consultation is free.
          </p>
          <Link href="/book" className="btn-gold rounded-sm inline-block">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
