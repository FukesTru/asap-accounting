import { Phone, Mail } from "lucide-react";
import { useEffect } from "react";

export default function Book() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <section className="bg-charcoal text-cream py-16">
        <div className="container">
          <p className="text-gold font-sans text-sm tracking-[0.2em] uppercase mb-4">Schedule a Meeting</p>
          <h1 className="font-serif text-4xl md:text-5xl mb-4">Book a Free Consultation</h1>
          <p className="text-cream/70 max-w-xl">
            Your first consultation is complimentary and comes with no obligation. Fill out the form below and we will be in touch to confirm your appointment.
          </p>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="container max-w-5xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left: info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="font-serif text-2xl text-charcoal mb-3">What to Expect</h2>
                <div className="w-10 h-0.5 bg-gold mb-5" />
                <div className="space-y-5">
                  <div>
                    <p className="font-sans font-semibold text-charcoal text-sm mb-1">Free Consultation</p>
                    <p className="text-charcoal/60 text-sm leading-relaxed">No cost, no obligation. We will assess your needs and recommend the right services for your situation.</p>
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-charcoal text-sm mb-1">30-Minute Meeting</p>
                    <p className="text-charcoal/60 text-sm leading-relaxed">A focused conversation about your financial situation and how ASAP Accounting can help you move forward.</p>
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-charcoal text-sm mb-1">Personalized Approach</p>
                    <p className="text-charcoal/60 text-sm leading-relaxed">Every client is different. We take the time to understand your goals before recommending any service.</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-charcoal/10 pt-8">
                <p className="font-sans font-semibold text-charcoal text-sm mb-4">Prefer to reach us directly?</p>
                <div className="space-y-3">
                  <a href="tel:+13058777107" className="flex items-center gap-3 text-charcoal hover:text-gold transition-colors text-sm">
                    <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                    (305) 877-7107
                  </a>
                  <a href="mailto:susan@asap-accounting.us" className="flex items-center gap-3 text-charcoal hover:text-gold transition-colors text-sm">
                    <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                    susan@asap-accounting.us
                  </a>
                </div>
              </div>
            </div>

            {/* Right: GHL form */}
            <div className="lg:col-span-2 bg-white shadow-lg" style={{borderTop: '4px solid oklch(0.62 0.12 75)'}}>
              <div className="p-6 border-b border-gray-100">
                <p className="font-serif text-xl text-charcoal">Request Your Free Consultation</p>
                <p className="text-sm text-charcoal/50 mt-1">Complete the form below and we will confirm your appointment shortly.</p>
              </div>
              <div className="p-4">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/L0f9VxAUVJUOvPm938qF"
                  style={{width:'100%', height:'717px', border:'none', borderRadius:'4px'}}
                  id="inline-L0f9VxAUVJUOvPm938qF"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="ASAP Website Form"
                  data-height="717"
                  data-layout-iframe-id="inline-L0f9VxAUVJUOvPm938qF"
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
