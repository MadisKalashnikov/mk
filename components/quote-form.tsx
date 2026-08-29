'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function QuoteForm() {
  const [sent, setSent] = useState(false)

  if (sent) {
    return (
      <div className="flex min-h-96 flex-col items-start justify-center gap-4 rounded-2xl bg-secondary p-8" role="status">
        <CheckCircle2 className="size-10 text-primary" aria-hidden="true" />
        <h3 className="text-2xl font-bold">Näidispäring on vastu võetud</h3>
        <p className="max-w-md leading-relaxed text-muted-foreground">See on veebilehe demoversioon. Päris kontaktandmete lisamisel saab vormi ühendada e-posti või kliendihaldusega.</p>
        <Button variant="outline" onClick={() => setSent(false)}>Saada uus päring</Button>
      </div>
    )
  }

  return (
    <form className="rounded-2xl bg-card p-6 shadow-xl shadow-foreground/5 sm:p-8" onSubmit={(event) => { event.preventDefault(); setSent(true) }}>
      <div className="flex flex-col gap-6">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-primary">hinnapäring</p>
          <h3 className="mt-2 text-2xl font-bold">Kirjelda oma vajadust</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Vastame esimesel võimalusel ja täpsustame töö mahu.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm font-semibold">Nimi<input required name="name" autoComplete="name" className="h-11 rounded-lg border bg-background px-3 font-normal outline-none focus:ring-2 focus:ring-ring" placeholder="Ees- ja perekonnanimi" /></label>
          <label className="flex flex-col gap-2 text-sm font-semibold">Telefon<input required name="phone" autoComplete="tel" type="tel" className="h-11 rounded-lg border bg-background px-3 font-normal outline-none focus:ring-2 focus:ring-ring" placeholder="+372 5xxx xxxx" /></label>
        </div>
        <label className="flex flex-col gap-2 text-sm font-semibold">E-post<input required name="email" autoComplete="email" type="email" className="h-11 rounded-lg border bg-background px-3 font-normal outline-none focus:ring-2 focus:ring-ring" placeholder="nimi@ettevote.ee" /></label>
        <label className="flex flex-col gap-2 text-sm font-semibold">Teenus<select required name="service" defaultValue="" className="h-11 rounded-lg border bg-background px-3 font-normal outline-none focus:ring-2 focus:ring-ring"><option value="" disabled>Vali teenus</option><option>Tuleohutusülevaatus</option><option>Dokumentatsiooni koostamine</option><option>Evakuatsiooniõppus või koolitus</option><option>Tulekustutite kontroll</option><option>Muu nõustamine</option></select></label>
        <label className="flex flex-col gap-2 text-sm font-semibold">Objekt ja soov<textarea required name="message" rows={4} className="rounded-lg border bg-background px-3 py-3 font-normal outline-none focus:ring-2 focus:ring-ring" placeholder="Objekti tüüp, asukoht ja soovitud töö..." /></label>
        <Button type="submit" size="lg" className="h-12">Saada päring <ArrowRight data-icon="inline-end" aria-hidden="true" /></Button>
      </div>
    </form>
  )
}
