import Box from "@mui/material/Box";
import { Github, Linkedin, Instagram, Download, Eye } from "lucide-react";
import Link from "next/link";
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
            className="w-40 h-40 rounded-full mx-auto mb-6 border-3 border-red-900 object-cover shadow-lg"
          />

          <p className="text-lg text-gray-300">
            Hi, My name is
            <span className="text-red-500 font-bold"> Alexandre</span>, and I'm a
          </p>

          <h1 className="text-3xl mt-4 font-bold">
            Back-end Developer
          </h1>
          <div>

          </div>
          <p className="text-sm mt-3 max-w-md mx-auto text-gray-400">
             I like understanding how things work behind the scenes
          </p>
          <Link
         href="/cv/Alexandre-CV.pdf" className="mt-6 inline-flex items-center gap-2
          px-4 py-2 rounded-md bg-gray-600 hover:bg-red-700
          text-sm font-medium text-white transition"
        >
          View CV <Eye size={18} />
        </Link>
       
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

      </Box>
    </section>
  );
}
