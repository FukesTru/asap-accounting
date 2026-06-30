import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const contactItems = [
  {
    icon: Phone,
    label: "Phone",
    value: "(305) 877-7107",
    href: "tel:+13058777107",
    note: "Available Mon–Fri, 9am–5pm",
  },
  {
    icon: Mail,
    label: "Email",
    value: "susan@asap-accounting.us",
    href: "mailto:susan@asap-accounting.us",
    note: null,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Doral, FL 33178",
    href: null,
    note: "Serving all of South Florida",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Monday – Friday: 9:00 AM – 5:00 PM",
    href: null,
    note: "Saturday – Sunday: By Appointment",
  },
];

export default function Contact() {
  const containerRef = useScrollReveal();

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="section-dark py-28 md:py-36 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 60px, oklch(0.62 0.12 75) 60px, oklch(0.62 0.12 75) 61px)', backgroundSize: '100% 61px'}} />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[oklch(0.62_0.12_75)] text-sm uppercase tracking-[0.2em] font-sans font-medium mb-6 reveal">Get in Touch</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6 font-serif reveal" style={{transitionDelay:'80ms'}}>
              Contact ASAP Accounting
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-2xl mx-auto reveal" style={{transitionDelay:'160ms'}}>
              We are here to help. Reach out to schedule a consultation or ask a question — we respond within one business day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center reveal" style={{transitionDelay:'240ms'}}>
              <Link href="/contact" className="btn-gold rounded-sm text-center">Book a Free Consultation</Link>
              <a href="tel:+13058777107" className="btn-outline-gold rounded-sm text-center">
                <span className="flex items-center gap-2 justify-center"><Phone className="w-4 h-4" /> (305) 877-7107</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="section-cream py-20 md:py-28">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left: Contact Details */}
              <div>
                <p className="text-[oklch(0.62_0.12_75)] text-sm uppercase tracking-[0.15em] mb-3 font-sans font-medium reveal">Reach Us Directly</p>
                <h2 className="text-3xl md:text-4xl text-[oklch(0.15_0.01_260)] leading-tight mb-10 font-serif reveal" style={{transitionDelay:'80ms'}}>
                  We Are Here to Help
                </h2>
                <div className="space-y-8">
                  {contactItems.map((item, i) => (
                    <div key={item.label} className="flex items-start gap-5 reveal" style={{transitionDelay:`${120 + i * 80}ms`}}>
                      <div className="w-11 h-11 border border-[oklch(0.62_0.12_75)] flex items-center justify-center shrink-0">
                        <item.icon className="w-4 h-4 text-[oklch(0.62_0.12_75)]" />
                      </div>
                      <div>
                        <p className="text-[oklch(0.15_0.01_260)] font-medium mb-1 text-sm uppercase tracking-wider">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-[oklch(0.40_0.01_260)] hover:text-[oklch(0.62_0.12_75)] transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-[oklch(0.40_0.01_260)]">{item.value}</p>
                        )}
                        {item.note && <p className="text-sm text-[oklch(0.55_0.01_260)] mt-1">{item.note}</p>}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-10 reveal" style={{transitionDelay:'480ms'}}>
                  <Link href="/contact" className="btn-gold rounded-sm inline-block">Book a Free Consultation</Link>
                </div>
              </div>

              {/* Right: GHL Form */}
              <div className="reveal" style={{transitionDelay:'160ms'}}>
                <div className="bg-white border border-[oklch(0.88_0.01_80)] overflow-hidden">
                  <div className="h-1 w-full" style={{background: 'linear-gradient(90deg, oklch(0.62 0.12 75), oklch(0.72 0.10 75))'}} />
                  <div className="px-8 pt-6 pb-2">
                    <h3 className="text-xl font-serif text-[oklch(0.15_0.01_260)] mb-1">Send Us a Message</h3>
                    <p className="text-sm text-[oklch(0.50_0.01_260)]">We respond within one business day.</p>
                    <div className="h-px bg-[oklch(0.92_0.004_286)] mt-4" />
                  </div>
                  <div className="px-4 pb-4">
                    <iframe
                      src="https://api.leadconnectorhq.com/widget/form/5PNmgvGo3i6xCU5e1XgC"
                      style={{width:'100%', height:'752px', border:'none', borderRadius:'25px'}}
                      id="inline-5PNmgvGo3i6xCU5e1XgC"
                      data-layout="{'id':'INLINE'}"
                      data-trigger-type="alwaysShow"
                      data-trigger-value=""
                      data-activation-type="alwaysActivated"
                      data-activation-value=""
                      data-deactivation-type="neverDeactivate"
                      data-deactivation-value=""
                      data-form-name="A2P Form"
                      data-height="752"
                      data-layout-iframe-id="inline-5PNmgvGo3i6xCU5e1XgC"
                      data-form-id="5PNmgvGo3i6xCU5e1XgC"
                      title="A2P Form"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-dark py-20 md:py-28">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center reveal">
            <div className="w-px h-12 bg-[oklch(0.62_0.12_75)] mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl text-white leading-tight mb-6 font-serif">
              Prefer to Talk First?
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              Call us directly or book a time that works for you. Your first consultation is completely free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-gold rounded-sm text-center">Book a Free Consultation</Link>
              <a href="tel:+13058777107" className="btn-outline-gold rounded-sm text-center">(305) 877-7107</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
