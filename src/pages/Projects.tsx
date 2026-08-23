'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight, ExternalLink, Github, Play } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Logistic System',
    type: 'Full-stack application',
    description:
      'A logistics dashboard created to centralize operations, visualize key data and support efficient day-to-day management.',
    image: '/img/dashboard.png',
    repoLink: process.env.NEXT_PUBLIC_GITHUB_PROFILE || '#',
    liveLink: '',
    stack: ['React', 'Node.js', 'MUI'],
    featured: true,
  },
  {
    id: 2,
    title: 'Barber Studio',
    type: 'Web experience',
    description:
      'A modern and responsive website focused on presenting the identity and services of Natan Passeberg Barber Studio.',
    image: '/img/barber.png',
    repoLink: process.env.NEXT_PUBLIC_GITHUB_PROFILE || '#',
    liveLink: 'https://np-barber.vercel.app',
    stack: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    id: 3,
    title: 'RPG Java',
    type: 'Java application',
    description:
      'An RPG project built around object-oriented programming, game logic, character interactions and visual gameplay.',
    image: '/video/rpg-java-Cover.jpg',
    video: '/video/rpg-java.mp4',
    repoLink: process.env.NEXT_PUBLIC_GITHUB_PROFILE || '#',
    liveLink: '',
    stack: ['Java', 'OOP', 'Game Design'],
  },
]

export default function Projects() {
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
      { threshold: 0.1 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative overflow-hidden bg-[#0D0E11] py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-24 h-96 w-96 rounded-full bg-slate-700/[0.06] blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
              Selected work
            </span>
            <h2 className="text-3xl font-bold text-white md:text-4xl">Projects</h2>
            <p className="mt-4 text-slate-300">
              Applications where I turn ideas and business requirements into
              functional digital experiences.
            </p>
          </div>

          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span className="h-px w-10 bg-white/15" />
            {String(projects.length).padStart(2, '0')} selected projects
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.id}
              style={{ transitionDelay: isVisible ? `${index * 120}ms` : '0ms' }}
              className={`group/project relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] transition-all duration-700 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_24px_70px_rgba(0,0,0,0.32)] motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none ${
                project.featured ? 'lg:col-span-2' : ''
              } ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            >
              <div className={project.featured ? 'md:grid md:grid-cols-[1.15fr_0.85fr]' : ''}>
                <div
                  className={`relative overflow-hidden bg-black ${
                    project.featured ? 'h-64 md:h-full md:min-h-[390px]' : 'h-60'
                  }`}
                >
                  {project.video ? (
                    <video
                      src={project.video}
                      poster={project.image}
                      controls
                      preload="metadata"
                      aria-label={`${project.title} gameplay demonstration`}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover/project:scale-[1.03]"
                    />
                  ) : (
                    <Image
                      src={project.image}
                      alt={`${project.title} project preview`}
                      fill
                      sizes={project.featured ? '(min-width: 768px) 58vw, 100vw' : '(min-width: 1024px) 50vw, 100vw'}
                      className="object-cover transition-transform duration-700 group-hover/project:scale-105"
                    />
                  )}

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0D0E11]/80 via-transparent to-transparent" />

                  {project.video && (
                    <span className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/55 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                      <Play size={12} fill="currentColor" /> Gameplay demo
                    </span>
                  )}

                  {project.featured && (
                    <span className="absolute left-5 top-5 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-200 backdrop-blur-md">
                      Featured project
                    </span>
                  )}
                </div>

                <div className={`flex flex-col p-6 ${project.featured ? 'justify-center md:p-10' : ''}`}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                        {project.type}
                      </span>
                      <h3 className={`mt-2 font-bold text-white ${project.featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
                        {project.title}
                      </h3>
                    </div>
                    <span className="font-mono text-sm text-slate-600">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <p className="mt-4 leading-relaxed text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-300 transition group-hover/project:border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-white/10 pt-5">
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source code on GitHub`}
                      className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-white/25 hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                    >
                      <Github size={17} /> Source code
                    </a>

                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${project.title} live website`}
                        className="group/link inline-flex items-center gap-2 rounded-lg bg-red-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                      >
                        <ExternalLink size={17} /> Live project
                        <ArrowUpRight
                          size={14}
                          className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                        />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
