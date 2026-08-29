'use client'

import type { MouseEvent } from 'react'
import { Flame, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navigation = [
  { target: 'services', label: 'Teenused' },
  { target: 'process', label: 'Kuidas töötame' },
  { target: 'pricing', label: 'Hinnad' },
  { target: 'faq', label: 'KKK' },
]

export function SiteHeader() {
  const scrollToSection = (event: MouseEvent<HTMLAnchorElement>, target: string) => {
    event.preventDefault()

    const element = document.querySelector<HTMLElement>(`[data-scroll-section="${target}"]`)
    const header = document.querySelector<HTMLElement>('[data-site-header]')

    if (!element) return

    const top = element.getBoundingClientRect().top + window.scrollY - (header?.offsetHeight ?? 0)
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    window.scrollTo({ top, behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  return (
    <header data-site-header className="sticky top-0 z-20 border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-8">
        <a href="/" onClick={(event) => scrollToSection(event, 'home')} className="flex items-center gap-3" aria-label="Tuleohutus Ekspert avaleht">
          <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground"><Flame aria-hidden="true" /></span>
          <span className="font-sans text-sm font-bold tracking-tight sm:text-base">Tuleohutus <span className="text-primary">Ekspert</span></span>
        </a>
        <nav aria-label="Põhinavigatsioon" className="hidden items-center gap-6 text-sm font-medium lg:flex">
          {navigation.map(({ target, label }) => (
            <a key={target} className="transition-colors hover:text-primary" href="/" onClick={(event) => scrollToSection(event, target)}>{label}</a>
          ))}
        </nav>
        <Button render={<a href="/" onClick={(event) => scrollToSection(event, 'contact')} />} size="lg">
          <Phone data-icon="inline-start" aria-hidden="true" />
          Küsi pakkumist
        </Button>
      </div>
    </header>
  )
}
