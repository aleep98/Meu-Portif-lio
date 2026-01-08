'use client'

import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Box from '@mui/material/Box'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Logistic System',
    description:
      'A comprehensive dashboard for a logistics management system.',
    image: '/img/dashboard.png',
    repoLink: process.env.NEXT_PUBLIC_GITHUB_PROFILE || '#',
    liveLink: '#',
    stack: ['React', 'Node.js', 'MUI'],
  },
  {
    id: 2,
    title: 'Barber Studio',
    description:
      'A modern website for the Natan Passeberg Barber Studio.',
    image: '/img/barber.png',
    repoLink: process.env.NEXT_PUBLIC_GITHUB_PROFILE || '#',
    liveLink: 'https://np-barber.vercel.app',
    stack: ['Next.js', 'Tailwind', 'Framer'],
  },
  {
    id: 3,
    title: 'Lash Design Studio Thainá Roberta',
    description:
      'A portfolio website for a professional Lash Designer.',
    image: '/img/studio-th.png',
    repoLink: process.env.NEXT_PUBLIC_GITHUB_PROFILE || '#',
    liveLink: 'https://studio-thaina-roberta.vercel.app',
    stack: ['Next.js', 'CSS Modules', 'Tailwind'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#0D0E11]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-16 max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Projects
          </h2>
          <p className="text-slate-300 mt-4">
            Some projects that showcase my skills
            in web and back-end development.
          </p>
        </div>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
            },
            gap: 4,
          }}
        >
          {projects.map((project) => (
            <Card
              key={project.id}
              sx={{
                backgroundColor: 'rgba(31, 41, 55, 0.4)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 3,
                color: '#fff',
                overflow: 'hidden',
                transition: 'all .3s ease',
                '&:hover': {
                  transform: 'scale(1.03)',
                  borderColor: '#ad1d1dff',
                },
              }}
            >
              <CardMedia
                component="img"
                height="190"
                image={project.image}
                alt={project.title}
                sx={{
                  objectFit: 'cover',
                }}
              />

              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {project.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ color: '#CBD5E1', mb: 2 }}
                >
                  {project.description}
                </Typography>

                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {project.stack.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      size="small"
                      sx={{
                        backgroundColor: 'rgba(255,255,255,0.05)',
                        color: '#E5E7EB',
                        border: '1px solid rgba(255,255,255,0.1)',
                      }}
                    />
                  ))}
                </Box>
              </CardContent>

              <CardActions sx={{ px: 2, pb: 2 }}>
                <Button
                  href={project.repoLink}
                  target="_blank"
                  startIcon={<Github size={18} />}
                  sx={{
                    color: '#CBD5E1',
                    textTransform: 'none',
                    '&:hover': { color: '#fff' },
                  }}
                >
                  GitHub
                </Button>

                {project.liveLink && (
                  <Button
                    href={project.liveLink}
                    target="_blank"
                    startIcon={<ExternalLink size={18} />}
                    sx={{
                      color: '#2563EB',
                      textTransform: 'none',
                      '&:hover': { color: '#3B82F6' },
                    }}
                  >
                    Live
                  </Button>
                )}
              </CardActions>
            </Card>
          ))}
        </Box>
      </div>
    </section>
  )
}
