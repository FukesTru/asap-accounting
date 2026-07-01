import ServicePage from "@/components/ServicePage";
export default function Audit() {
  return <ServicePage
    label="Audit & Attestation"
    title="Accounting & Audit Services"
    subtitle="Independent, experienced audit and attestation services for businesses, non-profits, and associations across South Florida."
    intro="ASAP Accounting provides professional audit and attestation services backed by extensive experience across a broad range of industries. Our professionals bring significant experience in non-profit organizations, privately held businesses, captive insurance, employee benefit plans, and condominium and cooperative associations. We go beyond compliance — our experienced team actively looks for meaningful trends and opportunities to help your organization improve."
    benefits={[
      { title: "Independent & Objective", desc: "Our audits are conducted with full independence, giving stakeholders confidence in the accuracy of your financial statements." },
      { title: "Industry Experience", desc: "We bring hands-on experience across non-profits, private businesses, associations, captive insurance, and employee benefit plans." },
      { title: "Operational Insights", desc: "As part of every engagement, we identify opportunities for more efficient operations and stronger financial controls." },
      { title: "Trusted Reporting", desc: "Our attestation reports meet professional standards and are prepared with precision, clarity, and care." }
    ]}
    details={[
      "Our attestation services include financial statement audits, reviews, and compilations tailored to the specific requirements of your organization or governing body.",
      "As part of every audit engagement, our professionals seek to identify significant trends and opportunities for organizational improvement. Our insights may include recommendations for more efficient operations, a stronger financial structure, or improved accounting and administrative controls.",
      "Whether you are a business owner, a non-profit board, or an association manager, we work closely with you to ensure the process is smooth, thorough, and completed on time. Contact us to discuss your audit or attestation needs."
    ]}
    image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80"
  />;
}
