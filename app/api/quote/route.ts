import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const recipient = 'madis.kalasnikov@gmail.com'
const services = new Set([
  'Tuleohutusülevaatus',
  'Dokumentatsiooni koostamine',
  'Evakuatsiooniõppus või koolitus',
  'Tulekustutite kontroll',
  'Muu nõustamine',
])

function clean(value: unknown, maxLength: number) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : ''
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;',
  })[character] ?? character)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const website = clean(body.website, 200)
    if (website) return NextResponse.json({ ok: true })

    const name = clean(body.name, 100)
    const phone = clean(body.phone, 40)
    const email = clean(body.email, 254)
    const service = clean(body.service, 100)
    const message = clean(body.message, 3000)

    if (!name || !phone || !email || !message || !services.has(service)) {
      return NextResponse.json({ error: 'Palun kontrolli kõiki vormi välju.' }, { status: 400 })
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Palun sisesta korrektne e-posti aadress.' }, { status: 400 })
    }
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: 'E-posti saatmine ei ole veel seadistatud.' }, { status: 503 })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    const { error } = await resend.emails.send({
      from: 'Tuleohutus Ekspert <onboarding@resend.dev>',
      to: recipient,
      replyTo: email,
      subject: `Uus hinnapäring: ${service}`,
      html: `<h2>Uus hinnapäring veebilehelt</h2><p><strong>Nimi:</strong> ${escapeHtml(name)}</p><p><strong>Telefon:</strong> ${escapeHtml(phone)}</p><p><strong>E-post:</strong> ${escapeHtml(email)}</p><p><strong>Teenus:</strong> ${escapeHtml(service)}</p><p><strong>Objekt ja soov:</strong></p><p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>`,
    })

    if (error) return NextResponse.json({ error: 'Kirja saatmine ebaõnnestus. Palun proovi uuesti.' }, { status: 502 })
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Päringut ei õnnestunud töödelda.' }, { status: 400 })
  }
}
