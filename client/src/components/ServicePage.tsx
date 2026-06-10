import { Link } from "wouter";
import PageHero from "./PageHero";
import { ReactNode } from "react";

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

export default function ServicePage({ label, title, subtitle, intro, benefits, details, image, ctaText, children }: ServicePageProps) {
  return (
    <div>
      <PageHero label={label} title={title} subtitle={subtitle} />

      <section className="section-cream py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[oklch(0.40_0.01_260)] text-lg leading-relaxed mb-8">{intro}</p>
              <div className="space-y-4">
                {details.map((d, i) => (
                  <p key={i} className="text-[oklch(0.40_0.01_260)] leading-relaxed">{d}</p>
                ))}
              </div>
              <div className="mt-10">
                <Link href="/book" className="btn-gold rounded-sm inline-block">
                  {ctaText || "Book a Free Consultation"}
                </Link>
              </div>
            </div>
            <div>
              <img src={image} alt={title} className="w-full rounded-sm object-cover aspect-video mb-8" />
              <div className="space-y-4">
                {benefits.map((b, i) => (
                  <div key={i} className="border-l-2 border-[oklch(0.62_0.12_75)] pl-4">
                    <h3 className="text-lg font-serif text-[oklch(0.15_0.01_260)] mb-1">{b.title}</h3>
                    <p className="text-sm text-[oklch(0.50_0.01_260)] leading-relaxed">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {children}

      <section className="section-dark py-20 md:py-28">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl text-white leading-tight mb-6 font-serif">
            Let Us Handle the Numbers
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Schedule a free consultation to discuss how we can help with your specific needs.
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
      </section>
    </div>
  );
}
