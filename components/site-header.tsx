import { Flame, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#avaleht" className="flex items-center gap-3" aria-label="Tuleohutus Ekspert avaleht">
          <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground"><Flame aria-hidden="true" /></span>
          <span className="font-sans text-sm font-bold tracking-tight sm:text-base">Tuleohutus <span className="text-primary">Ekspert</span></span>
        </a>
        <nav aria-label="Põhinavigatsioon" className="hidden items-center gap-6 text-sm font-medium lg:flex">
          <a className="transition-colors hover:text-primary" href="#teenused">Teenused</a>
          <a className="transition-colors hover:text-primary" href="#protsess">Kuidas töötame</a>
          <a className="transition-colors hover:text-primary" href="#hinnad">Hinnad</a>
          <a className="transition-colors hover:text-primary" href="#kkk">KKK</a>
        </nav>
        <Button render={<a href="#kontakt" />} size="lg">
          <Phone data-icon="inline-start" aria-hidden="true" />
          Küsi pakkumist
        </Button>
      </div>
    </header>
  )
}
