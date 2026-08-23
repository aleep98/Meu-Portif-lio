'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home', section: 'home' },
  { label: 'About', href: '#about', section: 'about' },
  { label: 'Skills', href: '#skills', section: 'skills' },
  { label: 'Projects', href: '#projects', section: 'projects' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'contact']
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section))

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleSection) setActiveSection(visibleSection.target.id)
      },
      { rootMargin: '-25% 0px -55% 0px', threshold: [0, 0.25, 0.5] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        isScrolled || isOpen
          ? 'border-white/10 bg-[#090A0D]/95 shadow-[0_8px_30px_rgba(0,0,0,0.22)] md:bg-[#090A0D]/88 md:backdrop-blur-lg'
          : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6" aria-label="Main navigation">
        <Link
          href="#home"
          onClick={closeMenu}
          className="relative z-10 text-xl font-bold tracking-tight text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
        >
          Alee<span className="text-red-500">Dev</span>
          <span className="text-red-500">.</span>
        </Link>

        <ul className="hidden items-center gap-8 text-sm md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.section

            return (
              <li key={item.section}>
                <Link
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative block py-2 font-medium transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-red-500 after:transition-transform ${
                    isActive
                      ? 'text-white after:scale-x-100'
                      : 'text-slate-400 after:scale-x-0 hover:text-white hover:after:scale-x-100'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <Link
          href="#contact"
          className={`group hidden items-center gap-2 rounded-lg border px-4 py-2 text-sm font-semibold transition md:inline-flex ${
            activeSection === 'contact'
              ? 'border-red-500 bg-red-600 text-white'
              : 'border-red-500/40 bg-red-500/10 text-red-200 hover:border-red-500 hover:bg-red-600 hover:text-white'
          }`}
        >
          Contact
          <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>

        <button
          type="button"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white transition hover:border-red-500/40 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 md:hidden"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <button
        type="button"
        aria-label="Close navigation menu"
        tabIndex={isOpen ? 0 : -1}
        onClick={closeMenu}
        className={`fixed inset-0 top-[72px] -z-10 bg-black/65 transition-opacity duration-300 md:hidden ${
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      <div
        id="mobile-navigation"
        className={`absolute inset-x-4 top-[82px] overflow-hidden rounded-2xl border bg-[#0B0C0F] shadow-2xl transition-[opacity,transform,border-color] duration-300 md:hidden ${
          isOpen
            ? 'visible translate-y-0 border-white/10 opacity-100'
            : 'invisible -translate-y-3 border-transparent opacity-0'
        }`}
      >
        <ul className="space-y-1 p-3">
          {navItems.map((item, index) => (
            <li key={item.section}>
              <Link
                href={item.href}
                onClick={closeMenu}
                tabIndex={isOpen ? 0 : -1}
                className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium transition ${
                  activeSection === item.section
                    ? 'bg-red-500/10 text-red-300'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                <span className="font-mono text-xs text-slate-600">0{index + 1}</span>
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Link
              href="#contact"
              onClick={closeMenu}
              tabIndex={isOpen ? 0 : -1}
              className="flex items-center justify-center gap-2 rounded-xl bg-red-700 px-4 py-3.5 font-semibold text-white transition hover:bg-red-600"
            >
              Contact me <ArrowUpRight size={17} />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
