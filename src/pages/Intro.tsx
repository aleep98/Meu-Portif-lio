import Box from "@mui/material/Box";
import { Github, Linkedin, Instagram } from "lucide-react";

export default function Intro() {
  return (
    <section>

      
      <Box
        sx={{
          position: "relative",
          backgroundImage: "url(/Background_Intro.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "250px",
            background:
              "linear-gradient(to bottom, transparent, #0b0f14)",
            zIndex: 1,
          }}
        />

        <div className="absolute z-10 text-center p-2">
          <img
            src="/img/profile.jpeg"
            alt="Profile Picture"
            className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-red-500 object-cover shadow-lg"
          />

          <p className="text-lg text-gray-300">
            Hello, World! My name is
            <span className="text-red-500 font-bold"> Alexandre</span>, and I'm a
          </p>

          <h1 className="text-3xl mt-4 font-bold">
            Full Stack Developer
          </h1>

          <p className="text-sm mt-3 max-w-md mx-auto text-gray-400">
            I'm passionate about building complete, efficient, and scalable web
            applications.
          </p>

          <div className="mt-6 flex justify-center space-x-6">
            <a
              href={process.env.NEXT_PUBLIC_GITHUB_PROFILE || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={28} />
            </a>
          
            <a
              href={process.env.NEXT_PUBLIC_LINKEDIN_PROFILE || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={28} />
            </a>

            <a
              href={process.env.NEXT_PUBLIC_INSTAGRAM_PROFILE || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Instagram size={28} />
            </a>
          </div>
        </div>
        import Button from '@mui/material/Button'

<Button
  component="a"
  href="/cv/Alexandre-CV.pdf"
  download
  sx={{
    backgroundColor: '#2563EB',
    color: '#fff',
    textTransform: 'none',
    '&:hover': { backgroundColor: '#1D4ED8' },
  }}
>
  Download CV
</Button>

      </Box>
    </section>
  );
}
