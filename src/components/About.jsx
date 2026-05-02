export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden w-full px-6 md:px-10 2xl:px-16 py-28"
    >
      <div className="absolute inset-0 bg-linear-to-r from-cyan-500/15 via-transparent to-violet-500/15 blur-3xl" />
      <h3 className="relative text-center text-4xl md:text-5xl font-bold bg-linear-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent mb-20">
        About Me
      </h3>
      <div className="flex justify-center">
        <div className="max-w-[90%] md:max-w-[80%] grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-10 text-zinc-300 text-xl leading-relaxed">
            <p>
              I’m a Frontend Developer with 3.6 years of experience building
              scalable, responsive web applications using React.js, JavaScript,
              and TypeScript. I focus on creating reusable UI systems, seamless
              user experiences, and maintainable frontend architectures for
              real-world business products.
            </p>

            <p>
              My expertise includes state management with Redux, API
              integrations, dynamic forms, dashboard development, and
              performance optimization. I enjoy turning complex workflows into
              clean, efficient interfaces that scale as products and user needs
              grow.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {[
              { value: "3+", label: "Years Experience" },
              { value: "2", label: "Delivered projects" },
              { value: "React + TS", label: "Core Stack" },
              { value: "India", label: "Based In" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-3xl min-h-40 p-6 bg-zinc-950/70 border border-zinc-800 backdrop-blur-xl flex flex-col justify-center items-center text-center hover:border-cyan-400 transition"
              >
                <div className="text-3xl md:text-4xl font-bold bg-linear-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
                  {item.value}
                </div>
                <p className="mt-4 text-zinc-400 text-lg">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
