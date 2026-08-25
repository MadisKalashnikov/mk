'use client'

import { FormEvent, useState } from 'react'
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function QuoteForm() {
  const [sent, setSent] = useState(false)
  const [pending, setPending] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setPending(true)
    setError('')
    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form))

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const result = await response.json()
      if (!response.ok) throw new Error(result.error || 'Kirja saatmine ebaõnnestus.')
      form.reset()
      setSent(true)
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : 'Kirja saatmine ebaõnnestus.')
    } finally {
      setPending(false)
    }
  }

  if (sent) {
    return (
      <div className="flex min-h-96 flex-col items-start justify-center gap-4 rounded-2xl bg-secondary p-8" role="status">
        <CheckCircle2 className="size-10 text-primary" aria-hidden="true" />
        <h3 className="text-2xl font-bold">Hinnapäring on saadetud</h3>
        <p className="max-w-md leading-relaxed text-muted-foreground">Aitäh! Võtame sinuga esimesel võimalusel ühendust.</p>
        <Button variant="outline" onClick={() => setSent(false)}>Saada uus päring</Button>
      </div>
    )
  }

  return (
    <form className="rounded-2xl bg-card p-6 shadow-xl shadow-foreground/5 sm:p-8" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-6">
        <div><p className="text-sm font-bold uppercase tracking-widest text-primary">Tasuta hinnapäring</p><h3 className="mt-2 text-2xl font-bold">Kirjelda oma vajadust</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Vastame esimesel võimalusel ja täpsustame töö mahu.</p></div>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm font-semibold">Nimi<input required maxLength={100} name="name" autoComplete="name" className="h-11 rounded-lg border bg-background px-3 font-normal outline-none focus:ring-2 focus:ring-ring" placeholder="Ees- ja perekonnanimi" /></label>
          <label className="flex flex-col gap-2 text-sm font-semibold">Telefon<input required maxLength={40} name="phone" autoComplete="tel" type="tel" className="h-11 rounded-lg border bg-background px-3 font-normal outline-none focus:ring-2 focus:ring-ring" placeholder="+372 5xxx xxxx" /></label>
        </div>
        <label className="flex flex-col gap-2 text-sm font-semibold">E-post<input required maxLength={254} name="email" autoComplete="email" type="email" className="h-11 rounded-lg border bg-background px-3 font-normal outline-none focus:ring-2 focus:ring-ring" placeholder="nimi@ettevote.ee" /></label>
        <label className="flex flex-col gap-2 text-sm font-semibold">Teenus<select required name="service" defaultValue="" className="h-11 rounded-lg border bg-background px-3 font-normal outline-none focus:ring-2 focus:ring-ring"><option value="" disabled>Vali teenus</option><option>Tuleohutusülevaatus</option><option>Dokumentatsiooni koostamine</option><option>Evakuatsiooniõppus või koolitus</option><option>Tulekustutite kontroll</option><option>Muu nõustamine</option></select></label>
        <label className="flex flex-col gap-2 text-sm font-semibold">Objekt ja soov<textarea required maxLength={3000} name="message" rows={4} className="rounded-lg border bg-background px-3 py-3 font-normal outline-none focus:ring-2 focus:ring-ring" placeholder="Objekti tüüp, asukoht ja soovitud töö..." /></label>
        <label className="sr-only" aria-hidden="true">Veebileht<input name="website" tabIndex={-1} autoComplete="off" /></label>
        {error && <p role="alert" className="rounded-lg bg-destructive/10 p-3 text-sm font-medium text-destructive">{error}</p>}
        <Button type="submit" size="lg" className="h-12" disabled={pending}>{pending ? <Loader2 data-icon="inline-start" className="animate-spin" aria-hidden="true" /> : null}{pending ? 'Saadan…' : 'Saada hinnapäring'}{!pending ? <ArrowRight data-icon="inline-end" aria-hidden="true" /> : null}</Button>
        <p className="text-xs leading-relaxed text-muted-foreground">Vormi andmeid kasutatakse ainult sinu hinnapäringule vastamiseks.</p>
      </div>
    </form>
  )
}
