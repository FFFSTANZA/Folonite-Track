import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { SiteLayout } from "@/components/site/SiteLayout";

const BaseUrl = "https://folonite.in";
const HeroDescription =
  "Eliminate spreadsheet chaos, stop losing assets, and cut audit preparation by 75% with the smart asset management platform designed for business teams.";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Folonite — Smart Asset Management System",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: BaseUrl,
  description: HeroDescription,
  offers: {
    "@type": "Offer",
    price: "0.00",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
  author: {
    "@type": "Person",
    name: "Karthik Lal",
    email: "mailto:support@folonite.in",
  },
  publisher: {
    "@type": "Organization",
    name: "Folonite",
    url: BaseUrl,
  },
};

export default function Website() {
  return (
    <SiteLayout>
      <Helmet>
        <title>Folonite — Smart Asset Management System</title>
        <meta name="description" content={HeroDescription} />
        <meta
          name="keywords"
          content="asset management system, asset tracking software, inventory management, audit compliance, qr code asset labels, equipment lifecycle management, facilities asset tracking, asset reporting, business asset management"
        />
        <meta name="author" content="Karthik Lal" />
        <link rel="canonical" href={BaseUrl} />
        <meta property="og:title" content="Folonite — Smart Asset Management System" />
        <meta property="og:description" content={HeroDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={BaseUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Folonite — Smart Asset Management System" />
        <meta name="twitter:description" content={HeroDescription} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="flex flex-col">
        <section id="overview" className="pt-32 pb-20 lg:pt-40">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-6 text-center">
            <span className="text-xs font-medium uppercase tracking-[0.28em] text-[#6B7280]">
              Stop losing money to poor asset management
            </span>
            <div className="mt-6 space-y-6">
              <h1 className="max-w-4xl font-serif text-[clamp(3.5rem,6vw,5rem)] font-medium leading-[1.1] tracking-[-0.5px] text-[#111111]">
                Your assets are costing you more than you think.
              </h1>
              <p className="mx-auto max-w-[700px] text-[17px] leading-[1.6] text-[#333333]">
                Every year, businesses lose 2-5% of asset value to lost equipment, duplicate purchases, and untracked maintenance. Folonite stops the bleeding—providing instant visibility, eliminating spreadsheets, and cutting audit preparation from weeks to days.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/login"
                className="inline-flex items-center justify-center rounded-full bg-[#111111] px-5 py-2.5 text-sm font-medium text-white shadow-[0_6px_18px_rgba(0,0,0,0.08)] transition-opacity hover:opacity-90"
              >
                Access the platform
              </Link>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-full bg-[#EAEAEA] px-5 py-2.5 text-sm font-medium text-[#111111] shadow-[0_6px_18px_rgba(0,0,0,0.08)] transition-opacity hover:opacity-80"
              >
                Explore capabilities
              </a>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 lg:py-28">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="max-w-2xl space-y-4">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#6B7280]">
                Built for business teams, not developers
              </p>
              <h2 className="text-3xl font-semibold text-[#111111] md:text-4xl">
                Three ways you're losing money right now—and how we stop it.
              </h2>
              <p className="text-[17px] leading-[1.6] text-[#6B7280]">
                Most organizations bleed revenue through three invisible leaks. Folonite plugs every one.
              </p>
            </div>
            <div className="mt-12 grid gap-12 md:grid-cols-3">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#111111]">You're buying what you already own</h3>
                <p className="text-[#6B7280] leading-[1.6]">
                  Departments buy equipment that sits unused elsewhere because they can't find it. This wastes 10-20% of asset budgets annually. Folonite provides instant cross-location visibility—so you never buy what you already have.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#111111]">You're preparing audits for weeks, not days</h3>
                <p className="text-[#6B7280] leading-[1.6]">
                  Physical inventory audits consume 50-100 hours per million dollars in assets. Your staff chases spreadsheets, reconciles discrepancies, and scrambles for evidence. Folonite cuts audit prep by 75% with QR scanning and digital verification—what takes weeks now takes days.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#111111]">You're losing assets you can't track</h3>
                <p className="text-[#6B7280] leading-[1.6]">
                  Poor tracking results in 2-5% annual asset loss to theft, misplacement, and unrecorded transfers. For a $10M portfolio, that's $200,000-$500,000 walking out the door. QR labeling, location tracking, and assignment accountability reduce losses by 80%.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-[1fr,1.2fr]">
              <div className="space-y-6">
                <span className="text-xs font-medium uppercase tracking-[0.28em] text-[#2563EB]">
                  Real-time portfolio visibility
                </span>
                <h2 className="text-3xl font-semibold text-[#111111] md:text-4xl">
                  Know exactly what you own, where it is, and what it costs.
                </h2>
                <p className="text-[17px] leading-[1.6] text-[#6B7280]">
                  Stop guessing about asset utilization, maintenance needs, and compliance status. One dashboard gives you complete visibility across every location—instantly.
                </p>
              </div>
              <div className="rounded-3xl bg-[#F3F4F6] p-6 lg:p-8">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    { label: "Assets tracked", value: "14,832", trend: "+12%" },
                    { label: "Audit completion", value: "96%", trend: "On track" },
                    { label: "Active tickets", value: "38", trend: "-9%" },
                    { label: "Compliance score", value: "98.7", trend: "Stable" },
                  ].map((metric) => (
                    <div
                      key={metric.label}
                      className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)] h-full"
                    >
                      <div className="flex items-center justify-between text-xs font-medium text-[#6B7280] mb-4">
                        <span>{metric.label}</span>
                        <span className="text-[#2563EB]">{metric.trend}</span>
                      </div>
                      <p className="text-2xl font-semibold text-[#111111]">{metric.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="modules" className="py-20 lg:py-28">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="mb-12 max-w-2xl space-y-4">
              <h2 className="text-3xl font-semibold text-[#111111] md:text-4xl">One platform for every asset need</h2>
              <p className="text-[17px] leading-[1.6] text-[#6B7280]">
                Replace spreadsheets, paper files, and fragmented systems with one unified platform that grows with your business.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Asset registry",
                  copy: "Every equipment, tool, and furniture item tracked with ownership history, warranty details, and depreciation data. Know exactly what you own—down to the serial number.",
                },
                {
                  title: "Property directory",
                  copy: "Organize assets across all your locations—offices, warehouses, stores, and facilities. Grant location-based access so teams see only what's relevant to them.",
                },
                {
                  title: "Audit center",
                  copy: "Cut audit preparation from weeks to days. QR scanning, digital verification, and automatic evidence capture mean you're always audit-ready without the scramble.",
                },
                {
                  title: "Maintenance & repairs",
                  copy: "Log repair requests, track maintenance schedules, and never miss preventive service again. Extend equipment life by 15-25% through timely maintenance.",
                },
                {
                  title: "Compliance reports",
                  copy: "Generate depreciation schedules, compliance exports, and audit summaries instantly. Finance gets reliable data for reporting without chasing spreadsheets.",
                },
                {
                  title: "Approvals & controls",
                  copy: "Route sensitive actions through proper authorization channels. Two-stage approvals, audit trails, and documented decisions prevent unauthorized changes.",
                },
              ].map((module) => (
                <div
                  key={module.title}
                  className="rounded-2xl bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
                >
                  <h4 className="text-lg font-semibold text-[#111111]">{module.title}</h4>
                  <p className="mt-3 text-sm leading-[1.6] text-[#6B7280]">{module.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="comparison" className="py-20 lg:py-28">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="mb-12 max-w-2xl space-y-4">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#6B7280]">
                Why your spreadsheets are failing you
              </p>
              <h2 className="text-3xl font-semibold text-[#111111] md:text-4xl">
                Excel was built for calculations. Asset management is a business process.
              </h2>
              <p className="text-[17px] leading-[1.6] text-[#6B7280]">
                Spreadsheets can't track QR codes, enforce approvals, or provide real-time visibility across locations. Here's what you're missing by staying in Excel.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#E5E7EB]">
                      <th className="py-4 pr-6 text-left text-sm font-medium text-[#6B7280]">Capability</th>
                      <th className="py-4 px-6 text-left text-sm font-medium text-[#6B7280]">Excel / Sheets</th>
                      <th className="py-4 pl-6 text-left text-sm font-medium text-[#2563EB]">Folonite</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        feature: "Real-time collaboration",
                        excel: "Version conflicts, overwritten data",
                        folonite: "Live updates with conflict-free editing",
                      },
                      {
                        feature: "QR code generation",
                        excel: "Manual creation, no native support",
                        folonite: "Bulk QR generation with one click",
                      },
                      {
                        feature: "Audit trail",
                        excel: "No history tracking",
                        folonite: "Complete audit log for every change",
                      },
                      {
                        feature: "Mobile access",
                        excel: "Limited, formatting breaks",
                        folonite: "Native mobile experience with scanning",
                      },
                      {
                        feature: "Role-based access",
                        excel: "File-level permissions only",
                        folonite: "Granular field-level permissions",
                      },
                      {
                        feature: "Depreciation tracking",
                        excel: "Manual formulas, error-prone",
                        folonite: "Automated calculations with reports",
                      },
                      {
                        feature: "Integration APIs",
                        excel: "Limited connectivity",
                        folonite: "RESTful APIs, webhooks, exports",
                      },
                      {
                        feature: "Data validation",
                        excel: "Basic cell rules",
                        folonite: "Schema-enforced, relationship-aware",
                      },
                    ].map((row, idx) => (
                      <tr key={row.feature} className={idx !== 7 ? "border-b border-[#F3F4F6]" : ""}>
                        <td className="py-5 pr-6 text-sm font-medium text-[#111111]">{row.feature}</td>
                        <td className="py-5 px-6 text-sm text-[#6B7280]">{row.excel}</td>
                        <td className="py-5 pl-6 text-sm font-medium text-[#111111]">
                          <span className="inline-flex items-center gap-2">
                            <svg className="h-4 w-4 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {row.folonite}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section id="roi" className="py-20 lg:py-28 bg-[#F3F4F6]">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="mb-12 max-w-2xl space-y-4">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#6B7280]">
                Real return on investment
              </p>
              <h2 className="text-3xl font-semibold text-[#111111] md:text-4xl">
                The savings start immediately. And they compound.
              </h2>
              <p className="text-[17px] leading-[1.6] text-[#6B7280]">
                Organizations implementing Folonite see ROI within 6-12 months through measurable cost avoidance, efficiency gains, and risk reduction.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  metric: "$80K-$180K",
                  label: "Saved annually",
                  description: "Eliminate 10-20% duplicate purchases by knowing what you already own across all locations.",
                },
                {
                  metric: "75%",
                  label: "Faster audits",
                  description: "Cut audit preparation from 120+ hours to 30 hours. That's 90 hours saved per audit cycle.",
                },
                {
                  metric: "$120K-$400K",
                  label: "Loss prevention",
                  description: "Reduce 2-5% annual asset loss by 80%. For a $10M portfolio, that's $200K-$400K preserved.",
                },
                {
                  metric: "15-25%",
                  label: "Longer asset life",
                  description: "Preventive maintenance extends equipment lifespan through timely service tracking.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
                >
                  <p className="text-4xl font-semibold text-[#2563EB]">{item.metric}</p>
                  <h4 className="mt-3 text-lg font-semibold text-[#111111]">{item.label}</h4>
                  <p className="mt-2 text-sm leading-[1.6] text-[#6B7280]">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-2xl bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
              <div className="grid gap-10 lg:grid-cols-2">
                <div>
                  <h3 className="text-xl font-semibold text-[#111111]">Calculate your potential savings</h3>
                  <p className="mt-4 text-[15px] leading-[1.6] text-[#6B7280]">
                    For an organization with $10M in assets and 5 locations, typical annual savings include: $100K-$180K from duplicate purchase prevention, $200K-$400K from loss prevention, $75K-$125K from maintenance optimization, and $2K-$5K per $1M of assets from reduced audit time. Most organizations achieve full ROI within 6-12 months.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-[#111111]">Time savings per task</h4>
                  {[
                    { label: "Annual audit preparation", excel: "120+ hours", folonite: "30 hours" },
                    { label: "Monthly reconciliation", excel: "16 hours", folonite: "2 hours" },
                    { label: "Asset discovery & tagging", excel: "40 hours", folonite: "8 hours" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between rounded-xl bg-[#F3F4F6] px-5 py-4">
                      <span className="text-sm font-medium text-[#111111]">{item.label}</span>
                      <div className="flex items-center gap-6">
                        <span className="text-sm text-[#6B7280]">{item.excel}</span>
                        <svg className="h-4 w-4 text-[#6B7280]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                        <span className="text-sm font-semibold text-[#2563EB]">{item.folonite}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="support" className="py-20 lg:py-28">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold text-[#111111]">Built for business teams</h3>
                <ul className="mt-6 space-y-4 text-[#6B7280]">
                  <li className="flex gap-2">
                    <span className="font-semibold text-[#111111]">No technical expertise needed:</span> Intuitive interfaces designed for facilities managers, finance staff, and operational teams—not developers.
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold text-[#111111]">Mobile-first operations:</span> QR scanning and field updates work on any device with a camera. No expensive hardware required.
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold text-[#111111]">Complete accountability:</span> Every status change, approval, and transfer is captured in audit trails for compliance and review.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#111111]">Implementation support</h3>
                <div className="mt-6 space-y-4 text-[#6B7280]">
                  <p>
                    Email{" "}
                    <a href="mailto:support@folonite.in" className="text-[#2563EB] hover:opacity-70">
                      support@folonite.in
                    </a>{" "}
                    for implementation planning, onboarding guidance, or security reviews.
                  </p>
                  <p>
                    We provide rollout checklists, asset import templates, and dedicated stakeholder walkthroughs. Most implementations complete in 4-8 weeks with minimal IT involvement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="demo" className="py-20 lg:py-28">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="rounded-3xl bg-white p-10 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
              <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
                <div>
                  <h2 className="text-3xl font-semibold text-[#111111] md:text-4xl">
                    Start seeing ROI today.
                  </h2>
                  <p className="mt-6 text-[17px] leading-[1.6] text-[#6B7280]">
                    Explore the demo environment and see how Folonite can transform your asset management. Share it with your finance, operations, and audit stakeholders to build the case for implementation.
                  </p>
                  <Link
                    to="/demo/login"
                    className="mt-8 inline-flex items-center justify-center rounded-full bg-[#111111] px-5 py-2.5 text-sm font-medium text-white shadow-[0_6px_18px_rgba(0,0,0,0.08)] transition-opacity hover:opacity-90"
                  >
                    Access demo environment
                  </Link>
                </div>
                <div className="rounded-2xl bg-[#F3F4F6] p-6">
                  <h3 className="text-sm font-semibold text-[#111111]">Demo credentials</h3>
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center justify-between rounded-xl bg-white px-4 py-3 text-sm">
                      <span className="text-[#6B7280]">Email</span>
                      <code className="font-mono font-semibold text-[#111111]">demo@folonite.in</code>
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-white px-4 py-3 text-sm">
                      <span className="text-[#6B7280]">Password</span>
                      <code className="font-mono font-semibold text-[#111111]">demo@123</code>
                    </div>
                  </div>
                  <p className="mt-4 text-xs text-[#6B7280]">
                    Demo data resets regularly to keep the experience clean and relevant.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
