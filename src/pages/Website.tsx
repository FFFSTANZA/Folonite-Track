import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { SiteLayout } from "@/components/site/SiteLayout";

const BaseUrl = "https://folonite.in";
const HeroDescription =
  "Folonite brings asset tracking, audit readiness, and compliance reporting into one calm workspace for facilities and finance teams.";

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
          content="asset management software, qr code asset tracking, supabase asset system, equipment tracking, facilities management, audit-ready reporting, open source asset platform"
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
              Smart asset management
            </span>
            <div className="mt-6 space-y-6">
              <h1 className="max-w-4xl font-serif text-[clamp(3.5rem,6vw,5rem)] font-medium leading-[1.1] tracking-[-0.5px] text-[#111111]">
                Asset operations, beautifully organized.
              </h1>
              <p className="mx-auto max-w-[700px] text-[17px] leading-[1.6] text-[#333333]">
                Folonite keeps every asset, audit, and approval in one place. Track ownership in real time,
                verify inventory with QR workflows, and keep finance aligned without the spreadsheet chaos.
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
                Built for high-trust teams
              </p>
              <h2 className="text-3xl font-semibold text-[#111111] md:text-4xl">
                Everything you need to run asset programs at scale.
              </h2>
              <p className="text-[17px] leading-[1.6] text-[#6B7280]">
                Keep operations, finance, and audit teams in lockstep with shared visibility and automated
                audit trails.
              </p>
            </div>
            <div className="mt-12 grid gap-12 md:grid-cols-3">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#111111]">Lifecycle clarity</h3>
                <p className="text-[#6B7280] leading-[1.6]">
                  See procurement, assignments, maintenance, and end-of-life records in one timeline for
                  every asset.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#111111]">Audit-ready verification</h3>
                <p className="text-[#6B7280] leading-[1.6]">
                  Plan audits by location, scan assets with QR codes, and close gaps with evidence captured
                  in minutes.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#111111]">Compliance reporting</h3>
                <p className="text-[#6B7280] leading-[1.6]">
                  Generate depreciation schedules, compliance exports, and audit summaries that finance can
                  rely on.
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
                  Dashboard preview
                </span>
                <h2 className="text-3xl font-semibold text-[#111111] md:text-4xl">
                  See the health of your asset portfolio at a glance.
                </h2>
                <p className="text-[17px] leading-[1.6] text-[#6B7280]">
                  Live metrics surface what matters most: utilization, audit progress, and outstanding
                  maintenance, all in a single view.
                </p>
              </div>
              <div className="rounded-3xl bg-[#F3F4F6] p-8">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    { label: "Assets tracked", value: "14,832", trend: "+12%" },
                    { label: "Audit completion", value: "96%", trend: "On track" },
                    { label: "Active tickets", value: "38", trend: "-9%" },
                    { label: "Compliance score", value: "98.7", trend: "Stable" },
                  ].map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-2xl bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
                    >
                      <div className="flex items-center justify-between text-xs font-medium text-[#6B7280]">
                        <span>{metric.label}</span>
                        <span className="text-[#2563EB]">{metric.trend}</span>
                      </div>
                      <p className="mt-4 text-2xl font-semibold text-[#111111]">{metric.value}</p>
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
              <h2 className="text-3xl font-semibold text-[#111111] md:text-4xl">System modules</h2>
              <p className="text-[17px] leading-[1.6] text-[#6B7280]">
                Pick the modules you need today and grow into new workflows without replatforming your
                asset register.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Asset registry",
                  copy: "Centralize IT and fixed assets with QR labels, ownership history, and depreciation fields.",
                },
                {
                  title: "Property directory",
                  copy: "Organize assets by site, branch, or facility with map-ready location metadata.",
                },
                {
                  title: "Audit center",
                  copy: "Coordinate verification drives, capture evidence, and resolve missing items fast.",
                },
                {
                  title: "Help desk",
                  copy: "Log repairs and requests with SLA awareness and a clear status trail.",
                },
                {
                  title: "Analytics",
                  copy: "Track asset value, utilization trends, and compliance status in real time.",
                },
                {
                  title: "Approvals",
                  copy: "Route sensitive actions through role-based approvals and audit-ready signoffs.",
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

        <section id="support" className="py-20 lg:py-28">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold text-[#111111]">Reliable by design</h3>
                <ul className="mt-6 space-y-4 text-[#6B7280]">
                  <li className="flex gap-2">
                    <span className="font-semibold text-[#111111]">Testing:</span> Core modules ship with component-level tests for every release.
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold text-[#111111]">Accessibility:</span> Keyboard-first flows and ARIA defaults keep teams efficient.
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold text-[#111111]">Observability:</span> Every status change and approval is captured in audit trails.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#111111]">Support & governance</h3>
                <div className="mt-6 space-y-4 text-[#6B7280]">
                  <p>
                    Email{" "}
                    <a href="mailto:support@folonite.in" className="text-[#2563EB] hover:opacity-70">
                      support@folonite.in
                    </a>{" "}
                    for implementation planning, onboarding guidance, or security reviews.
                  </p>
                  <p>
                    We provide rollout checklists, asset import templates, and dedicated stakeholder
                    walkthroughs.
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
                    See Folonite in action.
                  </h2>
                  <p className="mt-6 text-[17px] leading-[1.6] text-[#6B7280]">
                    Experience the full workflow in the demo environment and share it with your finance,
                    operations, or audit stakeholders.
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
