import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, ArrowRight, Eye, Github, Linkedin } from 'lucide-react'
import { SiNodedotjs, SiOpenjdk, SiSpringboot, SiWhatsapp } from 'react-icons/si'

export default function Intro() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, '')
 const whatsappMessage =
  'Olá, Alexandre! Vi seu portfólio e gostaria de conversar sobre uma oportunidade.'

  const whatsappLink = whatsappNumber
  ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
  : `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center overflow-hidden bg-[#090A0D] pt-24"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('/Background_Intro.png')] bg-cover bg-center opacity-45"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,10,13,0.98)_0%,rgba(9,10,13,0.82)_48%,rgba(9,10,13,0.55)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent to-[#0D0E11]"
      />
      <div
        aria-hidden="true"
        className="absolute right-[12%] top-[20%] hidden h-80 w-80 rounded-full bg-red-700/10 blur-[110px] md:block"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-6 pb-20 pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-24">
        <div>
          <div className="hero-reveal hero-delay-1 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-3 py-1.5 text-xs font-semibold text-emerald-300 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for opportunities
          </div>

          <p className="hero-reveal hero-delay-2 mt-7 text-base font-medium text-slate-300 sm:text-lg">
            Hi, I am <span className="font-semibold text-white">Alexandre</span>.
          </p>

          <h1 className="hero-reveal hero-delay-3 mt-3 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl xl:text-7xl">
            Building reliable
            <span className="block bg-gradient-to-r from-red-500 via-red-400 to-orange-400 bg-clip-text text-transparent">
              back-end solutions.
            </span>
          </h1>

          <p className="hero-reveal hero-delay-4 mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Back-end developer focused on Java, Node.js, scalable APIs and
            systems shaped around real business requirements.
          </p>

          <div className="hero-reveal hero-delay-5 mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-red-700 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(185,28,28,0.22)] transition hover:-translate-y-0.5 hover:bg-red-600 hover:shadow-[0_14px_38px_rgba(220,38,38,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 motion-reduce:transform-none"
            >
              Explore projects
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/cv/CV - Luis Alexandre Passeberg.pdf"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-slate-200 backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.08] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 motion-reduce:transform-none"
            >
              <Eye size={17} /> View CV
            </Link>
          </div>

          <div className="hero-reveal hero-delay-6 mt-9 flex items-center gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
              Connect
            </span>
            <span className="h-px w-8 bg-white/10" />
            <a
              href={process.env.NEXT_PUBLIC_GITHUB_PROFILE || '#'}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Alexandre GitHub profile"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-400 transition hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.07] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 motion-reduce:transform-none"
            >
              <Github size={19} />
            </a>
            <a
              href={process.env.NEXT_PUBLIC_LINKEDIN_PROFILE || '#'}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Alexandre LinkedIn profile"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-400 transition hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.07] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 motion-reduce:transform-none"
            >
              <Linkedin size={19} />
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact Alexandre on WhatsApp"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#25D366]/60 bg-[#25D366] text-[#071A0D] shadow-[0_8px_22px_rgba(37,211,102,0.25)] transition hover:-translate-y-1 hover:bg-[#2BE06C] hover:shadow-[0_10px_28px_rgba(37,211,102,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-[#090A0D] motion-reduce:transform-none"
            >
              <SiWhatsapp aria-hidden="true" size={20} />
            </a>
          </div>
        </div>

        <div className="hero-reveal hero-delay-4 relative mx-auto w-full max-w-[470px] lg:ml-auto">
          <div
            aria-hidden="true"
            className="absolute inset-8 rounded-full border border-white/10 bg-white/[0.025] blur-sm"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-full border border-dashed border-white/10"
          />

          <div className="relative mx-auto aspect-4/5 w-[76%] overflow-hidden rounded-4xl border border-white/15 bg-white/[0.04] p-2 shadow-[0_30px_90px_rgba(0,0,0,0.5)] backdrop-blur-sm sm:w-[72%]">
            <div className="relative h-full w-full overflow-hidden rounded-[1.55rem]">
              <Image
                src="/img/profile.jpeg"
                alt="Alexandre, back-end developer"
                fill
                priority
                sizes="(min-width: 1024px) 340px, 70vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090A0D]/75 via-transparent to-transparent" />
            </div>
          </div>

          <div className="hero-float absolute -left-1 top-[18%] hidden items-center gap-2 rounded-xl border border-white/10 bg-[#101216]/90 px-3 py-2.5 text-sm font-semibold text-slate-200 shadow-xl backdrop-blur-md sm:flex">
            <SiOpenjdk className="text-xl text-orange-500" /> Java
          </div>
          <div className="hero-float hero-float-delay absolute -right-1 top-[36%] hidden items-center gap-2 rounded-xl border border-white/10 bg-[#101216]/90 px-3 py-2.5 text-sm font-semibold text-slate-200 shadow-xl backdrop-blur-md sm:flex">
            <SiNodedotjs className="text-xl text-[#5FA04E]" /> Node.js
          </div>
          <div className="hero-float absolute bottom-[16%] left-0 hidden items-center gap-2 rounded-xl border border-white/10 bg-[#101216]/90 px-3 py-2.5 text-sm font-semibold text-slate-200 shadow-xl backdrop-blur-md sm:flex">
            <SiSpringboot className="text-xl text-[#6DB33F]" /> Spring Boot
          </div>

          <div className="absolute bottom-5 left-1/2 w-[82%] -translate-x-1/2 rounded-xl border border-white/10 bg-[#090A0D]/85 px-4 py-3 text-center shadow-xl backdrop-blur-lg sm:w-[65%]">
            <p className="text-sm font-semibold text-white">Back-end Developer</p>
            <p className="mt-0.5 text-xs text-slate-400">Java · Node.js · APIs</p>
          </div>
        </div>
      </div>

      <Link
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-500 transition hover:text-white lg:flex"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.22em]">Scroll</span>
        <ArrowDown size={17} className="animate-bounce motion-reduce:animate-none" />
      </Link>
    </section>
  )
}
