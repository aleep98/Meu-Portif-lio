import {
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiTailwindcss,
  SiMui,
  SiGit,
  SiGithub,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <SiReact size={48} /> },
  { name: "Next.js", icon: <SiNextdotjs size={48} /> },
  { name: "TypeScript", icon: <SiTypescript size={48} /> },
  { name: "JavaScript", icon: <SiJavascript size={48} /> },
  { name: "Node.js", icon: <SiNodedotjs size={48} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={48} /> },
  { name: "Material UI", icon: <SiMui size={48} /> },
  { name: "HTML5", icon: <SiHtml5 size={48} /> },
  { name: "CSS3", icon: <SiCss3 size={48} /> },
  { name: "Git", icon: <SiGit size={48} /> },
  { name: "GitHub", icon: <SiGithub size={48} /> },

];

export default function Skills() {
  return (
    <section className="py-12 bg-[#0D0E11] text-white" id="skills">
      <div className="container mx-auto px-4">
        <h3 className="text-2xS font-bold text-center mb-12 text-red-500">
          My Skills
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center justify-center p-4 bg-gray-800/40 rounded-lg transition-transform transform hover:scale-110 hover:bg-gray-700/60">
              <div className="text-gray-400 mb-3">{skill.icon}</div>
              <p className="text-sm font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}