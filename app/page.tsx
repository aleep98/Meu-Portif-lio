"use client";
import Box from "@mui/material/Box";
import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react'; 
import { Instagram } from 'lucide-react';

export default function Home() {
  return (
    <Box
      sx={{
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
     <div className="text-center ">
       <p className=" text-gray-300">
        Hello, World! My Name is
        <span className="text-1xl text-red-500 font-bold"> Alexandre </span> i'm a
      </p>
        <h1 className="text-3xl mt-4 flex justify-center font-bold" >
          Back-end Developer
        </h1>
        <p className="text-sm mt-3 max-w-md mx-auto text-gray-400">
          I'm passionate about creating efficient and scalable server-side
          applications.
        </p>

        {/* Icones */}
       <div className="mt-6 flex justify-center space-x-6">
         <a href="https://github.com/aleep98" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
           <Github size={28} />
         </a>
         <a href="https://www.linkedin.com/in/alexandre-passeberg-bb3585266/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
           <Linkedin size={28} />
         </a>
         <a href="https://www.instagram.com/aleep.dev/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
           <Instagram size={28} />
         </a>
       </div>
     </div>

    </Box>
  );
}
