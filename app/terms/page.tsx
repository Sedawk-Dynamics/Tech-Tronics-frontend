import type { Metadata } from "next"
import Link from "next/link"
import { LegalPage, type LegalSection } from "@/components/legal-page"
import { company } from "@/lib/company"

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and conditions governing the use of ${company.brandName} services and website.`,
  alternates: { canonical: "/terms" },
}

const sections: LegalSection[] = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    content: (
      <p>
        By accessing {company.website} (the &quot;Website&quot;) or purchasing any service from {company.legalName}{" "}
        (&quot;{company.brandName}&quot;, &quot;we&quot;, &quot;us&quot; or &quot;our&quot;), you agree to be bound by these
        Terms &amp; Conditions. If you do not agree, please do not use the Website or our services.
      </p>
    ),
  },
  {
    id: "services",
    title: "Our Services",
    content: (
      <>
        <p>
          We provide IT and technology services including web development, software development, UI/UX design,
          artificial intelligence solutions, DevOps, CMS development, quality assurance, IT support, project
          management and business analysis.
        </p>
        <p>
          The exact scope, deliverables, timelines and fees for each engagement are set out in a written proposal,
          quotation, invoice or statement of work (&quot;Agreement&quot;) shared with you before work begins. Where an
          Agreement conflicts with these Terms, the Agreement prevails.
        </p>
      </>
    ),
  },
  {
    id: "eligibility",
    title: "Eligibility & Account Information",
    content: (
      <p>
        You must be at least 18 years old and legally capable of entering into a binding contract to purchase our
        services. You agree to provide accurate, current and complete information, and you are responsible for
        keeping any login credentials we provide confidential.
      </p>
    ),
  },
  {
    id: "pricing-payments",
    title: "Pricing & Payments",
    content: (
      <>
        <p>
          All prices are quoted in US Dollars (USD) unless the proposal or invoice states otherwise, and are exclusive
          of applicable taxes (such as sales tax) unless stated otherwise. Taxes will be added at the prevailing rate.
        </p>
        <p>
          Payments made online are processed securely through our payment partner, Razorpay, using credit and debit
          cards, ACH bank transfers, digital wallets or other methods they support. We do not store your card or bank details on our servers.
          Your use of the payment gateway is also subject to Razorpay&apos;s terms and privacy policy.
        </p>
        <p>
          Unless the Agreement says otherwise, invoices are payable within 7 days of issue. We may pause work on an
          engagement while payment is overdue.
        </p>
      </>
    ),
  },
  {
    id: "client-responsibilities",
    title: "Client Responsibilities",
    content: (
      <ul>
        <li>Provide timely feedback, approvals, content, credentials and access needed to deliver the work.</li>
        <li>Ensure that any material you supply does not infringe the rights of any third party.</li>
        <li>Delays caused by missing inputs may extend timelines and, where significant, may incur additional fees.</li>
      </ul>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    content: (
      <>
        <p>
          On receipt of full payment, ownership of the final custom deliverables created specifically for you
          transfers to you, unless the Agreement states otherwise.
        </p>
        <p>
          We retain ownership of our pre-existing tools, libraries, frameworks, know-how and generic components, and
          grant you a non-exclusive, perpetual licence to use them as part of the deliverables. Third-party and
          open-source components remain subject to their own licences.
        </p>
        <p>
          All content on this Website — including text, graphics, logos and code — is owned by or licensed to{" "}
          {company.legalName} and may not be copied or reused without our written permission.
        </p>
      </>
    ),
  },
  {
    id: "confidentiality",
    title: "Confidentiality",
    content: (
      <p>
        Each party agrees to keep the other&apos;s confidential information private and to use it only to perform the
        engagement. With your permission, we may mention you as a client or showcase non-confidential work in our
        portfolio.
      </p>
    ),
  },
  {
    id: "cancellation-refunds",
    title: "Cancellation & Refunds",
    content: (
      <p>
        Cancellations and refunds are governed by our{" "}
        <Link href="/refund-policy">Refund &amp; Cancellation Policy</Link>, which forms part of these Terms.
      </p>
    ),
  },
  {
    id: "warranties",
    title: "Warranties & Disclaimer",
    content: (
      <p>
        We perform our services with reasonable skill and care, and we fix defects in our deliverables that are
        reported within the support period stated in the Agreement. Except as expressly stated, the Website and
        services are provided &quot;as is&quot;, and we do not guarantee that they will be uninterrupted or error-free or
        that they will achieve any specific business result.
      </p>
    ),
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    content: (
      <p>
        To the maximum extent permitted by law, {company.brandName} shall not be liable for any indirect, incidental,
        special or consequential losses, including loss of profits, data or goodwill. Our total liability arising out
        of any engagement shall not exceed the amount you paid us for that engagement in the 12 months preceding the
        claim.
      </p>
    ),
  },
  {
    id: "third-party-links",
    title: "Third-Party Links",
    content: (
      <p>
        The Website may link to third-party websites. We are not responsible for their content, policies or practices.
      </p>
    ),
  },
  {
    id: "termination",
    title: "Termination",
    content: (
      <p>
        Either party may terminate an engagement by written notice if the other party materially breaches these Terms
        or the Agreement and fails to remedy the breach within 15 days. You will pay for all work completed up to the
        termination date.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "Governing Law & Disputes",
    content: (
      <p>
        These Terms are governed by the laws of {company.governingLaw}. The parties will first try to resolve any
        dispute amicably. Disputes that cannot be resolved this way shall be subject to the exclusive jurisdiction of
        the competent courts of {company.governingLaw}.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to These Terms",
    content: (
      <p>
        We may update these Terms from time to time. The &quot;Last updated&quot; date above shows when they were last
        revised. Continued use of the Website or services after changes means you accept the updated Terms.
      </p>
    ),
  },
]

export default function TermsPage() {
  return (
    <LegalPage
      command="cat /legal/terms.md"
      title="Terms &"
      highlight="Conditions"
      currentHref="/terms"
      sections={sections}
      intro={
        <p>
          Please read these Terms &amp; Conditions carefully before using our website or engaging our services. They
          explain the rules that apply to every project we deliver and every payment we receive.
        </p>
      }
    />
  )
}
