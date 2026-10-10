// Single source of truth for business details shown on legal & contact pages.
// Razorpay verifies these against your KYC documents — they must match your
// registered business name, address and support contacts exactly.
export const company = {
  brandName: "Techtronics",
  legalName: "Techtronics International",
  website: "https://tech-tronics.ai",
  email: "info@tech-tronics.ai",
  phone: "+1 (888) 999-0000",
  address: "New Jersey, 07023, USA",
  supportHours: "Monday – Friday, 9:00 AM – 6:00 PM",
  governingLaw: "the State of New Jersey, USA",
  lastUpdated: "October 9, 2026",
}

export const legalLinks = [
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Refund & Cancellation", href: "/refund-policy" },
  { label: "Shipping & Delivery", href: "/shipping-policy" },
]
