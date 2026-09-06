'use client'

import { useEffect, useRef, useState } from 'react'
import {
  AlertCircle,
  ArrowUpRight,
  CheckCircle2,
  Github,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Send,
} from 'lucide-react'
import { SiWhatsapp } from 'react-icons/si'

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, '')

  const whatsappMessage =
  'Olá, Alexandre! Vi seu portfólio e gostaria de conversar sobre uma oportunidade.'
  const whatsappLink = whatsappNumber
  ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
  : `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`
  
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(section)
        }
      },
      { threshold: 0.12 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    if (!formRef.current || !serviceId || !templateId || !publicKey) {
      setStatus('error')
      return
    }

    setIsSubmitting(true)
    setStatus('idle')

    try {
      const { default: emailjs } = await import('@emailjs/browser')
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      setStatus('success')
      formRef.current.reset()
    } catch {
      setStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden bg-[#0D0E11] py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-40 hidden h-128 w-128 rounded-full bg-slate-700/[0.07] blur-[130px] md:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-10 hidden h-72 w-72 rounded-full bg-white/[0.015] blur-[100px] md:block"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-start gap-14 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div
          className={`transition-all duration-700 motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
          }`}
        >
          <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
            Get in touch
          </span>
          <h2 className="max-w-md text-3xl font-bold leading-tight text-white md:text-4xl">
            Let us build something meaningful.
          </h2>
          <p className="mt-5 max-w-lg leading-relaxed text-slate-400">
            Have a project, opportunity or idea in mind? Send me a message and
            tell me how I can contribute.
          </p>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-1.5 text-xs font-semibold text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to opportunities and collaborations
          </div>

          <div className="mt-9 space-y-3">
            <a
              href="mailto:l.aleep98@gmail.com"
              className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.025] p-4 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05] motion-reduce:transform-none"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-300">
                <Mail aria-hidden="true" size={20} />
              </span>
              <span className="min-w-0">
                <span className="block text-xs uppercase tracking-wider text-slate-500">Email</span>
                <span className="mt-0.5 block truncate text-sm font-medium text-slate-200">
                  l.aleep98@gmail.com
                </span>
              </span>
              <ArrowUpRight
                aria-hidden="true"
                size={17}
                className="ml-auto text-slate-600 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
              />
            </a>

            <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.025] p-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-300">
                <MapPin aria-hidden="true" size={20} />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wider text-slate-500">Location</span>
                <span className="mt-0.5 block text-sm font-medium text-slate-200">Brazil</span>
              </span>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <span className="mr-1 text-xs font-semibold uppercase tracking-[0.15em] text-slate-600">
              Find me on
            </span>
            <a
              href={process.env.NEXT_PUBLIC_GITHUB_PROFILE || '#'}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Alexandre GitHub profile"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 motion-reduce:transform-none"
            >
              <Github size={18} />
            </a>
            <a
              href={process.env.NEXT_PUBLIC_LINKEDIN_PROFILE || '#'}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Alexandre LinkedIn profile"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 motion-reduce:transform-none"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact Alexandre on WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#25D366]/60 bg-[#25D366] text-[#071A0D] shadow-[0_8px_22px_rgba(37,211,102,0.22)] transition hover:-translate-y-1 hover:bg-[#2BE06C] hover:shadow-[0_10px_28px_rgba(37,211,102,0.38)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0E11] motion-reduce:transform-none"
            >
              <SiWhatsapp aria-hidden="true" size={19} />
            </a>
          </div>
        </div>

        <div
          className={`transition-all delay-150 duration-700 motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          }`}
        >
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="rounded-2xl border border-white/10 bg-[#121317] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] sm:p-8 lg:bg-white/[0.035] lg:backdrop-blur-lg"
          >
            <div className="mb-7 border-b border-white/10 pb-6">
              <p className="text-lg font-semibold text-white">Start a conversation</p>
              <p className="mt-1 text-sm text-slate-500">Fill in the details below and send your message.</p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="user_name" className="mb-2 block text-sm font-medium text-slate-300">
                  Name <span className="text-red-400">*</span>
                </label>
                <input
                  id="user_name"
                  type="text"
                  name="user_name"
                  required
                  maxLength={80}
                  autoComplete="name"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-white/10 bg-[#090A0D]/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 hover:border-white/20 focus:border-red-500/70 focus:ring-2 focus:ring-red-500/10"
                />
              </div>

              <div>
                <label htmlFor="user_email" className="mb-2 block text-sm font-medium text-slate-300">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  id="user_email"
                  type="email"
                  name="user_email"
                  required
                  maxLength={120}
                  autoComplete="email"
                  placeholder="your@email.com"
                  className="w-full rounded-lg border border-white/10 bg-[#090A0D]/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 hover:border-white/20 focus:border-red-500/70 focus:ring-2 focus:ring-red-500/10"
                />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="subject" className="mb-2 block text-sm font-medium text-slate-300">
                Subject <span className="text-red-400">*</span>
              </label>
              <input
                id="subject"
                type="text"
                name="subject"
                required
                maxLength={120}
                placeholder="What would you like to discuss?"
                className="w-full rounded-lg border border-white/10 bg-[#090A0D]/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 hover:border-white/20 focus:border-red-500/70 focus:ring-2 focus:ring-red-500/10"
              />
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">
                Message <span className="text-red-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                maxLength={2000}
                rows={6}
                placeholder="Tell me about your project, idea or opportunity..."
                className="w-full resize-none rounded-lg border border-white/10 bg-[#090A0D]/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 hover:border-white/20 focus:border-red-500/70 focus:ring-2 focus:ring-red-500/10"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-red-700 px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_30px_rgba(185,28,28,0.2)] transition hover:-translate-y-0.5 hover:bg-red-600 hover:shadow-[0_14px_38px_rgba(220,38,38,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 disabled:cursor-not-allowed disabled:opacity-55 motion-reduce:transform-none"
            >
              {isSubmitting ? (
                <>
                  <Loader2 aria-hidden="true" size={19} className="animate-spin" />
                  Sending message...
                </>
              ) : (
                <>
                  Send message
                  <Send aria-hidden="true" size={18} className="transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>

            <div aria-live="polite">
              {status === 'success' && (
                <p className="mt-4 flex items-center justify-center gap-2 rounded-lg border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-3 text-center text-sm text-emerald-300">
                  <CheckCircle2 aria-hidden="true" size={18} />
                  Message sent successfully. I will get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p role="alert" className="mt-4 flex items-center justify-center gap-2 rounded-lg border border-red-400/20 bg-red-400/[0.06] px-4 py-3 text-center text-sm text-red-300">
                  <AlertCircle aria-hidden="true" size={18} />
                  Unable to send your message. Please try again or use email.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
