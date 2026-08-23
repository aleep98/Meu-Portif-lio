'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowRight, BookOpen, Braces, Server } from 'lucide-react'

const highlights = [
  { title: 'Back-end Focus', description: 'APIs and business-driven systems.', icon: Server },
  { title: 'Clean Code', description: 'Maintainable and scalable solutions.', icon: Braces },
  { title: 'Always Learning', description: 'Constant technical improvement.', icon: BookOpen },
]

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

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
      { threshold: 0.15 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden bg-[#0D0E11] py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-700/[0.07] blur-[110px]"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div
          className={`transition-all duration-700 motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
          }`}
        >
          <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
            Get to know me
          </span>
          <h2 className="text-3xl font-bold text-white md:text-4xl">About Me</h2>

          <div className="mt-6 max-w-2xl space-y-4 leading-relaxed text-slate-300">
            <p>
              I am a developer focused on building reliable{' '}
              <strong className="font-semibold text-red-400">back-end applications</strong>{' '}
              with Java and Node.js.
            </p>
            <p>
              I enjoy understanding how systems work behind the scenes and turning
              business requirements into scalable{' '}
              <strong className="font-semibold text-red-400">APIs and solutions</strong>.
            </p>
            <p>
              Proactive and committed to code quality, I am always improving my
              technical skills and looking for opportunities to grow in software
              development.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {highlights.map(({ title, description, icon: Icon }, index) => (
              <article
                key={title}
                style={{ transitionDelay: isVisible ? `${180 + index * 90}ms` : '0ms' }}
                className={`group rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.055] hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                }`}
              >
                <Icon
                  aria-hidden="true"
                  className="mb-3 text-slate-400 transition-all duration-300 group-hover:scale-110 group-hover:text-white"
                  size={22}
                />
                <h3 className="text-sm font-semibold text-slate-100">{title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">{description}</p>
              </article>
            ))}
          </div>

          <a
            href="#projects"
            className="group mt-8 inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/[0.08] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
          >
            Explore my projects
            <ArrowRight
              aria-hidden="true"
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>

        <div
          className={`transition-all delay-150 duration-700 motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          }`}
        >
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#090A0D] shadow-[0_24px_80px_rgba(0,0,0,0.35)] transition duration-500 hover:border-white/20 hover:shadow-[0_24px_80px_rgba(0,0,0,0.48)]">
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.035] px-5 py-3.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              <span className="ml-3 font-mono text-xs text-slate-500">developer.ts</span>
            </div>

            <div className="overflow-x-auto p-6 font-mono text-sm leading-7 sm:p-8 sm:text-[15px]">
              <p><span className="text-purple-400">const</span> <span className="text-sky-300">developer</span> <span className="text-slate-400">=</span> <span className="text-amber-300">{'{'}</span></p>
              <p className="pl-5"><span className="text-sky-200">name</span><span className="text-slate-400">:</span> <span className="text-emerald-300">&quot;Alexandre&quot;</span><span className="text-slate-400">,</span></p>
              <p className="pl-5"><span className="text-sky-200">role</span><span className="text-slate-400">:</span> <span className="text-emerald-300">&quot;Back-end Developer&quot;</span><span className="text-slate-400">,</span></p>
              <p className="pl-5"><span className="text-sky-200">focus</span><span className="text-slate-400">:</span> <span className="text-amber-300">[</span></p>
              <p className="pl-10"><span className="text-emerald-300">&quot;APIs&quot;</span><span className="text-slate-400">,</span> <span className="text-emerald-300">&quot;Scalable systems&quot;</span></p>
              <p className="pl-5"><span className="text-amber-300">]</span><span className="text-slate-400">,</span></p>
              <p className="pl-5"><span className="text-sky-200">stack</span><span className="text-slate-400">:</span> <span className="text-amber-300">[</span><span className="text-emerald-300">&quot;Java&quot;</span><span className="text-slate-400">,</span> <span className="text-emerald-300">&quot;Node.js&quot;</span><span className="text-amber-300">]</span><span className="text-slate-400">,</span></p>
              <p className="pl-5"><span className="text-sky-200">mindset</span><span className="text-slate-400">:</span> <span className="text-emerald-300">&quot;Always learning&quot;</span></p>
              <p><span className="text-amber-300">{'}'}</span><span className="text-slate-400">;</span></p>
              <p className="mt-4 text-slate-600">
                <span className="text-slate-500">{'// '}</span>Building ideas behind the scenes.
                <span className="ml-1 inline-block h-4 w-1.5 animate-pulse bg-emerald-400 align-middle motion-reduce:animate-none" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
