import { Calendar, Phone, Mail } from "lucide-react";

export default function Book() {
  return (
    <div>
      <section className="bg-charcoal text-cream py-16">
        <div className="container">
          <p className="text-gold font-sans text-sm tracking-[0.2em] uppercase mb-4">Schedule a Meeting</p>
          <h1 className="font-serif text-4xl md:text-5xl mb-4">Book a Free Consultation</h1>
          <p className="text-cream/70 max-w-xl">
            Choose a time that works for you. Your first consultation is complimentary and comes with no obligation.
          </p>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="container max-w-4xl">
          <div className="bg-white border border-border rounded-lg p-12 text-center">
            <Calendar className="w-16 h-16 text-gold mx-auto mb-6" />
            <h2 className="font-serif text-3xl text-charcoal mb-4">Calendar Coming Soon</h2>
            <p className="text-charcoal/70 mb-8 max-w-md mx-auto">
              Our online scheduling system is being set up. In the meantime, please contact us directly to schedule your free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13058777107"
                className="inline-flex items-center justify-center gap-2 bg-gold text-white px-6 py-3 font-sans text-sm tracking-wider uppercase hover:bg-gold/90 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call (305) 877-7107
              </a>
              <a
                href="mailto:susan@asap-accounting.us"
                className="inline-flex items-center justify-center gap-2 border border-charcoal text-charcoal px-6 py-3 font-sans text-sm tracking-wider uppercase hover:bg-charcoal hover:text-cream transition-colors"
              >
                <Mail className="w-4 h-4" />
                Email Us
              </a>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-serif text-lg text-charcoal mb-2">Free Consultation</h3>
              <p className="text-charcoal/60 text-sm">No cost, no obligation. We will assess your needs and recommend the right services.</p>
            </div>
            <div>
              <h3 className="font-serif text-lg text-charcoal mb-2">30-Minute Meeting</h3>
              <p className="text-charcoal/60 text-sm">A focused conversation about your financial situation and how we can help.</p>
            </div>
            <div>
              <h3 className="font-serif text-lg text-charcoal mb-2">Bilingual Support</h3>
              <p className="text-charcoal/60 text-sm">Consultations available in English and Spanish. Your choice.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
