import type { Metadata } from "next"
import { LegalPage, type LegalSection } from "@/components/legal-page"
import { company } from "@/lib/company"

export const metadata: Metadata = {
  title: "Shipping & Delivery Policy",
  description: `How ${company.brandName} delivers its digital services.`,
  alternates: { canonical: "/shipping-policy" },
}

const sections: LegalSection[] = [
  {
    id: "no-physical-shipping",
    title: "No Physical Shipping",
    content: (
      <p>
        {company.brandName} provides digital IT services only. We do not sell or ship physical products, so no shipping
        charges apply and nothing is sent to a postal address.
      </p>
    ),
  },
  {
    id: "delivery-method",
    title: "How Services Are Delivered",
    content: (
      <ul>
        <li>Source code through a Git repository, such as GitHub or GitLab, or as a downloadable archive.</li>
        <li>Deployment to your hosting environment, domain or app store account.</li>
        <li>Design files, documents and reports shared by email or through a cloud link.</li>
        <li>Consultations, training and support delivered online through video calls, email or ticketing.</li>
      </ul>
    ),
  },
  {
    id: "timelines",
    title: "Delivery Timelines",
    content: (
      <>
        <p>
          Work starts within 2–5 business days after payment is confirmed and all required inputs are received.
          Delivery dates and milestones are agreed in your proposal or statement of work.
        </p>
        <p>
          Consultation bookings are confirmed by email within 24 hours of payment. If timelines change, we will tell
          you promptly by email.
        </p>
      </>
    ),
  },
  {
    id: "confirmation",
    title: "Delivery Confirmation",
    content: (
      <p>
        Every delivery is confirmed by email to the address you provided. If you have not received a deliverable by the
        agreed date, contact us at <a href={`mailto:${company.email}`}>{company.email}</a> and we will resolve it within
        2 business days.
      </p>
    ),
  },
]

export default function ShippingPolicyPage() {
  return (
    <LegalPage
      command="cat /legal/delivery.md"
      title="Shipping &"
      highlight="Delivery Policy"
      currentHref="/shipping-policy"
      sections={sections}
      intro={<p>This policy explains how and when {company.legalName} delivers the services you purchase.</p>}
    />
  )
}
