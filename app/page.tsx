import { ArrowRight, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SiteHeader } from '@/components/site-header'
import { QuoteForm } from '@/components/quote-form'
import { ServicesSection, ProcessAndPricing, DocumentsSection } from '@/components/service-sections'
import { TrustSection, FaqSection } from '@/components/trust-faq'

export default function Page() {
  return (
    <div id="avaleht" className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="relative overflow-hidden border-b">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center gap-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-semibold">
              <ShieldCheck className="size-4 text-primary" aria-hidden="true" />
              Tuleohutuse ekspertteenused kogu Eestis
            </span>
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-6xl">Tuleohutus korda ühe usaldusväärse partneriga</h1>
            <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">Ülevaatused, dokumentatsioon, koolitused ja nõustamine ettevõtetele, ühistutele ja asutustele. Selge tegevuskava ja hind ilma üllatusteta.</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button render={<a href="#kontakt" />} size="lg" className="h-12">Küsi tasuta pakkumist <ArrowRight data-icon="inline-end" aria-hidden="true" /></Button>
              <Button render={<a href="#teenused" />} size="lg" variant="outline" className="h-12">Vaata teenuseid</Button>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <img src="/fire-safety-inspector.png" alt="Tuleohutuse spetsialist kontrollib hoone tuleohutuspaigaldisi" className="h-full w-full rounded-3xl object-cover" />
          </div>
        </div>
      </section>

      <TrustSection />
      <ServicesSection />
      <ProcessAndPricing />
      <DocumentsSection />
      <FaqSection />

      <section id="kontakt" className="scroll-mt-24 bg-secondary py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="flex flex-col justify-center gap-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-primary">Võta ühendust</p>
              <h2 className="mt-4 text-balance text-3xl font-bold sm:text-5xl">Räägime sinu objekti tuleohutusest</h2>
              <p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">Kirjelda lühidalt vajadust ja võtame ühendust. Allolevad kontaktandmed on demoversiooni näidised.</p>
            </div>
            <ul className="flex flex-col gap-4 text-lg font-semibold">
              <li className="flex items-center gap-4"><span className="flex size-11 items-center justify-center rounded-xl bg-background text-primary"><Phone aria-hidden="true" /></span>+372 5000 0000</li>
              <li className="flex items-center gap-4"><span className="flex size-11 items-center justify-center rounded-xl bg-background text-primary"><Mail aria-hidden="true" /></span>info@tuleohutusekspert.ee</li>
              <li className="flex items-center gap-4"><span className="flex size-11 items-center justify-center rounded-xl bg-background text-primary"><MapPin aria-hidden="true" /></span>Teenindame kogu Eestit</li>
            </ul>
          </div>
          <QuoteForm />
        </div>
      </section>

      <footer className="border-t py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-sm text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Tuleohutus Ekspert OÜ. Kõik õigused kaitstud.</p>
          <p>Näidisveebileht — kontaktandmed on asendatavad.</p>
        </div>
      </footer>
    </div>
  )
}
