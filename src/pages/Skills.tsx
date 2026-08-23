'use client'

import { useEffect, useRef, useState, type CSSProperties } from 'react'
import type { IconType } from 'react-icons'
import {
  SiExpress,
  SiGit,
  SiGithub,
  SiMongodb,
  SiMui,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenjdk,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
  SiVercel,
} from 'react-icons/si'

type Skill = {
  name: string
  icon: IconType
  color: string
  featured?: boolean
}

const skills: Record<string, Skill[]> = {
  Backend: [
    { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E', featured: true },
    { name: 'Express', icon: SiExpress, color: '#F1F5F9' },
    { name: 'Prisma', icon: SiPrisma, color: '#5A67D8' },
    { name: 'Java', icon: SiOpenjdk, color: '#E76F00', featured: true },
    { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F', featured: true },
  ],
  Frontend: [
    { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
    { name: 'React', icon: SiReact, color: '#61DAFB', featured: true },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'MUI', icon: SiMui, color: '#007FFF' },
  ],
  Database: [
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', featured: true },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  ],
  Tools: [
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'GitHub', icon: SiGithub, color: '#FFFFFF' },
    { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
    { name: 'Vercel', icon: SiVercel, color: '#FFFFFF' },
  ],
}

export default function Skills() {
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
    <section ref={sectionRef} id="skills" className="bg-[#0D0E11] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-xl">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Skills</h2>
          <p className="mt-4 text-slate-300">
            Technologies and tools I use daily to build modern and scalable applications.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <div
              key={category}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-white/20"
            >
              <h3 className="mb-4 text-xl font-semibold text-white">{category}</h3>

              <div className="grid grid-cols-[repeat(auto-fit,minmax(112px,1fr))] gap-3">
                {items.map(({ name, icon: Icon, color, featured }, itemIndex) => {
                  const style = {
                    '--skill-color': color,
                    '--skill-surface': featured ? `${color}0D` : 'rgba(255,255,255,0.025)',
                    '--skill-border': featured ? `${color}66` : 'rgba(255,255,255,0.09)',
                    '--skill-hover': `${color}16`,
                    '--skill-shadow': `${color}38`,
                    backgroundColor: 'var(--skill-surface)',
                    borderColor: 'var(--skill-border)',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(18px)',
                    transitionDelay: isVisible
                      ? `${categoryIndex * 70 + itemIndex * 45}ms`
                      : '0ms',
                  } as CSSProperties

                  return (
                    <article
                      key={name}
                      style={style}
                      className={`skill-card relative flex flex-col items-center justify-center gap-2.5 overflow-hidden rounded-xl border p-4 text-slate-200 ${
                        featured ? 'min-h-[126px]' : 'min-h-[116px]'
                      }`}
                    >
                      {featured && (
                        <span
                          className="absolute right-2 top-2 rounded-full px-2 py-0.5 text-[0.58rem] font-bold uppercase tracking-wider"
                          style={{ backgroundColor: `${color}1F`, color }}
                        >
                          Principal
                        </span>
                      )}

                      <Icon
                        aria-hidden="true"
                        className="skill-icon"
                        style={{ color, fontSize: featured ? '2.45rem' : '2.1rem' }}
                      />
                      <span className={`text-center text-sm text-slate-50 ${featured ? 'font-bold' : 'font-medium'}`}>
                        {name}
                      </span>
                    </article>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
