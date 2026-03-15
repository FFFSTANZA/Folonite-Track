import { Helmet } from "react-helmet-async";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Link } from "react-router-dom";

const BaseUrl = "https://folonite.in/guide";
const MetaDescription = "Complete user guide for Folonite — Smart Asset Management System. Learn how to track assets, manage audits, and collaborate effectively.";

const quickStartSteps = [
  {
    step: "01",
    title: "Log In",
    description: "Use your email and password to access the system. Contact your admin if you need account access.",
  },
  {
    step: "02",
    title: "Explore the Dashboard",
    description: "Review your metrics, check recent activity, and familiarize yourself with the quick actions.",
  },
  {
    step: "03",
    title: "Check Your Access",
    description: "Navigate to different modules to see what's available based on your role and permissions.",
  },
  {
    step: "04",
    title: "Try a Quick Action",
    description: "Create a test asset or explore existing records to get comfortable with the interface.",
  },
];

const roleCards = [
  {
    role: "Admin",
    description: "Full system access with complete control over users, settings, and configurations.",
    capabilities: ["Create and manage users", "Configure system settings", "Access all modules", "Generate all reports", "Manage approvals"],
  },
  {
    role: "Manager",
    description: "Department-level oversight with audit and reporting capabilities.",
    capabilities: ["Manage assigned properties", "Run audit sessions", "Generate reports", "Approve changes", "View team assets"],
  },
  {
    role: "User",
    description: "Operational access for day-to-day asset management tasks.",
    capabilities: ["Add and edit assets", "Generate QR codes", "Create tickets", "View assigned assets", "Scan QR codes"],
  },
];

const coreConcepts = [
  {
    title: "Assets",
    description: "Physical items being tracked with rich metadata including status, ownership, procurement details, and lifecycle information.",
  },
  {
    title: "Properties",
    description: "Physical locations or facilities where assets are stored. Assets are organized by property for easier management and auditing.",
  },
  {
    title: "Departments",
    description: "Organizational units within properties that help scope access and organize assets by functional areas.",
  },
  {
    title: "QR Codes",
    description: "Physical labels generated for each asset that enable quick identification and mobile scanning for audits and lookups.",
  },
  {
    title: "Tickets",
    description: "Maintenance and support requests that track issues from creation through resolution with full comment history.",
  },
  {
    title: "Audits",
    description: "Compliance verification processes that verify asset existence, condition, and location against the system records.",
  },
];

const interfaceElements = [
  {
    element: "Left Navigation Panel",
    description: "Access all modules from the collapsible sidebar. The menu adapts based on your role and permissions.",
  },
  {
    element: "Top Bar",
    description: "Contains user profile menu, notifications bell, theme toggle, and the global search/command palette.",
  },
  {
    element: "Dashboard Widgets",
    description: "Configurable cards showing key metrics and recent activity relevant to your role.",
  },
  {
    element: "Responsive Layout",
    description: "The interface automatically adapts for desktop, tablet, and mobile views while maintaining full functionality.",
  },
];

const dashboardFeatures = [
  {
    title: "Quick Actions",
    description: "One-click access to common tasks: create assets, raise tickets, and start audit sessions.",
  },
  {
    title: "Metric Cards",
    description: "At-a-glance view of total assets, active tickets, audit readiness, and compliance status.",
  },
  {
    title: "Activity Feed",
    description: "Real-time stream of recent system events including asset changes, ticket updates, and audit activities.",
  },
  {
    title: "Navigation Breadcrumbs",
    description: "Track your navigation history and easily jump back to previous pages or sections.",
  },
];

const mobileFeatures = [
  {
    title: "Install as App",
    description: "Add Folonite to your home screen for quick access without opening the browser each time.",
  },
  {
    title: "QR Scanning",
    description: "Use your device camera to scan asset QR codes for instant lookup and verification.",
  },
  {
    title: "Offline Access",
    description: "View cached asset lists even without connectivity. Changes sync automatically when back online.",
  },
  {
    title: "Field Operations",
    description: "Perform audits, update asset status, and create tickets directly from mobile devices.",
  },
];

