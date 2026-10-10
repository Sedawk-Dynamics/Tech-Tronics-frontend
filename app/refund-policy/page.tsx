import type { Metadata } from "next"
import { LegalPage, type LegalSection } from "@/components/legal-page"
import { company } from "@/lib/company"

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description: `Cancellation and refund policy for ${company.brandName} services.`,
  alternates: { canonical: "/refund-policy" },
}

const sections: LegalSection[] = [
  {
    id: "cancellation",
    title: "Cancellation by the Client",
    content: (
      <ul>
        <li>
          <strong>Before work starts:</strong> you may cancel within 48 hours of payment, before any work has begun,
          for a full refund.
        </li>
        <li>
          <strong>After work starts:</strong> you may cancel at any time by emailing{" "}
          <a href={`mailto:${company.email}`}>{company.email}</a>. You will be charged for the work completed and
          the milestones delivered up to the cancellation date, and any remaining balance will be refunded.
        </li>
        <li>
          <strong>Subscriptions and retainers</strong> (such as support or maintenance plans) can be cancelled at any
          time and will not renew for the next billing cycle. The current cycle is not refunded on a pro-rata basis.
        </li>
      </ul>
    ),
  },
  {
    id: "refund-eligibility",
    title: "Refund Eligibility",
    content: (
      <>
        <p>You are eligible for a full or partial refund if:</p>
        <ul>
          <li>You were charged more than once for the same invoice, or were charged an incorrect amount.</li>
          <li>We are unable to start or deliver the agreed services.</li>
          <li>You cancel within the window described above.</li>
        </ul>
      </>
    ),
  },
  {
    id: "non-refundable",
    title: "Non-Refundable Items",
    content: (
      <ul>
        <li>Milestones or deliverables that you have already received and approved.</li>
        <li>
          Third-party costs paid on your behalf, such as domains, hosting, software licences, stock assets or API
          credits.
        </li>
        <li>Consultation sessions that have already been held.</li>
      </ul>
    ),
  },
  {
    id: "process",
    title: "How to Request a Refund",
    content: (
      <p>
        Email <a href={`mailto:${company.email}`}>{company.email}</a> with your invoice number, the transaction ID and
        the reason for your request. We will acknowledge it within 2 business days and tell you our decision within 7
        business days.
      </p>
    ),
  },
  {
    id: "timeline",
    title: "Refund Timeline",
    content: (
      <p>
        Approved refunds are issued to the original payment method through Razorpay within 5–7 business days of
        approval. The time for the amount to appear in your account depends on your bank or card issuer.
      </p>
    ),
  },
  {
    id: "cancellation-by-us",
    title: "Cancellation by Us",
    content: (
      <p>
        If we have to cancel an engagement for reasons within our control, we will refund every amount paid for work
        that has not been delivered.
      </p>
    ),
  },
]

export default function RefundPolicyPage() {
  return (
    <LegalPage
      command="cat /legal/refunds.md"
      title="Refund &"
      highlight="Cancellation Policy"
      currentHref="/refund-policy"
      sections={sections}
      intro={
        <p>
          We want you to be confident when you pay {company.legalName}. This policy explains when you can cancel a
          service, when you are eligible for a refund, and how long refunds take.
        </p>
      }
    />
  )
}
