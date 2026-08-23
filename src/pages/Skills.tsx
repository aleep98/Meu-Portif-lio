'use client'

import { useEffect, useRef, useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
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
      { threshold: 0.15 },
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="skills" className="py-24 bg-[#0D0E11]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-16 max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Skills
          </h2>
          <p className="text-slate-300 mt-4">
            Technologies and tools I use daily
            to build modern and scalable applications.
          </p>
        </div>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(2, 1fr)',
            },
            gap: 4,
          }}
        >
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <Paper
              key={category}
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 3,
                p: 3,
                color: '#fff',
                transition: 'all .3s ease',
                '&:hover': {
                  borderColor: 'rgba(255,255,255,0.2)',
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{ mb: 2, fontWeight: 600 }}
              >
                {category}
              </Typography>

              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(112px, 1fr))',
                  gap: 1.5,
                }}
              >
                {items.map(({ name, icon: Icon, color, featured }, itemIndex) => (
                  <Box
                    key={name}
                    component="article"
                    sx={{
                      position: 'relative',
                      minHeight: featured ? 126 : 116,
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 1.25,
                      overflow: 'hidden',
                      borderRadius: 2.5,
                      color: '#E5E7EB',
                      backgroundColor: featured ? `${color}0D` : 'rgba(255,255,255,0.025)',
                      border: `1px solid ${featured ? `${color}66` : 'rgba(255,255,255,0.09)'}`,
                      boxShadow: featured ? `inset 0 0 22px ${color}0A` : 'none',
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(22px)',
                      transition: 'opacity .5s ease, transform .35s ease, border-color .35s ease, background-color .35s ease, box-shadow .35s ease',
                      transitionDelay: isVisible
                        ? `${categoryIndex * 100 + itemIndex * 65}ms`
                        : '0ms',
                      '&:hover': {
                        transform: 'translateY(-6px) scale(1.02)',
                        backgroundColor: `${color}16`,
                        borderColor: color,
                        boxShadow: `0 10px 30px ${color}38, inset 0 0 24px ${color}12`,
                      },
                      '&:hover svg': {
                        filter: `drop-shadow(0 0 8px ${color})`,
                        transform: 'scale(1.12)',
                      },
                      '@media (prefers-reduced-motion: reduce)': {
                        opacity: 1,
                        transform: 'none',
                        transition: 'none',
                      },
                    }}
                  >
                    {featured && (
                      <Box
                        component="span"
                        sx={{
                          position: 'absolute',
                          top: 8,
                          right: 8,
                          px: 0.75,
                          py: 0.2,
                          borderRadius: 10,
                          backgroundColor: `${color}1F`,
                          color,
                          fontSize: '0.58rem',
                          fontWeight: 700,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                        }}
                      >
                        Principal
                      </Box>
                    )}

                    <Icon
                      aria-hidden="true"
                      style={{
                        color,
                        fontSize: featured ? '2.45rem' : '2.1rem',
                        transition: 'transform .35s ease, filter .35s ease',
                      }}
                    />
                    <Typography
                      component="span"
                      sx={{
                        color: '#F8FAFC',
                        fontSize: '0.86rem',
                        fontWeight: featured ? 700 : 500,
                        textAlign: 'center',
                      }}
                    >
                      {name}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Paper>
          ))}
        </Box>
      </div>
    </section>
  )
}