export default function Guide() {
  return (
    <SiteLayout>
      <Helmet>
        <title>User Guide — Folonite Help Center</title>
        <meta name="description" content={MetaDescription} />
        <link rel="canonical" href={BaseUrl} />
        <meta property="og:title" content="User Guide — Folonite Help Center" />
        <meta property="og:description" content={MetaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={BaseUrl} />
      </Helmet>

      <div className="flex flex-col">
        {/* Hero */}
        <section id="overview" className="pt-32 pb-20 lg:pt-40">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-6 text-center">
            <span className="text-xs font-medium uppercase tracking-[0.28em] text-[#6B7280]">
              Phase 1: Getting Started
            </span>
            <div className="mt-6 space-y-6">
              <h1 className="max-w-4xl font-serif text-[clamp(3rem,5vw,4.5rem)] font-medium leading-[1.1] tracking-[-0.5px] text-[#111111]">
                Folonite User Guide
              </h1>
              <p className="mx-auto max-w-[700px] text-[17px] leading-[1.6] text-[#333333]">
                Everything you need to know to get started with Folonite — from navigating the interface to understanding your role and permissions.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#quickstart"
                className="inline-flex items-center justify-center rounded-full bg-[#111111] px-5 py-2.5 text-sm font-medium text-white shadow-[0_6px_18px_rgba(0,0,0,0.08)] transition-opacity hover:opacity-90"
              >
                Start Learning
              </a>
              <Link
                to="/help"
                className="inline-flex items-center justify-center rounded-full bg-[#EAEAEA] px-5 py-2.5 text-sm font-medium text-[#111111] shadow-[0_6px_18px_rgba(0,0,0,0.08)] transition-opacity hover:opacity-80"
              >
                Help Center
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section id="quickstart" className="py-20 lg:py-28">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="mb-12 max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#6B7280]">
                15-Minute Setup
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-[#111111] md:text-4xl">
                Quick Start Guide
              </h2>
              <p className="mt-4 text-[17px] leading-[1.6] text-[#6B7280]">
                Get up and running with Folonite in four simple steps.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {quickStartSteps.map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
                >
                  <p className="text-3xl font-semibold text-[#2563EB]">{item.step}</p>
                  <h4 className="mt-4 text-lg font-semibold text-[#111111]">{item.title}</h4>
                  <p className="mt-2 text-sm leading-[1.6] text-[#6B7280]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interface Section */}
        <section id="interface" className="py-20 lg:py-28 bg-[#F3F4F6]">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="mb-12 max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#6B7280]">
                Interface Overview
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-[#111111] md:text-4xl">
                Understanding the Folonite Interface
              </h2>
              <p className="mt-4 text-[17px] leading-[1.6] text-[#6B7280]">
                The Folonite interface is designed for clarity and efficiency. Here is what you'll find on every screen.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {interfaceElements.map((item) => (
                <div
                  key={item.element}
                  className="rounded-2xl bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
                >
                  <h4 className="text-lg font-semibold text-[#111111]">{item.element}</h4>
                  <p className="mt-2 text-sm leading-[1.6] text-[#6B7280]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Roles Section */}
        <section id="roles" className="py-20 lg:py-28">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="mb-12 max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#6B7280]">
                Access Control
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-[#111111] md:text-4xl">
                Understanding User Roles
              </h2>
              <p className="mt-4 text-[17px] leading-[1.6] text-[#6B7280]">
                Folonite uses role-based access control to ensure users only see and modify what they're authorized for.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {roleCards.map((role) => (
                <div
                  key={role.role}
                  className="rounded-2xl bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
                >
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#2563EB] bg-[#EFF6FF] px-3 py-1 rounded-full">
                    {role.role}
                  </span>
                  <p className="mt-4 text-sm leading-[1.6] text-[#6B7280]">{role.description}</p>
                  <ul className="mt-4 space-y-2">
                    {role.capabilities.map((cap) => (
                      <li key={cap} className="flex items-center gap-2 text-sm text-[#6B7280]">
                        <svg className="h-4 w-4 text-[#2563EB] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-2xl bg-[#F3F4F6] p-8">
              <h3 className="text-xl font-semibold text-[#111111]">Permission Scoping</h3>
              <p className="mt-4 text-[15px] leading-[1.6] text-[#6B7280]">
                Beyond role-based access, Folonite supports property and department-level scoping. 
                This means a Manager might only see assets for specific properties they're assigned to, 
                while an Admin sees everything. Users can be granted access to multiple properties and 
                departments as needed.
              </p>
            </div>
          </div>
        </section>

        {/* Core Concepts Section */}
        <section id="concepts" className="py-20 lg:py-28 bg-[#F3F4F6]">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="mb-12 max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#6B7280]">
                Core Concepts
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-[#111111] md:text-4xl">
                Key Concepts in Folonite
              </h2>
              <p className="mt-4 text-[17px] leading-[1.6] text-[#6B7280]">
                Understanding these fundamental concepts will help you work more effectively with the system.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {coreConcepts.map((concept) => (
                <div
                  key={concept.title}
                  className="rounded-2xl bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
                >
                  <h4 className="text-lg font-semibold text-[#111111]">{concept.title}</h4>
                  <p className="mt-2 text-sm leading-[1.6] text-[#6B7280]">{concept.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-2xl bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-[#EFF6FF] p-3 shrink-0">
                  <svg className="h-6 w-6 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#111111]">Quantity Normalization</h3>
                  <p className="mt-2 text-[15px] leading-[1.6] text-[#6B7280]">
                    When you create an asset with quantity greater than 1, Folonite automatically creates 
                    individual unit-level records. For example, if you add "Office Chairs — Quantity: 5", 
                    the system generates 5 unique asset IDs (AST-001 through AST-005), each with its own 
                    QR code and tracking history.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-[#2563EB]">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-medium">This enables precise audit verification and individual unit tracking</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Navigation Section */}
        <section id="dashboard" className="py-20 lg:py-28">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="mb-12 max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#6B7280]">
                Navigation
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-[#111111] md:text-4xl">
                Dashboard Navigation
              </h2>
              <p className="mt-4 text-[17px] leading-[1.6] text-[#6B7280]">
                The dashboard is your command center. Here's how to make the most of it.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {dashboardFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
                >
                  <h4 className="text-lg font-semibold text-[#111111]">{feature.title}</h4>
                  <p className="mt-2 text-sm leading-[1.6] text-[#6B7280]">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-[#F3F4F6] p-6">
                <h3 className="text-lg font-semibold text-[#111111] mb-4">Metric Cards Explained</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2 border-b border-[#E5E7EB]">
                    <span className="text-sm font-medium text-[#111111]">Total Assets</span>
                    <span className="text-xs text-[#6B7280]">All assets you have access to</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-[#E5E7EB]">
                    <span className="text-sm font-medium text-[#111111]">Active Tickets</span>
                    <span className="text-xs text-[#6B7280]">Open or in-progress tickets</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-[#E5E7EB]">
                    <span className="text-sm font-medium text-[#111111]">Audit Readiness</span>
                    <span className="text-xs text-[#6B7280]">% of assets verified this cycle</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-sm font-medium text-[#111111]">Compliance Score</span>
                    <span className="text-xs text-[#6B7280]">Overall system health indicator</span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-[#F3F4F6] p-6">
                <h3 className="text-lg font-semibold text-[#111111] mb-4">Keyboard Shortcuts</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2">
                    <span className="text-sm text-[#6B7280]">Open Command Palette</span>
                    <kbd className="rounded bg-white px-2 py-1 text-xs font-mono text-[#111111]">⌘K / Ctrl+K</kbd>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-sm text-[#6B7280]">Focus Search</span>
                    <kbd className="rounded bg-white px-2 py-1 text-xs font-mono text-[#111111]">/</kbd>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-sm text-[#6B7280]">Toggle Sidebar</span>
                    <kbd className="rounded bg-white px-2 py-1 text-xs font-mono text-[#111111]">B</kbd>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Section */}
        <section id="mobile" className="py-20 lg:py-28 bg-[#F3F4F6]">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="mb-12 max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#6B7280]">
                Mobile Access
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-[#111111] md:text-4xl">
                PWA Installation for Field Use
              </h2>
              <p className="mt-4 text-[17px] leading-[1.6] text-[#6B7280]">
                Folonite works great on mobile devices. Install it as a Progressive Web App for the best experience.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {mobileFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
                >
                  <h4 className="text-lg font-semibold text-[#111111]">{feature.title}</h4>
                  <p className="mt-2 text-sm leading-[1.6] text-[#6B7280]">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-2xl bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
              <h3 className="text-xl font-semibold text-[#111111] mb-6">Installation Guides</h3>
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-[#111111] mb-3">Installing on iOS (iPhone/iPad)</h4>
                  <ol className="space-y-2 text-sm text-[#6B7280] list-decimal list-inside">
                    <li>Open Safari and navigate to your Folonite instance</li>
                    <li>Tap the Share button (square with arrow up)</li>
                    <li>Scroll down and tap "Add to Home Screen"</li>
                    <li>Tap "Add" in the top right corner</li>
                    <li>Folonite will now appear as an app icon on your home screen</li>
                  </ol>
                </div>
                <div>
                  <h4 className="font-semibold text-[#111111] mb-3">Installing on Android</h4>
                  <ol className="space-y-2 text-sm text-[#6B7280] list-decimal list-inside">
                    <li>Open Chrome and navigate to your Folonite instance</li>
                    <li>Tap the menu button (three dots) in the top right</li>
                    <li>Tap "Add to Home screen" or "Install app"</li>
                    <li>Tap "Add" or "Install" to confirm</li>
                    <li>Folonite will now appear as an app icon in your app drawer</li>
                  </ol>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-[#E5E7EB]">
                <h4 className="font-semibold text-[#111111] mb-3">Offline Capabilities</h4>
                <p className="text-sm text-[#6B7280] mb-3">
                  Folonite supports limited offline functionality for field operations:
                </p>
                <ul className="grid gap-2 md:grid-cols-2 text-sm text-[#6B7280]">
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    View cached asset lists from your last session
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Scan QR codes and record verification status
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Queue changes that sync when connectivity returns
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    View property and department information
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="rounded-3xl bg-[#111111] p-10 sm:p-16">
              <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
                <div>
                  <h2 className="text-3xl font-semibold text-white md:text-4xl">
                    Ready to explore more?
                  </h2>
                  <p className="mt-6 text-[17px] leading-[1.6] text-[#9CA3AF]">
                    Continue your journey with Phase 2: Property & Department Setup, or jump into the app and start managing assets.
                  </p>
                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <Link
                      to="/login"
                      className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#111111] shadow-[0_6px_18px_rgba(0,0,0,0.08)] transition-opacity hover:opacity-90"
                    >
                      Access Platform
                    </Link>
                    <Link
                      to="/help"
                      className="inline-flex items-center justify-center rounded-full bg-transparent border border-white/30 px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:bg-white/10"
                    >
                      Help Center
                    </Link>
                  </div>
                </div>
                <div className="rounded-2xl bg-[#1F1F1F] p-6">
                  <h3 className="text-sm font-semibold text-white">Coming Soon</h3>
                  <p className="mt-4 text-sm text-[#9CA3AF]">
                    Phase 2 documentation covering Property & Department Setup will be available shortly.
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
