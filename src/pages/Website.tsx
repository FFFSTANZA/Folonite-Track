import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useState } from "react";

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
  const [activeTab, setActiveTab] = useState("overview");

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
            <span className="text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
              Smart asset management
            </span>
            <div className="mt-6 space-y-6">
              <h1 className="max-w-4xl font-serif text-[clamp(3.5rem,6vw,5rem)] font-medium leading-[1.1] tracking-[-0.5px] text-foreground">
                Asset operations, beautifully organized.
              </h1>
              <p className="mx-auto max-w-[700px] text-[17px] leading-[1.6] text-muted-foreground">
                Folonite keeps every asset, audit, and approval in one place. Track ownership in real time,
                verify inventory with QR workflows, and keep finance aligned without the spreadsheet chaos.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/login"
                className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft transition-opacity hover:opacity-90"
              >
                Access the platform
              </Link>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-full bg-muted px-5 py-2.5 text-sm font-medium text-foreground shadow-soft transition-opacity hover:opacity-80"
              >
                Explore capabilities
              </a>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 lg:py-28">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="max-w-2xl space-y-4">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
                Built for high-trust teams
              </p>
              <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
                Everything you need to run asset programs at scale.
              </h2>
              <p className="text-[17px] leading-[1.6] text-muted-foreground">
                Keep operations, finance, and audit teams in lockstep with shared visibility and automated
                audit trails.
              </p>
            </div>
            <div className="mt-12 grid gap-12 md:grid-cols-3">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Lifecycle clarity</h3>
                <p className="text-muted-foreground leading-[1.6]">
                  See procurement, assignments, maintenance, and end-of-life records in one timeline for
                  every asset.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Audit-ready verification</h3>
                <p className="text-muted-foreground leading-[1.6]">
                  Plan audits by location, scan assets with QR codes, and close gaps with evidence captured
                  in minutes.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Compliance reporting</h3>
                <p className="text-muted-foreground leading-[1.6]">
                  Generate depreciation schedules, compliance exports, and audit summaries that finance can
                  rely on.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="mb-8 space-y-4">
              <span className="text-xs font-medium uppercase tracking-[0.28em] text-primary">
                Dashboard preview
              </span>
              <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
                See the health of your asset portfolio at a glance.
              </h2>
              <p className="text-[17px] leading-[1.6] text-muted-foreground">
                Live metrics surface what matters most: utilization, audit progress, and outstanding
                maintenance, all in a single view.
              </p>
            </div>
            <div className="rounded-3xl bg-muted/30 p-6 lg:p-8">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="inline-flex h-10 items-center justify-center rounded-lg bg-card p-1 text-muted-foreground mb-6 shadow-sm">
                  <TabsTrigger
                    value="overview"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm"
                  >
                    Overview
                  </TabsTrigger>
                  <TabsTrigger
                    value="assets"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm"
                  >
                    Assets
                  </TabsTrigger>
                  <TabsTrigger
                    value="audit"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm"
                  >
                    Audit
                  </TabsTrigger>
                  <TabsTrigger
                    value="tickets"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm"
                  >
                    Tickets
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-0">
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                      { label: "Assets tracked", value: "14,832", trend: "+12%" },
                      { label: "Audit completion", value: "96%", trend: "On track" },
                      { label: "Active tickets", value: "38", trend: "-9%" },
                      { label: "Compliance score", value: "98.7", trend: "Stable" },
                    ].map((metric) => (
                      <div
                        key={metric.label}
                        className="flex flex-col justify-between rounded-2xl bg-card p-5 shadow-medium h-full min-h-[120px]"
                      >
                        <div className="flex items-start justify-between">
                          <span className="text-xs font-medium text-muted-foreground">{metric.label}</span>
                          <span className="text-xs font-semibold text-primary">{metric.trend}</span>
                        </div>
                        <p className="mt-4 text-2xl font-semibold text-foreground">{metric.value}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="assets" className="mt-0">
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                      { label: "Total assets", value: "14,832", icon: "📦" },
                      { label: "By category", value: "8", icon: "📂" },
                      { label: "By location", value: "12", icon: "📍" },
                      { label: "Active", value: "12,456", icon: "✅" },
                      { label: "Under maintenance", value: "1,234", icon: "🔧" },
                      { label: "Retired", value: "1,142", icon: "🗑️" },
                    ].map((metric) => (
                      <div
                        key={metric.label}
                        className="flex items-center gap-4 rounded-2xl bg-card p-5 shadow-medium h-full"
                      >
                        <span className="text-2xl">{metric.icon}</span>
                        <div className="flex-1">
                          <p className="text-xs font-medium text-muted-foreground">{metric.label}</p>
                          <p className="mt-1 text-xl font-semibold text-foreground">{metric.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="audit" className="mt-0">
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                      { label: "Active audits", value: "3", status: "In progress" },
                      { label: "Completion rate", value: "94%", status: "On track" },
                      { label: "Items verified", value: "13,942", status: "+8%" },
                      { label: "Discrepancies", value: "24", status: "Attention" },
                    ].map((metric) => (
                      <div
                        key={metric.label}
                        className="flex flex-col justify-between rounded-2xl bg-card p-5 shadow-medium h-full min-h-[120px]"
                      >
                        <div className="flex items-start justify-between">
                          <span className="text-xs font-medium text-muted-foreground">{metric.label}</span>
                          <span className={`text-xs font-semibold ${
                            metric.status === "Attention" ? "text-amber-600" :
                            metric.status === "On track" ? "text-emerald-600" :
                            "text-primary"
                          }`}>{metric.status}</span>
                        </div>
                        <p className="mt-4 text-2xl font-semibold text-foreground">{metric.value}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="tickets" className="mt-0">
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                      { label: "Open tickets", value: "38", priority: "High: 12" },
                      { label: "In progress", value: "24", priority: "Medium: 15" },
                      { label: "Resolved (7d)", value: "156", priority: "Low: 11" },
                      { label: "Avg. response", value: "2.4h", priority: "Target: 4h" },
                      { label: "SLA compliance", value: "98%", priority: "Above target" },
                      { label: "Escalated", value: "3", priority: "Requires action" },
                    ].map((metric) => (
                      <div
                        key={metric.label}
                        className="flex flex-col justify-between rounded-2xl bg-card p-5 shadow-medium h-full min-h-[120px]"
                      >
                        <div className="flex items-start justify-between">
                          <span className="text-xs font-medium text-muted-foreground">{metric.label}</span>
                          <span className="text-xs font-semibold text-primary">{metric.priority}</span>
                        </div>
                        <p className="mt-4 text-2xl font-semibold text-foreground">{metric.value}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <section id="modules" className="py-20 lg:py-28">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="mb-12 max-w-2xl space-y-4">
              <h2 className="text-3xl font-semibold text-foreground md:text-4xl">System modules</h2>
              <p className="text-[17px] leading-[1.6] text-muted-foreground">
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
                  className="rounded-2xl bg-card p-6 shadow-medium"
                >
                  <h4 className="text-lg font-semibold text-foreground">{module.title}</h4>
                  <p className="mt-3 text-sm leading-[1.6] text-muted-foreground">{module.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="support" className="py-20 lg:py-28">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold text-foreground">Reliable by design</h3>
                <ul className="mt-6 space-y-4 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="font-semibold text-foreground">Testing:</span> Core modules ship with component-level tests for every release.
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold text-foreground">Accessibility:</span> Keyboard-first flows and ARIA defaults keep teams efficient.
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold text-foreground">Observability:</span> Every status change and approval is captured in audit trails.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Support & governance</h3>
                <div className="mt-6 space-y-4 text-muted-foreground">
                  <p>
                    Email{" "}
                    <a href="mailto:support@folonite.in" className="text-primary hover:opacity-70">
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
            <div className="rounded-3xl bg-card p-10 shadow-medium">
              <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
                <div>
                  <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
                    See Folonite in action.
                  </h2>
                  <p className="mt-6 text-[17px] leading-[1.6] text-muted-foreground">
                    Experience the full workflow in the demo environment and share it with your finance,
                    operations, or audit stakeholders.
                  </p>
                  <Link
                    to="/demo/login"
                    className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft transition-opacity hover:opacity-90"
                  >
                    Access demo environment
                  </Link>
                </div>
                <div className="rounded-2xl bg-muted/30 p-6">
                  <h3 className="text-sm font-semibold text-foreground">Demo credentials</h3>
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center justify-between rounded-xl bg-card px-4 py-3 text-sm">
                      <span className="text-muted-foreground">Email</span>
                      <code className="font-mono font-semibold text-foreground">demo@folonite.in</code>
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-card px-4 py-3 text-sm">
                      <span className="text-muted-foreground">Password</span>
                      <code className="font-mono font-semibold text-foreground">demo@123</code>
                    </div>
                  </div>
                  <p className="mt-4 text-xs text-muted-foreground">
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
