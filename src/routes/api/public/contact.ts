import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'

const GATEWAY_URL = 'https://connector-gateway.lovable.dev/resend'

const ContactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  phone: z.string().trim().min(7).max(30),
  city: z.string().trim().min(1).max(80),
  message: z.string().trim().min(1).max(2000),
})

const TO_EMAIL = 'info@bonanza-handyman.com'
const FROM_EMAIL = 'Bonanza Website <quotes@bonanza-handyman.com>'

function esc(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!))
}

export const Route = createFileRoute('/api/public/contact')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY
        const RESEND_API_KEY = process.env.RESEND_API_KEY
        if (!LOVABLE_API_KEY) return new Response('LOVABLE_API_KEY not configured', { status: 500 })
        if (!RESEND_API_KEY) return new Response('RESEND_API_KEY not configured', { status: 500 })

        let json: unknown
        try {
          json = await request.json()
        } catch {
          return new Response('Invalid JSON', { status: 400 })
        }
        const parsed = ContactSchema.safeParse(json)
        if (!parsed.success) {
          return Response.json({ error: 'Invalid input', issues: parsed.error.issues }, { status: 400 })
        }
        const { name, phone, city, message } = parsed.data

        const html = `
          <h2>New quote request — Bonanza Handyman</h2>
          <p><strong>Name:</strong> ${esc(name)}</p>
          <p><strong>Phone:</strong> <a href="tel:${esc(phone)}">${esc(phone)}</a></p>
          <p><strong>City:</strong> ${esc(city)}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space:pre-wrap">${esc(message)}</p>
        `

        const res = await fetch(`${GATEWAY_URL}/emails`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${LOVABLE_API_KEY}`,
            'X-Connection-Api-Key': RESEND_API_KEY,
          },
          body: JSON.stringify({
            from: FROM_EMAIL,
            to: [TO_EMAIL],
            reply_to: undefined,
            subject: `New quote request from ${name} (${city})`,
            html,
          }),
        })

        if (!res.ok) {
          const errBody = await res.text()
          console.error('Resend send failed', res.status, errBody)
          return new Response('Failed to send', { status: 502 })
        }

        return Response.json({ ok: true })
      },
    },
  },
})
