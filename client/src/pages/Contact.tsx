import { Link } from "wouter";
import PageHero from "@/components/PageHero";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div>
      <PageHero label="Get in Touch" title="Contact ASAP Accounting" subtitle="We are here to help. Reach out to schedule a consultation or ask a question." />
      <section className="section-cream py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-serif text-[oklch(0.15_0.01_260)] mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border border-[oklch(0.62_0.12_75)] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[oklch(0.62_0.12_75)]" />
                  </div>
                  <div>
                    <p className="text-[oklch(0.15_0.01_260)] font-medium mb-1">Phone</p>
                    <a href="tel:+13058777107" className="text-[oklch(0.40_0.01_260)] hover:text-[oklch(0.62_0.12_75)] transition-colors">(305) 877-7107</a>
                    <p className="text-sm text-[oklch(0.50_0.01_260)] mt-1">Available Mon–Fri, 9am–5pm</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border border-[oklch(0.62_0.12_75)] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[oklch(0.62_0.12_75)]" />
                  </div>
                  <div>
                    <p className="text-[oklch(0.15_0.01_260)] font-medium mb-1">Email</p>
                    <a href="mailto:susan@asap-accounting.us" className="text-[oklch(0.40_0.01_260)] hover:text-[oklch(0.62_0.12_75)] transition-colors">susan@asap-accounting.us</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border border-[oklch(0.62_0.12_75)] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[oklch(0.62_0.12_75)]" />
                  </div>
                  <div>
                    <p className="text-[oklch(0.15_0.01_260)] font-medium mb-1">Location</p>
                    <p className="text-[oklch(0.40_0.01_260)]">Doral, FL 33178</p>
                    <p className="text-sm text-[oklch(0.50_0.01_260)] mt-1">Serving all of South Florida</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border border-[oklch(0.62_0.12_75)] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-[oklch(0.62_0.12_75)]" />
                  </div>
                  <div>
                    <p className="text-[oklch(0.15_0.01_260)] font-medium mb-1">Business Hours</p>
                    <p className="text-[oklch(0.40_0.01_260)]">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-[oklch(0.40_0.01_260)]">Saturday - Sunday: By Appointment</p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <Link href="/book" className="btn-gold rounded-sm inline-block">Book a Free Consultation</Link>
              </div>
            </div>
            <div className="bg-white border border-[oklch(0.88_0.01_80)] rounded-sm overflow-hidden">
              <div className="h-1 w-full" style={{background: 'linear-gradient(90deg, oklch(0.62 0.12 75), oklch(0.72 0.10 75))'}} />
              <div className="px-8 pt-6 pb-2">
                <h3 className="text-xl font-serif text-[oklch(0.15_0.01_260)] mb-1">Send Us a Message</h3>
                <p className="text-sm text-[oklch(0.50_0.01_260)]">We respond within one business day.</p>
                <div className="h-px bg-[oklch(0.92_0.004_286)] mt-4" />
              </div>
              <div className="px-4 pb-4">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/L0f9VxAUVJUOvPm938qF"
                  style={{width:'100%', height:'639px', border:'none', borderRadius:'4px'}}
                  id="inline-contact-L0f9VxAUVJUOvPm938qF"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="ASAP Website Form"
                  data-height="639"
                  data-layout-iframe-id="inline-contact-L0f9VxAUVJUOvPm938qF"
                  data-form-id="L0f9VxAUVJUOvPm938qF"
                  title="ASAP Website Form"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
