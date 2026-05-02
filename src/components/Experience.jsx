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
              <h4 className="text-xl font-semibold">CommerceHub</h4>
              <ul className="mt-4 text-zinc-400 space-y-2">
                <li>
                  • Built products page, cart, checkout and dashboard workflows
                  for ecommerce operations
                </li>
                <li>
                  • Implemented authentication, protected routes and
                  session-based user flows
                </li>
                <li>
                  • Integrated APIs for products, inventory, orders, payments
                  and customer management
                </li>
                <li>
                  • Developed analytics dashboards for sales, orders and
                  transaction tracking
                </li>
                <li>
                  • Improved application performance using lazy loading,
                  memoization and code splitting techniques
                </li>
                <li>
                  • Optimized rendering performance for data-heavy pages using
                  efficient state updates and memoization
                </li>
                <li>
                  • Improved responsiveness across desktop, tablet and mobile
                  devices
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800">
              <h4 className="text-xl font-semibold">FinBank</h4>
              <ul className="mt-4 text-zinc-400 space-y-2">
                <li>
                  • Developed scalable reusable UI components for banking
                  workflows and core transaction modules
                </li>
                <li>
                  • Built highly responsive interfaces with cross-browser and
                  cross-device compatibility
                </li>
                <li>
                  • Integrated secure REST APIs for accounts, transactions,
                  statements and customer operations
                </li>

                <li>
                  • Implemented dynamic forms with validations for customer
                  onboarding and service requests
                </li>
                <li>
                  • Enhanced maintainability by standardizing reusable layouts
                  and component architecture
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
                • Developed responsive dashboards for Accounts Receivable and
                Credit Management workflows
              </li>
              <li>
                • Built modules using React, TypeScript and Material UI with
                reusable component architecture
              </li>
              <li>
                • Integrated APIs for payments, collections, invoices and
                customer account data
              </li>
              <li>
                • Implemented workflow screens for approvals, aging reports and
                outstanding balances
              </li>
              <li>
                • Enhanced usability, responsiveness and cross-browser
                compatibility
              </li>
              <li>
                • Improved maintainability through modular code structure and
                scalable UI patterns
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
