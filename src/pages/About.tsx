export default function About() {
  return (
    <section className="py-12 bg-[#0D0E11] text-white" id="about">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-8 text-red-500">
          About Me
        </h3>
        <div className="max-w-3xl mx-auto text-gray-300 text-sm leading-relaxed text-center">
          <p className="mb-6">
            I am a passionate Back-end Developer with a strong focus on building scalable and efficient server-side applications.
            With experience in technologies like Node.js, React, and modern database solutions, I enjoy solving complex problems
            and delivering high-quality code.
          </p>
          <p>
            My journey in tech started with a curiosity for how things work under the hood, which led me to specialize in
            backend architecture. I am always eager to learn new tools and methodologies to improve my craft.
          </p>
        </div>
      </div>
    </section>
  );
}
