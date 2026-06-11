export default function About() {
  return (
    <section id="about" className="relative py-24 bg-[#0D0E11]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            About Me
          </h2>

          <p className="text-slate-300 leading-relaxed">
            Developer with experience in web projects and a focus on building back-end applications using Java and Node.js.
             I am interested in developing scalable solutions, APIs, and business rule-driven systems, always seeking to improve my technical skills and learn new technologies.
              Proactive and a quick learner, committed to code quality and with a strong interest in working and growing professionally in the software development field.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {[
            { name: "Node.js", color: "text-green-500" },
            { name: "Java", color: "text-orange-500" },
            { name: "SpringBoot", color: "text-green-500" },
            { name: "Next.js", color: "text-slate-200" },
            { name: "Express", color: "text-slate-300" },
            { name: "Prisma", color: "text-indigo-400" },
            { name: "MongoDB", color: "text-green-600" },
            { name: "PostgreSQL", color: "text-blue-400" },
          ].map((tech) => (
            <div
              key={tech.name}
              className="flex items-center justify-center
              h-20 rounded-xl bg-white/5 border border-white/10
              hover:border-red-500/50 transition"
            >
              <span className={`font-medium ${tech.color}`}>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
