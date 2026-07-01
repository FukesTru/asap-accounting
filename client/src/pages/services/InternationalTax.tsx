import ServicePage from "@/components/ServicePage";
export default function InternationalTax() {
  return <ServicePage
    label="International Tax"
    title="U.S. & International Tax Services"
    subtitle="Specialized U.S. and international tax compliance for high net worth individuals, partnerships, and corporations operating across borders."
    intro="ASAP Accounting's U.S. and international tax practice has been serving clients since 2009. We work with high net worth individuals, partnerships, and corporations across the United States and abroad, covering the full spectrum of U.S. taxation of international transactions. Our team applies tax-advantaged and innovative solutions to complex cross-border tax issues, working to minimize U.S. tax exposure wherever the law permits. Our international clients are located in Europe, the Middle East, Africa, South and Central America, the Caribbean, and Hong Kong."
    benefits={[
      { title: "Cross-Border Expertise", desc: "Deep experience with U.S. taxation of international transactions, foreign trusts, offshore structures, and non-resident alien investments." },
      { title: "Legal Counsel Coordination", desc: "We routinely work alongside tax attorneys at leading law firms and operate under Kovel letters when required." },
      { title: "FIRPTA & Real Property", desc: "We help non-resident aliens navigate the Foreign Investment in Real Property Tax Act (FIRPTA) for direct and structured U.S. real estate investments." },
      { title: "Multilingual Service", desc: "Our team communicates in English and Spanish, and we serve clients across multiple time zones using current communications technology." }
    ]}
    details={[
      "Our international tax services include U.S. tax compliance for foreign trust beneficiaries and fiduciaries, auditing of offshore captive insurance companies and trusts, and voluntary compliance matters for clients with prior unreported foreign accounts or assets.",
      "We provide forensic accounting services and return preparation for clients in voluntary disclosure situations, and we have extensive experience with the intricacies and sensitive nature of this work. We routinely work under Kovel letters and understand the legal and procedural requirements involved.",
      "For non-resident aliens investing in U.S. real property, we provide full FIRPTA compliance guidance whether the investment is held directly or through a planned structure. We also have significant experience with the Swiss federal, cantonal, and city tax systems as they relate to U.S. reporting requirements for U.S. taxpayers domiciled or working in Switzerland.",
      "If your situation involves cross-border tax complexity, contact us to schedule a confidential consultation with our international tax team."
    ]}
    image="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&q=80"
  />;
}
