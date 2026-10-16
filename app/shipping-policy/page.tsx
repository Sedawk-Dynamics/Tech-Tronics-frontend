import type { Metadata } from "next"
import Link from "next/link"
import { LegalPage, type LegalSection } from "@/components/legal-page"
import { company } from "@/lib/company"

export const metadata: Metadata = {
  title: "Shipping & Exchange Policy",
  description: `How ${company.brandName} delivers digital services and handles exchange and revision requests.`,
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
  {
    id: "exchanges",
    title: "Exchanges & Revisions",
    content: (
      <>
        <p>
          As we provide digital services, physical product exchanges do not apply. If a deliverable does not match
          the agreed scope, contact us with your project reference and a description of the issue so we can review it.
          Corrections and revisions are handled according to your proposal or service agreement.
        </p>
        <p>
          Requests to change services or add work beyond the agreed scope are reviewed separately. Any changes to
          pricing or delivery timelines will be agreed with you before additional work begins.
        </p>
      </>
    ),
  },
  {
    id: "request-support",
    title: "How to Request Help",
    content: (
      <>
        <p>
          Email <a href={`mailto:${company.email}`}>{company.email}</a> or call{" "}
          <a href={`tel:+91${company.phone}`}>{company.phone}</a> with your order or project reference,
          the delivery date and details of your request. Include screenshots or supporting files where relevant.
        </p>
        <p>
          For cancellations and refund eligibility, please see our{" "}
          <Link href="/refund-policy">Refund &amp; Cancellation Policy</Link>.
        </p>
      </>
    ),
  },
]

export default function ShippingPolicyPage() {
  return (
    <LegalPage
      command="cat /legal/shipping-and-exchange.md"
      title="Shipping &"
      highlight="Exchange Policy"
      currentHref="/shipping-policy"
      sections={sections}
      intro={<p>This policy explains how and when {company.legalName} delivers the services you purchase, and how to request exchanges, revisions or delivery support.</p>}
    />
  )
}
