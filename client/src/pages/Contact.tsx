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
            <div className="bg-white border border-[oklch(0.88_0.01_80)] p-8 rounded-sm">
              <h3 className="text-xl font-serif text-[oklch(0.15_0.01_260)] mb-6">Send Us a Message</h3>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Thank you for your message. We will be in touch shortly."); }}>
                <div>
                  <label className="block text-sm text-[oklch(0.40_0.01_260)] mb-1">Full Name</label>
                  <input type="text" required className="w-full border border-[oklch(0.88_0.01_80)] px-4 py-3 text-sm bg-[oklch(0.97_0.005_80)] focus:border-[oklch(0.62_0.12_75)] focus:outline-none transition-colors" placeholder="Your full name" />
                </div>
                <div>
                  <label className="block text-sm text-[oklch(0.40_0.01_260)] mb-1">Email</label>
                  <input type="email" required className="w-full border border-[oklch(0.88_0.01_80)] px-4 py-3 text-sm bg-[oklch(0.97_0.005_80)] focus:border-[oklch(0.62_0.12_75)] focus:outline-none transition-colors" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm text-[oklch(0.40_0.01_260)] mb-1">Phone</label>
                  <input type="tel" className="w-full border border-[oklch(0.88_0.01_80)] px-4 py-3 text-sm bg-[oklch(0.97_0.005_80)] focus:border-[oklch(0.62_0.12_75)] focus:outline-none transition-colors" placeholder="(305) 000-0000" />
                </div>
                <div>
                  <label className="block text-sm text-[oklch(0.40_0.01_260)] mb-1">Message</label>
                  <textarea required rows={4} className="w-full border border-[oklch(0.88_0.01_80)] px-4 py-3 text-sm bg-[oklch(0.97_0.005_80)] focus:border-[oklch(0.62_0.12_75)] focus:outline-none transition-colors resize-none" placeholder="How can we help you?" />
                </div>
                <button type="submit" className="btn-gold rounded-sm w-full">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
