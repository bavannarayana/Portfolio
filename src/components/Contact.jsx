// src/components/Contact.jsx

import { MailIcon } from "lucide-react";
import { BiMapPin, BiPhone } from "react-icons/bi";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="max-w-5xl mx-auto rounded-3xl border border-zinc-800 bg-zinc-900 p-10 md:p-14">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Let’s Connect</h2>

          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
            Open to React Developer opportunities, frontend roles, and freelance
            projects. Let’s build something impactful.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-14">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MailIcon className="text-zinc-400 mt-1" size={20} />
              <div>
                <p className="text-sm text-zinc-400">Email</p>
                <a
                  href="mailto:yourmail@example.com"
                  className="text-white hover:text-zinc-300"
                >
                  k.bavannarayana@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <BiPhone className="text-zinc-400 mt-1" size={20} />
              <div>
                <p className="text-sm text-zinc-400">Phone</p>
                <a href="tel:+917013915253" className="text-white">
                  +91 7013915253
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <BiMapPin className="text-zinc-400 mt-1" size={20} />
              <div>
                <p className="text-sm text-zinc-5=400">Location</p>
                <p className="text-white">India</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <a
              href="https://www.linkedin.com/in/bavannarayana-kavarthapu"
              target="_blank"
              className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950 px-6 py-5 hover:border-white transition"
            >
              <span className="flex items-center gap-3">
                <BsLinkedin size={20} />
                LinkedIn
              </span>
              <span>↗</span>
            </a>

            <a
              href="https://github.com/bavannarayana/"
              target="_blank"
              className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950 px-6 py-5 hover:border-white transition"
            >
              <span className="flex items-center gap-3">
                <BsGithub size={20} />
                GitHub
              </span>
              <span>↗</span>
            </a>

            <a
              href="/src/assets/Bavannarayana_Frontend_Developer.pdf"
              download="Bavannarayana_Resume.pdf"
              className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950 px-6 py-5 hover:border-white transition"
            >
              <span>Download Resume</span>
              <span>↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
