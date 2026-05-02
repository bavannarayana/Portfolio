import { projects } from "../data/projectsData";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="w-full px-6 md:px-10 2xl:px-16 py-24">
      <h3 className="text-5xl font-bold mb-10 text-center">Projects</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden bg-linear-to-b from-zinc-900 to-zinc-950 border border-zinc-800 hover:-translate-y-2 hover:border-cyan-400 transition flex flex-col"
          >
            {/* Image */}
            <div className="h-52 w-full overflow-hidden bg-zinc-800">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="h-full w-full object-cover hover:scale-105 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-7 flex flex-col flex-1">
              <h4 className="text-2xl font-semibold">{p.title}</h4>

              <p className="mt-4 text-zinc-400 flex-1">{p.desc}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-6">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full bg-zinc-800 text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-8">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center px-4 py-3 rounded-xl bg-white text-black font-medium hover:opacity-90 transition"
                >
                  Live Demo
                </a>

                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center px-4 py-3 rounded-xl border border-zinc-700 hover:border-white transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
