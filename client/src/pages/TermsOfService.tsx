import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function TermsOfService() {
  const containerRef = useScrollReveal();

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="section-dark py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 60px, oklch(0.62 0.12 75) 60px, oklch(0.62 0.12 75) 61px)', backgroundSize: '100% 61px'}} />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[oklch(0.62_0.12_75)] text-sm uppercase tracking-[0.2em] font-sans font-medium mb-6 reveal">Legal</p>
            <h1 className="text-4xl md:text-5xl text-white leading-[1.1] mb-6 font-serif reveal" style={{transitionDelay:'80ms'}}>
              Terms of Service
            </h1>
            <p className="text-white/60 text-base leading-relaxed max-w-xl mx-auto reveal" style={{transitionDelay:'160ms'}}>
              ASAP Accounting LLC &mdash; Effective Date: January 1, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-cream py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-12">

            {/* SMS Messaging Terms */}
            <div className="reveal">
              <div className="w-8 h-px bg-[oklch(0.62_0.12_75)] mb-5" />
              <h2 className="text-2xl font-serif text-[oklch(0.15_0.01_260)] mb-4">SMS Messaging Terms &amp; Compliance</h2>
              <div className="space-y-4 text-[oklch(0.40_0.01_260)] leading-relaxed text-sm">
                <p><strong className="text-[oklch(0.15_0.01_260)]">Program Description:</strong> This messaging program sends appointment confirmation and reminder messages to customers who have booked an appointment with ASAP Accounting LLC through our website at Asap-accounting.us, or via our scheduling forms, and have explicitly opted in to receive SMS notifications. Opt-in is collected via web forms with a dedicated checkbox for SMS consent. Messages include scheduling confirmations, appointment reminders, rescheduling updates, and customer support communications.</p>
                <p><strong className="text-[oklch(0.15_0.01_260)]">Cancellation Instructions:</strong> You can cancel the SMS service at any time. Simply text "STOP" to the same number that sent you messages. Upon sending "STOP," we will confirm your unsubscribe status via SMS. Following this confirmation, you will no longer receive SMS messages from us. To rejoin, sign up as you did initially, and we will resume sending SMS messages to you.</p>
                <p><strong className="text-[oklch(0.15_0.01_260)]">Support Information:</strong> If you experience issues with the messaging program, reply with the keyword "HELP" for more assistance, or reach out directly to <a href="mailto:Susanr.rodriguez00@gmail.com" className="text-[oklch(0.62_0.12_75)] hover:underline">Susanr.rodriguez00@gmail.com</a> or call <a href="tel:+13058777107" className="text-[oklch(0.62_0.12_75)] hover:underline">(305) 877-7107</a> during business hours.</p>
                <p><strong className="text-[oklch(0.15_0.01_260)]">Carrier Liability:</strong> Carriers are not liable for delayed or undelivered messages.</p>
                <p><strong className="text-[oklch(0.15_0.01_260)]">Message &amp; Data Rates:</strong> Message and data rates may apply for messages sent to you from us and to us from you. Message frequency varies based on your service usage and appointment schedule. For questions about your text plan or data plan, contact your wireless provider.</p>
                <p><strong className="text-[oklch(0.15_0.01_260)]">Supported Carriers:</strong> Our SMS program works with all major U.S. wireless carriers, including AT&amp;T, T-Mobile, Verizon, Sprint, and most regional carriers.</p>
                <p><strong className="text-[oklch(0.15_0.01_260)]">Age Restriction:</strong> You must be 18 years or older to participate in our SMS program.</p>
                <p><strong className="text-[oklch(0.15_0.01_260)]">Privacy Policy:</strong> For privacy-related inquiries, please refer to our <a href="/privacy-policy" className="text-[oklch(0.62_0.12_75)] hover:underline">Privacy Policy</a>.</p>
                <p>We comply with all applicable laws and regulations, including the Telephone Consumer Protection Act (TCPA) and CTIA guidelines, regarding the use of SMS communications.</p>
              </div>
            </div>

            {/* General Terms */}
            <div className="reveal">
              <div className="w-8 h-px bg-[oklch(0.62_0.12_75)] mb-5" />
              <h2 className="text-2xl font-serif text-[oklch(0.15_0.01_260)] mb-4">General Terms</h2>
              <p className="text-[oklch(0.40_0.01_260)] leading-relaxed text-sm">
                This website (the "Site") is owned and operated by ASAP Accounting LLC ("COMPANY," "we" or "us"). By using the Site, you agree to be bound by these Terms of Service and to use the Site in accordance with these Terms of Service, our Privacy Policy, and any additional terms and conditions that may apply to specific sections of the Site or to products and services available through the Site or from ASAP Accounting LLC.
              </p>
              <p className="text-[oklch(0.40_0.01_260)] leading-relaxed text-sm mt-4">
                Accessing the Site, in any manner, whether automated or otherwise, constitutes use of the Site and your agreement to be bound by these Terms of Service.
              </p>
              <p className="text-[oklch(0.40_0.01_260)] leading-relaxed text-sm mt-4">
                We reserve the right to change these Terms of Service or to impose new conditions on the use of the Site from time to time, in which case we will post the revised Terms of Service on this website. By continuing to use the Site after we post any such changes, you accept the Terms of Service, as modified.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="reveal">
              <div className="w-8 h-px bg-[oklch(0.62_0.12_75)] mb-5" />
              <h2 className="text-2xl font-serif text-[oklch(0.15_0.01_260)] mb-4">Intellectual Property Rights</h2>
              <h3 className="text-base font-sans font-semibold text-[oklch(0.15_0.01_260)] mb-2">Our Limited License to You</h3>
              <p className="text-[oklch(0.40_0.01_260)] leading-relaxed text-sm mb-4">
                This Site and all the materials available on the Site are the property of ASAP Accounting LLC and/or our affiliates or licensors and are protected by copyright, trademark, and other intellectual property laws. The Site is provided solely for your personal non-commercial use. You may not use the Site or the materials available on the Site in a manner that constitutes an infringement of our rights or that has not been authorized by us.
              </p>
              <p className="text-[oklch(0.40_0.01_260)] leading-relaxed text-sm mb-6">
                Unless explicitly authorized, you may not modify, copy, reproduce, republish, upload, post, transmit, translate, sell, create derivative works, exploit, or distribute in any manner or medium any material from the Site. However, you may download and/or print one copy of individual pages for your personal, non-commercial use, provided that you keep intact all copyright and other proprietary notices.
              </p>
              <h3 className="text-base font-sans font-semibold text-[oklch(0.15_0.01_260)] mb-2">Your License to Us</h3>
              <p className="text-[oklch(0.40_0.01_260)] leading-relaxed text-sm">
                By posting or submitting any material (including comments, blog entries, social media posts, photos, and videos) to us via the Site, internet groups, or other digital venues, you represent that you own the material or have obtained the necessary permissions. You grant us a royalty-free, perpetual, irrevocable, non-exclusive, worldwide license to use, modify, transmit, sell, exploit, create derivative works from, distribute, and publicly perform or display such material.
              </p>
            </div>

            {/* Disclaimers */}
            <div className="reveal">
              <div className="w-8 h-px bg-[oklch(0.62_0.12_75)] mb-5" />
              <h2 className="text-2xl font-serif text-[oklch(0.15_0.01_260)] mb-4">Disclaimers</h2>
              <p className="text-[oklch(0.40_0.01_260)] leading-relaxed text-sm mb-4">
                Throughout the Site, we may provide links and pointers to Internet sites maintained by third parties. Our linking to such third-party sites does not imply an endorsement or sponsorship of such sites or the information, products, or services offered on or through the sites.
              </p>
              <p className="text-[oklch(0.40_0.01_260)] leading-relaxed text-sm mb-4">
                The information, products, and services offered on or through the Site are provided "as is" and without warranties of any kind, either express or implied. To the fullest extent permissible pursuant to applicable law, we disclaim all warranties, including implied warranties of merchantability and fitness for a particular purpose.
              </p>
              <p className="text-[oklch(0.40_0.01_260)] leading-relaxed text-sm">
                You agree at all times to indemnify and hold harmless ASAP Accounting LLC, its affiliates, and their respective officers, directors, agents, and employees from any claims, causes of action, damages, liabilities, costs, and expenses arising out of or related to your breach of any obligation, warranty, or representation under these Terms of Service.
              </p>
            </div>

            {/* Online Commerce */}
            <div className="reveal">
              <div className="w-8 h-px bg-[oklch(0.62_0.12_75)] mb-5" />
              <h2 className="text-2xl font-serif text-[oklch(0.15_0.01_260)] mb-4">Online Commerce</h2>
              <p className="text-[oklch(0.40_0.01_260)] leading-relaxed text-sm mb-4">
                Certain sections of the Site may allow you to purchase products and services from third-party vendors. We are not responsible for the quality, accuracy, timeliness, reliability, or any other aspect of these products and services. If you make a purchase from a third party linked through the Site, the information obtained during your visit, including payment information, may be collected by both the merchant and us.
              </p>
              <p className="text-[oklch(0.40_0.01_260)] leading-relaxed text-sm">
                Your participation in any dealings with third-party vendors is solely between you and the third party. ASAP Accounting LLC shall not be responsible for any loss or damage incurred as a result of such dealings.
              </p>
            </div>

            {/* Registration */}
            <div className="reveal">
              <div className="w-8 h-px bg-[oklch(0.62_0.12_75)] mb-5" />
              <h2 className="text-2xl font-serif text-[oklch(0.15_0.01_260)] mb-4">Registration &amp; Passwords</h2>
              <p className="text-[oklch(0.40_0.01_260)] leading-relaxed text-sm mb-4">
                To access certain features of the Site, you may be required to register and create an account. You agree to provide accurate, current, and complete information during the registration process. You are responsible for maintaining the confidentiality of your login credentials and for all activities conducted under your account.
              </p>
              <p className="text-[oklch(0.40_0.01_260)] leading-relaxed text-sm">
                If you suspect unauthorized use of your account, notify us immediately at <a href="mailto:Susanr.rodriguez00@gmail.com" className="text-[oklch(0.62_0.12_75)] hover:underline">Susanr.rodriguez00@gmail.com</a>. We are not liable for any loss or damage arising from your failure to comply with this obligation.
              </p>
            </div>

            {/* Termination */}
            <div className="reveal">
              <div className="w-8 h-px bg-[oklch(0.62_0.12_75)] mb-5" />
              <h2 className="text-2xl font-serif text-[oklch(0.15_0.01_260)] mb-4">Termination</h2>
              <p className="text-[oklch(0.40_0.01_260)] leading-relaxed text-sm">
                We reserve the right to terminate or suspend your access to the Site, without notice, if we determine that you have violated these Terms of Service or engaged in conduct that we deem inappropriate or unlawful. Upon termination, you must cease all use of the Site and any content obtained from it.
              </p>
            </div>

            {/* Governing Law */}
            <div className="reveal">
              <div className="w-8 h-px bg-[oklch(0.62_0.12_75)] mb-5" />
              <h2 className="text-2xl font-serif text-[oklch(0.15_0.01_260)] mb-4">Governing Law</h2>
              <p className="text-[oklch(0.40_0.01_260)] leading-relaxed text-sm">
                These Terms of Service shall be governed by and construed in accordance with the laws of the state in which ASAP Accounting LLC operates. Any dispute arising under these Terms shall be resolved exclusively through binding arbitration in that jurisdiction.
              </p>
            </div>

            {/* Changes */}
            <div className="reveal">
              <div className="w-8 h-px bg-[oklch(0.62_0.12_75)] mb-5" />
              <h2 className="text-2xl font-serif text-[oklch(0.15_0.01_260)] mb-4">Changes to Terms of Service</h2>
              <p className="text-[oklch(0.40_0.01_260)] leading-relaxed text-sm">
                We may update these Terms of Service from time to time. The latest version will always be available on our website with the effective date.
              </p>
            </div>

            {/* Contact */}
            <div className="reveal">
              <div className="w-8 h-px bg-[oklch(0.62_0.12_75)] mb-5" />
              <h2 className="text-2xl font-serif text-[oklch(0.15_0.01_260)] mb-4">Contact Us</h2>
              <p className="text-[oklch(0.40_0.01_260)] leading-relaxed text-sm mb-4">For any questions regarding these Terms of Service, please contact us:</p>
              <div className="space-y-1 text-sm text-[oklch(0.40_0.01_260)]">
                <p><strong className="text-[oklch(0.15_0.01_260)]">ASAP Accounting LLC</strong></p>
                <p>Phone: <a href="tel:+13058777107" className="text-[oklch(0.62_0.12_75)] hover:underline">(305) 877-7107</a></p>
                <p>Email: <a href="mailto:Susanr.rodriguez00@gmail.com" className="text-[oklch(0.62_0.12_75)] hover:underline">Susanr.rodriguez00@gmail.com</a></p>
                <p>Website: <a href="https://Asap-accounting.us" className="text-[oklch(0.62_0.12_75)] hover:underline">Asap-accounting.us</a></p>
              </div>
              <p className="text-[oklch(0.40_0.01_260)] leading-relaxed text-sm mt-6">
                By using our website and services, you consent to these Terms of Service.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
