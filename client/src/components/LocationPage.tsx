import { Link } from "wouter";
import PageHero from "./PageHero";

interface LocationPageProps {
  city: string;
  description: string;
  intro: string;
  details: string[];
}

export default function LocationPage({ city, description, intro, details }: LocationPageProps) {
  return (
    <div>
      <PageHero
        label={`Serving ${city}`}
        title={`Accounting & Tax Services in ${city}`}
        subtitle={description}
      />

      <section className="section-cream py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-[oklch(0.40_0.01_260)] text-lg leading-relaxed mb-6">{intro}</p>
            {details.map((d, i) => (
              <p key={i} className="text-[oklch(0.40_0.01_260)] leading-relaxed mb-4">{d}</p>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Bookkeeping", "Tax Preparation", "Tax Planning", "Payroll Services", "Financial Planning", "Retirement Planning"].map((service) => (
              <div key={service} className="border border-[oklch(0.88_0.01_80)] p-6 bg-white">
                <h3 className="font-serif text-lg text-[oklch(0.15_0.01_260)] mb-2">{service}</h3>
                <p className="text-sm text-[oklch(0.50_0.01_260)]">Professional {service.toLowerCase()} services for {city} residents and businesses.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl text-white leading-tight mb-6 font-serif">
              Serving {city} and Surrounding Areas
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-4">
              ASAP Accounting is conveniently located in Doral, FL, providing easy access for clients throughout {city} and the greater South Florida area. We offer both in-person and virtual consultations to fit your schedule.
            </p>
            <p className="text-white/60 leading-relaxed mb-10">
              Bilingual services available in English and Spanish. Our AI assistant is also available 24/7 for quick questions about our services.
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
        </div>
      </section>

      <section className="section-cream py-16">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="text-[oklch(0.50_0.01_260)]">Also serving:</span>
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
