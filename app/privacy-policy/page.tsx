import type { Metadata } from "next"
import { LegalPage, type LegalSection } from "@/components/legal-page"
import { company } from "@/lib/company"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${company.brandName} collects, uses and protects your personal information.`,
  alternates: { canonical: "/privacy-policy" },
}

const sections: LegalSection[] = [
  {
    id: "information-we-collect",
    title: "Information We Collect",
    content: (
      <>
        <p>We collect only the information needed to respond to you and deliver our services:</p>
        <ul>
          <li>
            <strong>Information you give us</strong> — name, email address, phone number, company name, and project
            details you submit through our contact, consultation or newsletter forms, or share by email or phone.
          </li>
          <li>
            <strong>Billing information</strong> — billing name, address and tax details (such as an EIN) needed to
            issue invoices.
          </li>
          <li>
            <strong>Usage information</strong> — browser type, device, IP address, pages visited and similar technical
            data collected automatically when you browse the Website.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "payments",
    title: "Payment Information",
    content: (
      <p>
        Online payments are processed by Razorpay, a PCI-DSS compliant payment gateway. Your card, bank account or
        wallet details are entered directly with Razorpay and are never stored on our servers. We only receive
        confirmation of the payment, the amount, and a transaction reference. Razorpay&apos;s handling of your data is
        governed by its own privacy policy.
      </p>
    ),
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    content: (
      <ul>
        <li>To respond to enquiries and provide quotations.</li>
        <li>To deliver, support and invoice the services you purchase.</li>
        <li>To process payments and prevent fraud.</li>
        <li>To send newsletters or updates, only if you have opted in. You can unsubscribe at any time.</li>
        <li>To improve the Website and our services.</li>
        <li>To comply with legal, tax and accounting obligations.</li>
      </ul>
    ),
  },
  {
    id: "sharing",
    title: "Sharing of Information",
    content: (
      <>
        <p>We do not sell or rent your personal information. We share it only with:</p>
        <ul>
          <li>Service providers who help us operate, such as hosting, email, analytics and payment processing (Razorpay).</li>
          <li>Professional advisers such as accountants and lawyers, where necessary.</li>
          <li>Government or law enforcement authorities when required by law.</li>
        </ul>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies",
    content: (
      <p>
        The Website uses cookies and local storage to remember preferences, such as your light or dark theme, and to
        understand how visitors use the site. You can block or delete cookies in your browser settings; some features
        may not work properly if you do.
      </p>
    ),
  },
  {
    id: "security",
    title: "Data Security",
    content: (
      <p>
        We use reasonable technical and organisational safeguards — including HTTPS encryption and access controls — to
        protect your information. No method of transmission over the internet is completely secure, but we work to
        protect your data and will notify you as required by law if a breach affects you.
      </p>
    ),
  },
  {
    id: "retention",
    title: "Data Retention",
    content: (
      <p>
        We keep personal information only as long as needed for the purposes described above, or as required by law
        (for example, tax and accounting records), and then delete or anonymise it.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "Your Rights",
    content: (
      <p>
        You may request access to, correction of, or deletion of your personal information, or withdraw consent to
        marketing communications, by emailing <a href={`mailto:${company.email}`}>{company.email}</a>. We will respond
        within 30 days.
      </p>
    ),
  },
  {
    id: "children",
    title: "Children's Privacy",
    content: <p>Our services are not directed at anyone under 18, and we do not knowingly collect their data.</p>,
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time. The &quot;Last updated&quot; date above shows the latest
        revision.
      </p>
    ),
  },
]

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      command="cat /legal/privacy.md"
      title="Privacy"
      highlight="Policy"
      currentHref="/privacy-policy"
      sections={sections}
      intro={
        <p>
          {company.legalName} (&quot;{company.brandName}&quot;, &quot;we&quot;, &quot;us&quot;) respects your privacy. This
          policy explains what personal information we collect when you visit {company.website} or use our services, how
          we use it, and the choices you have.
        </p>
      }
    />
  )
}
