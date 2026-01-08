'use client'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Paper from '@mui/material/Paper'

const skills = {
  Backend: [
    'Node.js',
    'Express',
    'Prisma',
    'JWT',
    'REST API',
  ],
  Frontend: [
    'Next.js',
    'React',
    'Tailwind CSS',
    'MUI',
    'Framer Motion',
  ],
  Database: [
    'PostgreSQL',
    'MongoDB',
    'MySQL',
  ],
  Tools: [
    'Git',
    'GitHub',
    'Docker',
    'Postman',
    'Vercel',
  ],
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#0D0E11]">
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
          {Object.entries(skills).map(([category, items]) => (
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
                  borderColor: '#a82222ff',
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{ mb: 2, fontWeight: 600 }}
              >
                {category}
              </Typography>

              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {items.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    size="small"
                    sx={{
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      color: '#E5E7EB',
                      border: '1px solid rgba(255,255,255,0.1)',
                      '&:hover': {
                        backgroundColor: 'rgba(37,99,235,0.15)',
                        borderColor: '#972a2aff',
                      },
                    }}
                  />
                ))}
              </Box>
            </Paper>
          ))}
        </Box>
      </div>
    </section>
  )
}
