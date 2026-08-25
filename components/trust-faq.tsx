import { Award, Clock, MapPin, Users } from 'lucide-react'

const stats = [
  { icon: Users, value: '250+', label: 'teenindatud objekti' },
  { icon: Clock, value: '10 a', label: 'valdkonna kogemust' },
  { icon: MapPin, value: 'Kogu Eesti', label: 'väljasõidud' },
  { icon: Award, value: '100%', label: 'nõuetele vastavus' },
]

const faqs = [
  { q: 'Kui tihti tuleb tuleohutusülevaatus teha?', a: 'Enesekontrolli tuleohutusülevaatus tehakse üldjuhul kord aastas, kuid sagedus sõltub hoone kasutusotstarbest. Aitame paika panna sinu objektile sobiva graafiku.' },
  { q: 'Kas koostate ka puuduva dokumentatsiooni?', a: 'Jah. Koostame tuleohutusjuhendid, evakuatsiooniskeemid, enesekontrolli aruanded ja muud vajalikud dokumendid ning selgitame, kuidas neid ajakohasena hoida.' },
  { q: 'Kas tulete kohale ka väljaspool suuremaid linnu?', a: 'Teeme väljasõite üle Eesti. Kaugemate objektide puhul lepime transpordi tingimused kokku juba pakkumises.' },
  { q: 'Kui kiiresti saab pakkumise?', a: 'Enamasti vastame ühe tööpäeva jooksul. Kiireloomulise vajaduse korral märgi see päringus ja leiame lahenduse.' },
]

export function TrustSection() {
  return (
    <section className="border-y bg-card py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex flex-col gap-2">
            <Icon className="text-primary" aria-hidden="true" />
            <span className="text-3xl font-bold sm:text-4xl">{value}</span>
            <span className="text-sm text-muted-foreground">{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export function FaqSection() {
  return (
    <section id="kkk" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-primary">Korduma kippuvad küsimused</p>
          <h2 className="text-balance text-3xl font-bold sm:text-5xl">Vastused enne kui küsid</h2>
        </div>
        <div className="mt-12 flex flex-col gap-4">
          {faqs.map(({ q, a }) => (
            <details key={q} className="group rounded-xl border bg-card p-5 sm:p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg font-bold">
                {q}
                <span className="shrink-0 text-2xl text-primary transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="mt-4 leading-relaxed text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
