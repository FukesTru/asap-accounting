import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function PrivacyPolicy() {
  const containerRef = useScrollReveal();

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="section-dark py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 60px, oklch(0.62 0.12 75) 60px, oklch(0.62 0.12 75) 61px)', backgroundSize: '100% 61px'}} />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl text-white leading-[1.1] font-serif reveal">
              Privacy Policy
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

              <p><strong className="text-[oklch(0.15_0.01_260)]">IMPORTANT NOTICE REGARDING TEXT MESSAGING DATA</strong></p>

              <p>ASAP ACCOUNTING LLC ("we," "us," or "our") DOES NOT share customer opt-in information, including phone numbers and consent records, with any affiliates or third parties for marketing, promotional, or any other purposes unrelated to providing our direct services. All text messaging originator opt-in data is kept strictly confidential.</p>

              <p><strong className="text-[oklch(0.15_0.01_260)]">1. Information We Collect</strong></p>

              <p>We collect the following types of information:</p>

              <p><strong className="text-[oklch(0.15_0.01_260)]">Personal Information:</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Name, email address, phone number, physical address</li>
                <li>Payment information when you make a purchase or request a quote</li>
                <li>Opt-in records and timestamps for all communication channels, including SMS and email</li>
              </ul>

              <p><strong className="text-[oklch(0.15_0.01_260)]">Non-Personal Information:</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>IP address, browser type, device information</li>
                <li>Website usage patterns and analytics</li>
                <li>Cookies and similar technologies</li>
              </ul>

              <p><strong className="text-[oklch(0.15_0.01_260)]">Customer Communication:</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Records of inquiries and service requests</li>
                <li>Appointment details and preferences</li>
                <li>Service history and feedback</li>
              </ul>

              <p><strong className="text-[oklch(0.15_0.01_260)]">2. How We Use Your Information</strong></p>

              <p>We use collected data for:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Providing and improving our services</li>
                <li>Processing transactions and payments</li>
                <li>Communicating with you about your inquiries, appointments, and promotions</li>
                <li>Enhancing website functionality and user experience</li>
                <li>Ensuring security and fraud prevention</li>
                <li>Maintaining records of your communication preferences and consent</li>
              </ul>

              <p><strong className="text-[oklch(0.15_0.01_260)]">3. SMS Messaging &amp; Compliance</strong></p>

              <p><strong className="text-[oklch(0.15_0.01_260)]">Text Message Program Terms &amp; Conditions</strong></p>

              <p>By opting into our SMS messaging services, you agree to receive text messages related to our services, including appointment reminders, customer support, and important updates.</p>

              <p><strong className="text-[oklch(0.15_0.01_260)]">Opt-In &amp; Consent:</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>You will only receive messages if you have explicitly opted in</li>
                <li>We maintain timestamped records of all opt-in actions</li>
                <li>We comply with the Telephone Consumer Protection Act (TCPA) and all applicable laws</li>
              </ul>

              <p><strong className="text-[oklch(0.15_0.01_260)]">Opt-Out Instructions:</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>You can cancel SMS notifications at any time by replying "STOP"</li>
                <li>You will receive a final confirmation message, and no further messages will be sent unless you re-opt in</li>
                <li>All opt-out requests are processed immediately.</li>
              </ul>

              <p><strong className="text-[oklch(0.15_0.01_260)]">Message Frequency &amp; Content:</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Message frequency varies based on your interactions with our business</li>
                <li>Messages will be directly related to the services you have requested</li>
                <li>We do not send promotional content without specific consent</li>
              </ul>

              <p><strong className="text-[oklch(0.15_0.01_260)]">Help &amp; Support:</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Reply "HELP" for assistance or contact us at <a href="mailto:susanr.rodriguez00@gmail.com" className="text-[oklch(0.62_0.12_75)] hover:underline">susanr.rodriguez00@gmail.com</a></li>
                <li>Customer support is available during regular business hours</li>
              </ul>

              <p><strong className="text-[oklch(0.15_0.01_260)]">Carrier Information:</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Standard message and data rates may apply</li>
                <li>Carriers are not liable for delayed or undelivered messages</li>
                <li>Supported carriers include AT&amp;T, Verizon, T-Mobile, Sprint, and most regional carriers</li>
              </ul>

              <p><strong className="text-[oklch(0.15_0.01_260)]">SMS Data Protection Statement</strong></p>

              <p>No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. Information sharing to subcontractors in support services, such as customer service, is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.</p>

              <p>We implement strict data protection measures to safeguard your SMS opt-in information and consent records.</p>

              <p><strong className="text-[oklch(0.15_0.01_260)]">4. Information Sharing &amp; Disclosure</strong></p>

              <p>We do not sell, rent, or trade personal information. We may share information with:</p>

              <p><strong className="text-[oklch(0.15_0.01_260)]">Service Providers:</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Third-party vendors who assist in our operations, such as payment processing and appointment scheduling</li>
                <li>SMS aggregators and providers solely for the purpose of delivering messages you've consented to receive</li>
                <li>All service providers are contractually obligated to maintain confidentiality and security</li>
              </ul>

              <p><strong className="text-[oklch(0.15_0.01_260)]">Legal Compliance:</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>If required by law, legal process, or to protect our rights</li>
                <li>In response to valid law enforcement requests or court orders</li>
              </ul>

              <p><strong className="text-[oklch(0.15_0.01_260)]">Business Transfers:</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>In case of mergers, acquisitions, or sale of assets</li>
                <li>In such cases, your data remains protected under the terms of this policy</li>
              </ul>

              <p>All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties, excluding aggregators and providers of the Text Message services.</p>

              <p><strong className="text-[oklch(0.15_0.01_260)]">5. Data Security</strong></p>

              <p>We implement and maintain reasonable security measures to protect your personal information:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Secure access controls and authentication mechanisms</li>
                <li>Regular security assessments and updates</li>
                <li>Employee training on data protection</li>
                <li>Breach notification protocols in accordance with applicable laws</li>
                <li>Secure backup systems and disaster recovery procedures</li>
              </ul>

              <p>Despite these measures, no method of transmission over the Internet or electronic storage is 100% secure. We strive to use commercially acceptable means to protect your personal information but cannot guarantee absolute security.</p>

              <p><strong className="text-[oklch(0.15_0.01_260)]">6. Cookies &amp; Tracking Technologies</strong></p>

              <p>We use cookies and similar technologies to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Analyze site traffic and user behavior</li>
                <li>Remember your preferences</li>
                <li>Improve website functionality and user experience</li>
                <li>Measure the effectiveness of our services</li>
              </ul>

              <p>You may control cookies through your browser settings. Disabling cookies may limit your ability to use certain features of our website.</p>

              <p><strong className="text-[oklch(0.15_0.01_260)]">7. Your Rights &amp; Choices</strong></p>

              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Access, update, or delete your personal information</li>
                <li>Opt-out of marketing emails by clicking "unsubscribe" in our emails</li>
                <li>Opt-out of SMS messages by replying "STOP"</li>
                <li>Request information on how we process your data</li>
                <li>Withdraw consent at any time for future communications</li>
                <li>Lodge a complaint with a supervisory authority if you believe your rights have been violated</li>
              </ul>

              <p>To exercise these rights, please contact us using the information in Section 10.</p>

              <p><strong className="text-[oklch(0.15_0.01_260)]">8. Third-Party Links</strong></p>

              <p>Our website may contain links to third-party websites. We are not responsible for their privacy practices and encourage you to review their policies. This privacy policy applies only to information collected by ASAP ACCOUNTING LLC.</p>

              <p><strong className="text-[oklch(0.15_0.01_260)]">9. Changes to This Privacy Policy</strong></p>

              <p>We may update this policy periodically. The latest version will always be available on our website with the effective date. For significant changes, we will notify you by email or through a notice on our website.</p>

              <p><strong className="text-[oklch(0.15_0.01_260)]">10. Contact Us</strong></p>

              <p>If you have questions about this Privacy Policy or how your information is handled, contact us at:</p>

              <p>
                ASAP ACCOUNTING LLC<br />
                8400 NW 33rd St<br />
                SUITE 310 PMB #3372<br />
                DORAL, FL 33122<br />
                Phone: <a href="tel:+13058777107" className="text-[oklch(0.62_0.12_75)] hover:underline">(305) 877-7107</a><br />
                Email: <a href="mailto:susanr.rodriguez00@gmail.com" className="text-[oklch(0.62_0.12_75)] hover:underline">susanr.rodriguez00@gmail.com</a><br />
                Website: <a href="https://asap-accounting.us" className="text-[oklch(0.62_0.12_75)] hover:underline">https://asap-accounting.us</a>
              </p>

              <p>By using our website and services, you consent to this Privacy Policy.</p>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
