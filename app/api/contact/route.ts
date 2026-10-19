const formKey = "2417f7b65e2ad073abd1d91f385ee098"
const crmUrl = `https://crm.techtronics.ai/forms/wtl/${formKey}`

export async function POST(request: Request) {
  const origin = request.headers.get("origin")
  if (origin && origin !== new URL(request.url).origin) {
    return Response.json({ success: false }, { status: 403 })
  }
  try {
    const data = await request.formData()
    const payload = new URLSearchParams()
    for (const field of ["name", "email", "phonenumber", "company"]) {
      const value = data.get(field)
      if (typeof value !== "string" || !value.trim() || value.length > 254) {
        return Response.json({ success: false }, { status: 400 })
      }
      payload.set(field, value.trim())
    }
    const message = data.get("message") ?? ""
    if (typeof message !== "string" || message.length > 5000 ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.get("email")!) ||
        data.get("accept_terms_and_conditions") !== "on") {
      return Response.json({ success: false }, { status: 400 })
    }
    // The existing CRM form labels its city field as Message.
    payload.set("city", message.trim())
    payload.set("accept_terms_and_conditions", "on")
    payload.set("key", formKey)

    // Use a fresh CRM session and matching CSRF token for each submission.
    const session = await fetch(crmUrl, { cache: "no-store", signal: AbortSignal.timeout(15000) })
    if (!session.ok) throw new Error("CRM unavailable")
    const html = await session.text()
    const token = html.match(/name="csrf_token_name"\s+value="([a-f0-9]+)"/i)?.[1]
    const cookies = session.headers.getSetCookie().map(cookie => cookie.split(";")[0]).join("; ")
    if (!token || !cookies) throw new Error("CRM session unavailable")
    payload.set("csrf_token_name", token)
    const response = await fetch(crmUrl, {
      method: "POST",
      headers: { Cookie: cookies, "X-Requested-With": "XMLHttpRequest" },
      body: payload,
      cache: "no-store",
      signal: AbortSignal.timeout(15000),
      redirect: "error",
    })
    if (!response.ok) throw new Error("CRM rejected submission")
    const result = await response.json()
    if (result.success !== true) throw new Error("CRM did not confirm submission")
    return Response.json({ success: true })
  } catch {
    return Response.json({ success: false }, { status: 502 })
  }
}
