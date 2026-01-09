'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0F172A]/80 backdrop-blur border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link
          href="/"
          className="text-xl font-bold text-white tracking-tight"
        >
          Alee<span className="text-red-500">Dev</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-sm">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className={`
                  transition
                  ${
                    pathname === item.href
                      ? 'text-red-500'
                      : 'text-slate-300 hover:text-white'
                  }
                `}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#contact"
          className="hidden md:inline-flex items-center gap-2
          px-4 py-2 rounded-md bg-gray-600 hover:bg-red-700
          text-sm font-medium text-white transition"
        >
          Contact
        </Link>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-[#0F172A] border-t border-white/10 absolute top-16 left-0 w-full shadow-lg">
          <ul className="flex flex-col p-6 space-y-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`block text-lg transition ${
                    pathname === item.href ? 'text-red-500' : 'text-slate-300 hover:text-white'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#contact"
                className="inline-block px-4 py-2 rounded-md bg-gray-600 hover:bg-red-700 text-white transition"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
