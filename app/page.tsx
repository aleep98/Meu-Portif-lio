"use client";
import Box from "@mui/material/Box";
import { Github } from 'lucide-react';

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
     <Github />
     </div>

    </Box>
  );
}
