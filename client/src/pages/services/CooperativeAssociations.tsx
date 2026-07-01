import ServicePage from "@/components/ServicePage";
export default function CooperativeAssociations() {
  return <ServicePage
    label="Associations"
    title="Cooperative & Condominium Association Services"
    subtitle="Specialized accounting, audit, and tax services for condominium associations, homeowners associations, and cooperative associations throughout South Florida."
    intro="ASAP Accounting has over 30 years of experience auditing cooperatives and condominium associations of all sizes. We understand the specific financial, legal, and reporting obligations that govern community associations in Florida, and we provide the full range of accounting and compliance services these organizations require. Our team brings both the technical depth and the personal attention that association boards and managers depend on."
    benefits={[
      { title: "30+ Years of Association Experience", desc: "Decades of hands-on experience auditing cooperatives, condominiums, and homeowners associations of all sizes across South Florida." },
      { title: "Full-Service Accounting", desc: "We offer audits, reviews, compilations, turnover audits, and tax return preparation — everything your association needs in one place." },
      { title: "Florida Law Compliance", desc: "We are well-versed in the Florida Statutes governing community associations, including the Condominium Act, the Cooperative Act, and the Florida Homeowners' Association Act." },
      { title: "Turnover Audit Expertise", desc: "We develop and conduct turnover audits to protect incoming boards and ensure accurate financial accountability during transitions." }
    ]}
    details={[
      "Our services for condominium, homeowners, and cooperative association clients include financial statement audits, reviews, compilations, turnover audit development, and tax return preparation.",
      "We are familiar with the full body of Florida law governing community associations, including Chapter 718 (The Condominium Act), Chapter 719 (The Cooperative Act), Chapter 720 (Florida Homeowners' Associations), Chapter 617 (The Florida Not-For-Profit Corporations Act), and Chapter 607 (The Florida Corporations Act).",
      "Whether your association is transitioning from developer control, preparing for an annual audit, or needs ongoing accounting support, our team is ready to assist. Contact us to schedule a consultation with our association accounting specialists."
    ]}
    image="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80"
  />;
}
