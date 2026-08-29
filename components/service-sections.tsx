import { Building2, Check, ClipboardCheck, FileCheck2, GraduationCap, Home, School, ShieldCheck, Store, Wrench } from 'lucide-react'

const services = [
  { icon: ClipboardCheck, title: 'Tuleohutusülevaatus', text: 'Kontrollime hoone, tuleohutuspaigaldiste ja dokumentatsiooni vastavust ning anname selge tegevusplaani.' },
  { icon: FileCheck2, title: 'Dokumentatsiooni koostamine', text: 'Tuleohutusjuhendid, enesekontrolli aruanded, evakuatsiooniskeemid ja muud vajalikud dokumendid.' },
  { icon: GraduationCap, title: 'Koolitused ja õppused', text: 'Praktilised tuleohutuskoolitused ning evakuatsiooniõppused töötajatele ja vastutavatele isikutele.' },
  { icon: Wrench, title: 'Vahendite kontroll', text: 'Tulekustutite ja esmase tuleohutusvarustuse kontroll, märgistus ning hooldusvajaduse kaardistus.' },
]

const audiences = [
  { icon: Building2, title: 'Ettevõtted ja bürood' },
  { icon: Home, title: 'Korteriühistud' },
  { icon: School, title: 'Koolid ja lasteaiad' },
  { icon: Store, title: 'Kauplused ja laod' },
]

export function ServicesSection() {
  return (
    <>
      <section id="teenused" data-scroll-section="services" className="scroll-mt-24 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex max-w-2xl flex-col gap-4">
            <p className="text-sm font-bold uppercase tracking-widest text-primary">Terviklik teenus</p>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-5xl">Kõik vajalik tuleohutuse korrastamiseks</h2>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">Alustame hetkeolukorra kaardistamisest ja viime vajalikud tegevused arusaadavalt lõpuni.</p>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border bg-border md:grid-cols-2">
            {services.map(({ icon: Icon, title, text }) => <article key={title} className="flex gap-5 bg-card p-6 sm:p-8"><span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary"><Icon aria-hidden="true" /></span><div><h3 className="text-xl font-bold">{title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{text}</p></div></article>)}
          </div>
        </div>
      </section>
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div className="max-w-2xl"><p className="text-sm font-bold uppercase tracking-widest text-primary">Kellele</p><h2 className="mt-4 text-balance text-3xl font-bold sm:text-4xl">Lahendused erinevatele hoonetele</h2></div><p className="max-w-md leading-relaxed text-muted-foreground">Teenuse sisu kohandub objekti kasutuse, suuruse ja õigusaktidest tulenevate kohustustega.</p></div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{audiences.map(({ icon: Icon, title }) => <div key={title} className="flex items-center gap-4 rounded-xl border bg-background p-5"><Icon className="text-primary" aria-hidden="true" /><span className="font-bold">{title}</span></div>)}</div>
        </div>
      </section>
    </>
  )
}

export function ProcessAndPricing() {
  const steps = ['Võtame ühendust ja täpsustame vajaduse', 'Kaardistame objekti ja puudused', 'Koostame selge pakkumise ning tegevuskava', 'Teostame töö ja anname dokumendid üle']
  return (
    <>
      <section id="protsess" data-scroll-section="process" className="scroll-mt-24 py-20 sm:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="text-sm font-bold uppercase tracking-widest text-primary">Lihtne protsess</p><h2 className="mt-4 text-balance text-3xl font-bold sm:text-5xl">Tead täpselt, mis edasi saab</h2><p className="mt-5 leading-relaxed text-muted-foreground">Ei mingit keerulist ametikeelt. Toome välja olulise, seame tegevused järjekorda ja aitame need ära teha.</p></div><ol className="grid gap-4 sm:grid-cols-2">{steps.map((step, index) => <li key={step} className="rounded-xl border bg-card p-6"><span className="font-mono text-sm font-bold text-primary">0{index + 1}</span><p className="mt-8 text-lg font-bold leading-snug">{step}</p></li>)}</ol></div></div></section>
      <section id="hinnad" data-scroll-section="pricing" className="scroll-mt-24 bg-foreground py-20 text-background"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid gap-10 lg:grid-cols-2 lg:items-end"><div><p className="text-sm font-bold uppercase tracking-widest text-primary">Selge hinnastus</p><h2 className="mt-4 text-balance text-3xl font-bold sm:text-5xl">Hind sõltub objektist, mitte üllatustest</h2><p className="mt-5 max-w-xl leading-relaxed text-background/70">Esitame enne töö algust kirjaliku pakkumise. Lõplik hind sõltub objekti suurusest, asukohast ja töö mahust.</p></div><div className="rounded-2xl bg-background p-6 text-foreground sm:p-8"><div className="flex items-baseline justify-between gap-4 border-b pb-5"><span className="font-bold">Tuleohutuse konsultatsioon</span><strong className="text-xl">al 75 €</strong></div><div className="flex items-baseline justify-between gap-4 border-b py-5"><span className="font-bold">Objekti ülevaatus</span><strong className="text-xl">al 120 €</strong></div><div className="flex items-baseline justify-between gap-4 pt-5"><span className="font-bold">Koolitus või õppus</span><strong className="text-xl">küsi pakkumist</strong></div></div></div></div></section>
    </>
  )
}

export function DocumentsSection() {
  const docs = ['Tuleohutusjuhend', 'Evakuatsiooni tegevuskava', 'Enesekontrolli aruanne', 'Evakuatsiooniskeemid', 'Kontrollaktid ja protokollid', 'Puuduste kõrvaldamise tegevuskava']
  return <section className="py-20 sm:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="rounded-3xl bg-secondary p-6 sm:p-10 lg:p-14"><div className="grid gap-10 lg:grid-cols-2"><div><ShieldCheck className="size-12 text-primary" aria-hidden="true" /><h2 className="mt-6 text-balance text-3xl font-bold sm:text-4xl">Dokumendid, mis on päriselt kasutatavad</h2><p className="mt-4 leading-relaxed text-muted-foreground">Koostame materjalid sinu objekti järgi, mitte üldise malli põhjal. Selgitame, mida tuleb teha ja kuidas dokumente ajakohasena hoida.</p></div><ul className="grid gap-3 sm:grid-cols-2">{docs.map(doc => <li key={doc} className="flex items-start gap-3 rounded-lg bg-background p-4 font-semibold"><Check className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />{doc}</li>)}</ul></div></div></div></section>
}
