import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen w-full px-6 md:px-10 2xl:px-16 flex items-center justify-center text-center">
      <div className="absolute inset-0 bg-linear-to-r from-cyan-500/15 via-transparent to-violet-500/15 blur-3xl" />
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,#22d3ee_0,transparent_12%),radial-gradient(circle_at_80%_70%,#8b5cf6_0,transparent_14%),radial-gradient(circle_at_50%_50%,#2563eb_0,transparent_10%)]" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        <p className="text-zinc-300 text-5xl md:text-6xl xl:text-7xl font-bold leading-tight">
          Hi, I’m{" "}
          <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
            Bavannarayana
          </span>
          <br />
          <span className="bg-linear-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
            Kavarthau
          </span>
        </p>
        <p className="mt-8 text-xl md:text-2xl text-zinc-400 max-w-4xl mx-auto leading-relaxed">
          Frontend developer with 3.6 years of experience building scalable,
          responsive web applications using React, Redux, TypeScript and modern
          JavaScript.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center items-center">
          <a
            href="#projects"
            className="px-8 py-3 rounded-2xl font-semibold text-lg bg-linear-to-r from-cyan-400 to-violet-500 hover:scale-105 transition shadow-2xl shadow-cyan-500/20"
          >
            View Projects
          </a>
          <a
            href="/src/assets/Bavannarayana_Frontend_Developer.pdf"
            download="Bavannarayana_kavarthapu_Resume.pdf"
            className="px-8 py-3 rounded-2xl font-semibold text-lg bg-zinc-900/80 border border-zinc-800 hover:border-cyan-400 transition"
          >
            Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}
