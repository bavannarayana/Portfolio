// src/components/Skills.jsx
import { skills } from "../data/projectsData";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="text-center mb-14">
        <h2 className="text-5xl font-bold mb-4">Skills</h2>
        <p className="text-zinc-400 max-w-3xl mx-auto">
          The languages, tools and practices I use to build maintainable
          frontend products.
        </p>
      </div>

      <div className="flex items-center justify-center">
        <div className="grid lg:grid-cols-2 gap-8 max-w-[80%]">
          {Object.entries(skills).map(([title, list]) => (
            <div
              key={title}
              className="rounded-3xl p-8 bg-zinc-900 border border-zinc-800"
            >
              <h3 className="text-2xl font-semibold mb-6">{title}</h3>

              <div className="flex flex-wrap gap-3">
                {list.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-zinc-950 border border-zinc-800 text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
