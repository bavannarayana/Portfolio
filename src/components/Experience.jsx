export default function Experience() {
  return (
    <section id="experience" className="px-6 md:px-10 2xl:px-16 py-24">
      <div className="flex flex-col items-center">
        <h2 className="text-5xl font-bold mb-4">Experience</h2>
        <p className="text-zinc-400 mb-10">
          3.6 years delivering enterprise-grade frontend products across
          banking, ecommerce and fintech domains.
        </p>
      </div>
      <div className="space-y-8">
        <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800">
          <div className="flex flex-col md:flex-row md:justify-between gap-3">
            <div>
              <h3 className="text-3xl font-semibold">
                Tata Consultancy Services
              </h3>
              <p className="text-zinc-400">React / Frontend Developer</p>
            </div>
            <span className="text-cyan-400">3.4 Years</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800">
              <h4 className="text-xl font-semibold">FinBank</h4>
              <ul className="mt-4 text-zinc-400 space-y-2">
                <li>
                  • Developed scalable reusable UI components for banking
                  workflows
                </li>
                <li>• Built responsive interfaces across devices</li>
                <li>• Integrated APIs for core business modules</li>
                <li>• Improved forms, usability and maintainability</li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800">
              <h4 className="text-xl font-semibold">CommerceHub</h4>
              <ul className="mt-4 text-zinc-400 space-y-2">
                <li>• Built products page, cart and dashboard workflows</li>
                <li>• Implemented authentication and protected flows</li>
                <li>• Integrated APIs across modules</li>
                <li>
                  • Optimized rendering performance and reusable architecture
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800">
          <div className="flex flex-col md:flex-row md:justify-between gap-3">
            <div>
              <h3 className="text-3xl font-semibold">
                SV Algo Technologies Pvt Ltd
              </h3>
              <p className="text-zinc-400">React.js Developer</p>
            </div>
            <span className="text-cyan-400">2 Months</span>
          </div>
          <div className="mt-8 p-6 rounded-2xl bg-zinc-950 border border-zinc-800">
            <h4 className="text-xl font-semibold">FlowOne</h4>
            <ul className="mt-4 text-zinc-400 space-y-2">
              <li>
                • Developed finance dashboards for receivables and credit
                management
              </li>
              <li>• Built modules using React, TypeScript and Material UI</li>
              <li>• Implemented workflow screens and API integrations</li>
              <li>• Enhanced usability, responsiveness and maintainability</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
