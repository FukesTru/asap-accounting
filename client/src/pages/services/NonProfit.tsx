import ServicePage from "@/components/ServicePage";
export default function NonProfit() {
  return <ServicePage
    label="Non-Profit"
    title="Non-Profit Accounting & Audit Services"
    subtitle="Experienced, personalized accounting and audit services for non-profit organizations across South Florida."
    intro="ASAP Accounting is a recognized provider of non-profit audit and accounting services. We combine an experience level that many smaller firms simply cannot match with the personal, attentive service that larger firms rarely offer. Our team has worked with a broad range of non-profit clients across many sectors, and we understand the unique compliance, reporting, and governance requirements that non-profit organizations face."
    benefits={[
      { title: "Non-Profit Audit Experience", desc: "We have served a wide range of non-profit organizations and understand the specific standards and requirements that apply to each type." },
      { title: "Personal Service", desc: "Unlike larger firms, we provide direct access to experienced professionals who know your organization and your mission." },
      { title: "Compliance-Focused", desc: "We help your organization meet all applicable reporting requirements, including Form 990 preparation and audit standards for non-profits." },
      { title: "Broad Sector Coverage", desc: "From religious organizations to health care providers to trade associations, we have served non-profits across a wide range of missions and structures." }
    ]}
    details={[
      "Our non-profit client experience includes institutionally related and private foundations, trade associations and membership organizations, professional societies, health care providers, clinics, nursing homes, and small non-profit hospitals.",
      "We also serve voluntary health and welfare organizations, arts and cultural organizations, religious organizations and churches, homeless support organizations, industry promotion boards, historical societies and museums, charitable remainder and annuity trusts, and employee benefit plans.",
      "Whether your organization requires a full audit, a review, or ongoing accounting and compliance support, we tailor our services to fit your structure, size, and governing requirements. Contact us to discuss how we can support your non-profit's financial health and accountability."
    ]}
    image="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&q=80"
  />;
}
