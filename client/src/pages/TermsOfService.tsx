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
            <h1 className="text-4xl md:text-5xl text-white leading-[1.1] font-serif reveal">
              Terms of Service
            </h1>
          </div>
        </div>
      </section>

      {/* Full Content */}
      <section className="section-cream py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto reveal">
            <div className="space-y-5 text-sm text-[oklch(0.40_0.01_260)] leading-relaxed">

              <p><strong className="text-[oklch(0.15_0.01_260)]">ASAP ACCOUNTING LLC</strong><br />Effective Date: Jan 1st, 2026</p>

              <p><strong className="text-[oklch(0.15_0.01_260)]">SMS Messaging Terms &amp; Compliance</strong></p>

              <p><strong className="text-[oklch(0.15_0.01_260)]">1. Program Description:</strong> This messaging program sends appointment confirmation and reminder messages to customers who have booked an appointment with ASAP ACCOUNTING LLC through our website at <a href="https://asap-accounting.us" className="text-[oklch(0.62_0.12_75)] hover:underline">https://asap-accounting.us</a>, or via our scheduling forms, and have explicitly opted in to receive SMS notifications. Opt-in is collected via web forms with a dedicated checkbox for SMS consent. Messages include scheduling confirmations, appointment reminders, rescheduling updates, and customer support communications.</p>

              <p><strong className="text-[oklch(0.15_0.01_260)]">2. Cancellation Instructions:</strong> You can cancel the SMS service at any time. Simply text "STOP" to the same number that sent you messages. Upon sending "STOP," we will confirm your unsubscribe status via SMS. Following this confirmation, you will no longer receive SMS messages from us. To rejoin, sign up as you did initially, and we will resume sending SMS messages to you.</p>

              <p><strong className="text-[oklch(0.15_0.01_260)]">3. Support Information:</strong> If you experience issues with the messaging program, reply with the keyword "HELP" for more assistance, or reach out directly to <a href="mailto:susanr.rodriguez00@gmail.com" className="text-[oklch(0.62_0.12_75)] hover:underline">susanr.rodriguez00@gmail.com</a> or call <a href="tel:+13058777107" className="text-[oklch(0.62_0.12_75)] hover:underline">(305) 877-7107</a> during business hours.</p>

              <p><strong className="text-[oklch(0.15_0.01_260)]">4. Carrier Liability:</strong> Carriers are not liable for delayed or undelivered messages.</p>

              <p><strong className="text-[oklch(0.15_0.01_260)]">5. Message &amp; Data Rates:</strong> Message and data rates may apply for messages sent to you from us and to us from you. Message frequency varies based on your service usage and appointment schedule. For questions about your text plan or data plan, contact your wireless provider.</p>

              <p><strong className="text-[oklch(0.15_0.01_260)]">6. Supported Carriers:</strong> Our SMS program works with all major U.S. wireless carriers, including AT&amp;T, T-Mobile, Verizon, Sprint, and most regional carriers.</p>

              <p><strong className="text-[oklch(0.15_0.01_260)]">7. Age Restriction:</strong> You must be 18 years or older to participate in our SMS program.</p>

              <p><strong className="text-[oklch(0.15_0.01_260)]">8. Privacy Policy:</strong> For privacy-related inquiries, please refer to our Privacy Policy at <a href="/privacy-policy" className="text-[oklch(0.62_0.12_75)] hover:underline">https://asap-accounting.us/privacy-policy</a>.</p>

              <p>We comply with all applicable laws and regulations, including the Telephone Consumer Protection Act (TCPA) and CTIA guidelines, regarding the use of SMS communications.</p>

              <p><strong className="text-[oklch(0.15_0.01_260)]">General Terms</strong></p>

              <p>This website (the "Site") is owned and operated by ASAP ACCOUNTING LLC ("COMPANY," "we" or "us"). By using the Site, you agree to be bound by these Terms of Service and to use the Site in accordance with these Terms of Service, our Privacy Policy, and any additional terms and conditions that may apply to specific sections of the Site or to products and services available through the Site or from ASAP ACCOUNTING LLC.</p>

              <p>Accessing the Site, in any manner, whether automated or otherwise, constitutes use of the Site and your agreement to be bound by these Terms of Service.</p>

              <p>We reserve the right to change these Terms of Service or to impose new conditions on the use of the Site from time to time, in which case we will post the revised Terms of Service on this website. By continuing to use the Site after we post any such changes, you accept the Terms of Service, as modified.</p>

              <p><strong className="text-[oklch(0.15_0.01_260)]">Intellectual Property Rights</strong></p>

              <p><strong className="text-[oklch(0.15_0.01_260)]">Our Limited License to You</strong></p>

              <p>This Site and all the materials available on the Site are the property of ASAP ACCOUNTING LLC and/or our affiliates or licensors and are protected by copyright, trademark, and other intellectual property laws. The Site is provided solely for your personal non-commercial use.</p>

              <p>You may not use the Site or the materials available on the Site in a manner that constitutes an infringement of our rights or that has not been authorized by us.</p>

              <p>Unless explicitly authorized, you may not modify, copy, reproduce, republish, upload, post, transmit, translate, sell, create derivative works, exploit, or distribute in any manner or medium any material from the Site. However, you may download and/or print one copy of individual pages for your personal, non-commercial use, provided that you keep intact all copyright and other proprietary notices.</p>

              <p><strong className="text-[oklch(0.15_0.01_260)]">Your License to Us</strong></p>

              <p>By posting or submitting any material, including comments, blog entries, social media posts, photos, and videos, to us via the Site, internet groups, or other digital venues, you represent that you own the material or have obtained the necessary permissions. You grant us a royalty-free, perpetual, irrevocable, non-exclusive, worldwide license to use, modify, transmit, sell, exploit, create derivative works from, distribute, and publicly perform or display such material.</p>

              <p><strong className="text-[oklch(0.15_0.01_260)]">Disclaimers</strong></p>

              <p>Throughout the Site, we may provide links and pointers to Internet sites maintained by third parties. Our linking to such third-party sites does not imply an endorsement or sponsorship of such sites or the information, products, or services offered on or through the sites.</p>

              <p>The information, products, and services offered on or through the Site are provided "as is" and without warranties of any kind, either express or implied. To the fullest extent permissible pursuant to applicable law, we disclaim all warranties, including implied warranties of merchantability and fitness for a particular purpose.</p>

              <p>You agree at all times to indemnify and hold harmless ASAP ACCOUNTING LLC, its affiliates, and their respective officers, directors, agents, and employees from any claims, causes of action, damages, liabilities, costs, and expenses arising out of or related to your breach of any obligation, warranty, or representation under these Terms of Service.</p>

              <p><strong className="text-[oklch(0.15_0.01_260)]">Online Commerce</strong></p>

              <p>Certain sections of the Site may allow you to purchase products and services from third-party vendors. We are not responsible for the quality, accuracy, timeliness, reliability, or any other aspect of these products and services. If you make a purchase from a third party linked through the Site, the information obtained during your visit, including payment information, may be collected by both the merchant and us.</p>

              <p>Your participation in any dealings with third-party vendors is solely between you and the third party. ASAP ACCOUNTING LLC shall not be responsible for any loss or damage incurred as a result of such dealings.</p>

              <p><strong className="text-[oklch(0.15_0.01_260)]">Registration &amp; Passwords</strong></p>

              <p>To access certain features of the Site, you may be required to register and create an account. You agree to provide accurate, current, and complete information during the registration process. You are responsible for maintaining the confidentiality of your login credentials and for all activities conducted under your account.</p>

              <p>If you suspect unauthorized use of your account, notify us immediately at <a href="mailto:susanr.rodriguez00@gmail.com" className="text-[oklch(0.62_0.12_75)] hover:underline">susanr.rodriguez00@gmail.com</a>. We are not liable for any loss or damage arising from your failure to comply with this obligation.</p>

              <p><strong className="text-[oklch(0.15_0.01_260)]">Termination</strong></p>

              <p>We reserve the right to terminate or suspend your access to the Site, without notice, if we determine that you have violated these Terms of Service or engaged in conduct that we deem inappropriate or unlawful. Upon termination, you must cease all use of the Site and any content obtained from it.</p>

              <p><strong className="text-[oklch(0.15_0.01_260)]">Governing Law</strong></p>

              <p>These Terms of Service shall be governed by and construed in accordance with the laws of the state in which ASAP ACCOUNTING LLC operates. Any dispute arising under these Terms shall be resolved exclusively through binding arbitration in that jurisdiction.</p>

              <p><strong className="text-[oklch(0.15_0.01_260)]">Changes to Terms of Service</strong></p>

              <p>We may update these Terms of Service from time to time. The latest version will always be available on our website with the effective date.</p>

              <p>For any questions regarding these Terms of Service, please contact us at:</p>

              <p>
                ASAP ACCOUNTING LLC<br />
                8400 NW 33rd St<br />
                SUITE 310 PMB #3372<br />
                DORAL, FL 33122<br />
                Phone: <a href="tel:+13058777107" className="text-[oklch(0.62_0.12_75)] hover:underline">(305) 877-7107</a><br />
                Email: <a href="mailto:susanr.rodriguez00@gmail.com" className="text-[oklch(0.62_0.12_75)] hover:underline">susanr.rodriguez00@gmail.com</a><br />
                Website: <a href="https://asap-accounting.us" className="text-[oklch(0.62_0.12_75)] hover:underline">https://asap-accounting.us</a>
              </p>

              <p>By using our website and services, you consent to these Terms of Service.</p>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
