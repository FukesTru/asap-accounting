import { Link } from "wouter";
import PageHero from "@/components/PageHero";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "What services does ASAP Accounting offer?", a: "We provide bookkeeping, tax preparation, tax planning, payroll services, financial planning, retirement and wealth planning, and life insurance advisory services for individuals and businesses." },
  { q: "Do you serve clients outside of Doral?", a: "Yes. We serve clients throughout Miami-Dade County, Broward County, and all of South Florida. We also offer virtual consultations for clients anywhere in Florida." },
  { q: "Where is ASAP Accounting located?", a: "We are based in Doral, FL 33178, and serve clients throughout Miami-Dade County, Broward County, and all of South Florida. We also offer virtual consultations for clients who prefer remote meetings." },
  { q: "How do I schedule a consultation?", a: "You can book a free consultation through our online scheduling system, call us at (305) 877-7107, or email susan@asap-accounting.us. We offer both in-person and virtual appointments." },
  { q: "Is the initial consultation free?", a: "Yes. Your first consultation is completely free. We will discuss your needs, answer your questions, and recommend the best services for your situation." },
  { q: "What types of businesses do you work with?", a: "We work with small businesses, startups, sole proprietors, LLCs, S-Corps, and individuals across a wide range of industries. Our clients include restaurants, retail stores, service businesses, freelancers, and more." },
  { q: "Can you help with IRS issues or back taxes?", a: "Yes. We can assist with tax resolution, amended returns, back tax filings, and communication with the IRS on your behalf." },
  { q: "Do you offer virtual or remote services?", a: "Absolutely. We offer secure virtual consultations and can handle all of your accounting and tax needs remotely. Many of our clients work with us entirely online." },
  { q: "What accounting software do you use?", a: "We work with QuickBooks, Xero, and other major accounting platforms. We can also help you choose and set up the right software for your business." },
  { q: "Do you have an AI assistant available?", a: "Yes. Our AI assistant is available 24/7 to answer common questions about our services, scheduling, and general accounting inquiries. For personalized financial advice, we recommend booking a consultation with Susan directly." },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[oklch(0.88_0.01_80)]">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left">
        <span className="text-[oklch(0.15_0.01_260)] font-medium pr-4">{q}</span>
        <ChevronDown className={`w-5 h-5 text-[oklch(0.62_0.12_75)] shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <p className="pb-5 text-[oklch(0.40_0.01_260)] leading-relaxed">{a}</p>}
    </div>
  );
}

export default function FAQ() {
  return (
    <div>
      <PageHero label="FAQ" title="Frequently Asked Questions" subtitle="Find answers to common questions about our services, process, and how we can help you." />
      <section className="section-cream py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, i) => <FaqItem key={i} q={faq.q} a={faq.a} />)}
          </div>
          <div className="text-center mt-12">
            <p className="text-[oklch(0.50_0.01_260)] mb-4">Still have questions?</p>
            <Link href="/contact" className="btn-gold rounded-sm inline-block">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
