import { Helmet } from "react-helmet-async";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Link } from "react-router-dom";
import {
  BookOpen,
  LayoutDashboard,
  Shield,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
  Menu,
  Bell,
  Moon,
  Search,
  BarChart3,
  Activity,
  Clock,
  Building2,
  Package,
  QrCode,
  FileText,
  Users,
  ClipboardCheck,
  Smartphone,
  Download
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const BaseUrl = "https://folonite.in/guide";
const MetaDescription = "Complete user guide for Folonite — Smart Asset Management System. Learn how to track assets, manage audits, and collaborate effectively.";

const navLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Interface", href: "#interface" },
  { label: "Roles", href: "#roles" },
  { label: "Concepts", href: "#concepts" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Mobile", href: "#mobile" },
];

const roleCards = [
  {
    role: "Admin",
    icon: Shield,
    description: "Full system access with complete control over users, settings, and configurations.",
    capabilities: ["Create and manage users", "Configure system settings", "Access all modules", "Generate all reports", "Manage approvals"],
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950/30",
    borderColor: "border-blue-200 dark:border-blue-800",
  },
  {
    role: "Manager",
    icon: Users,
    description: "Department-level oversight with audit and reporting capabilities.",
    capabilities: ["Manage assigned properties", "Run audit sessions", "Generate reports", "Approve changes", "View team assets"],
    color: "text-emerald-600",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/30",
    borderColor: "border-emerald-200 dark:border-emerald-800",
  },
  {
    role: "User",
    icon: Package,
    description: "Operational access for day-to-day asset management tasks.",
    capabilities: ["Add and edit assets", "Generate QR codes", "Create tickets", "View assigned assets", "Scan QR codes"],
    color: "text-amber-600",
    bgColor: "bg-amber-50 dark:bg-amber-950/30",
    borderColor: "border-amber-200 dark:border-amber-800",
  },
];

const coreConcepts = [
  {
    title: "Assets",
    icon: Package,
    description: "Physical items being tracked with rich metadata including status, ownership, procurement details, and lifecycle information.",
  },
  {
    title: "Properties",
    icon: Building2,
    description: "Physical locations or facilities where assets are stored. Assets are organized by property for easier management and auditing.",
  },
  {
    title: "Departments",
    icon: Users,
    description: "Organizational units within properties that help scope access and organize assets by functional areas.",
  },
  {
    title: "QR Codes",
    icon: QrCode,
    description: "Physical labels generated for each asset that enable quick identification and mobile scanning for audits and lookups.",
  },
  {
    title: "Tickets",
    icon: FileText,
    description: "Maintenance and support requests that track issues from creation through resolution with full comment history.",
  },
  {
    title: "Audits",
    icon: ClipboardCheck,
    description: "Compliance verification processes that verify asset existence, condition, and location against the system records.",
  },
];

const dashboardFeatures = [
  {
    title: "Quick Actions",
    icon: ArrowRight,
    description: "One-click access to common tasks: create assets, raise tickets, and start audit sessions.",
  },
  {
    title: "Metric Cards",
    icon: BarChart3,
    description: "At-a-glance view of total assets, active tickets, audit readiness, and compliance status.",
  },
  {
    title: "Activity Feed",
    icon: Activity,
    description: "Real-time stream of recent system events including asset changes, ticket updates, and audit activities.",
  },
  {
    title: "Navigation Breadcrumbs",
    icon: Menu,
    description: "Track your navigation history and easily jump back to previous pages or sections.",
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

const mobileFeatures = [
  {
    title: "Install as App",
    icon: Download,
    description: "Add Folonite to your home screen for quick access without opening the browser each time.",
  },
  {
    title: "QR Scanning",
    icon: QrCode,
    description: "Use your device camera to scan asset QR codes for instant lookup and verification.",
  },
  {
    title: "Offline Access",
    icon: Smartphone,
    description: "View cached asset lists even without connectivity. Changes sync automatically when back online.",
  },
  {
    title: "Field Operations",
    icon: CheckCircle2,
    description: "Perform audits, update asset status, and create tickets directly from mobile devices.",
  },
];

const quickStartSteps = [
  {
    step: 1,
    title: "Log In",
    description: "Use your email and password to access the system. Contact your admin if you need account access.",
  },
  {
    step: 2,
    title: "Explore the Dashboard",
    description: "Review your metrics, check recent activity, and familiarize yourself with the quick actions.",
  },
  {
    step: 3,
    title: "Check Your Access",
    description: "Navigate to different modules to see what's available based on your role and permissions.",
  },
  {
    step: 4,
    title: "Try a Quick Action",
    description: "Create a test asset or explore existing records to get comfortable with the interface.",
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
        <section className="pt-24 pb-16 lg:pt-32 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-950/20">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <BookOpen className="h-4 w-4" />
                <span>Phase 1: Getting Started</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Folonite User Guide
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Everything you need to know to get started with Folonite — from navigating the interface to understanding your role and permissions.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Button size="lg" asChild className="rounded-full px-8">
                  <a href="#overview">Start Learning</a>
                </Button>
                <Button variant="outline" size="lg" asChild className="rounded-full px-8">
                  <Link to="/help">Help Center</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="py-8 border-b">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
              <span className="text-sm text-muted-foreground hidden md:block">Jump to:</span>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-3 py-1 rounded-full hover:bg-accent"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section id="overview" className="py-20">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="mb-12 text-center">
              <span className="text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
                15-Minute Setup
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Quick Start Guide
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Get up and running with Folonite in four simple steps.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {quickStartSteps.map((item) => (
                <Card key={item.step} className="relative overflow-hidden border-l-4 border-l-primary">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                        {item.step}
                      </span>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Interface Section */}
        <section id="interface" className="py-20 bg-muted/30">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  <LayoutDashboard className="h-4 w-4" />
                  Interface Overview
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Understanding the Folonite Interface
                </h2>
                <p className="text-lg text-muted-foreground">
                  The Folonite interface is designed for clarity and efficiency. Here's what you'll find on every screen.
                </p>
                <div className="space-y-4">
                  {interfaceElements.map((item) => (
                    <div key={item.element} className="flex gap-4">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">{item.element}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4">
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Menu className="h-5 w-5 text-primary" />
                      <CardTitle className="text-base">Navigation Panel</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Collapsible sidebar with module icons and labels. Access Dashboard, Assets, Properties, QR Codes, Reports, and more.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Bell className="h-5 w-5 text-primary" />
                      <CardTitle className="text-base">Top Bar</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Search className="h-4 w-4" />
                      <span>Global search with ⌘K shortcut</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Bell className="h-4 w-4" />
                      <span>Notification bell with unread count</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Moon className="h-4 w-4" />
                      <span>Theme toggle (light/dark mode)</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-primary" />
                      <CardTitle className="text-base">Dashboard Widgets</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Metric cards showing key numbers. Activity feed tracking recent changes. Quick action buttons for common tasks.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Roles Section */}
        <section id="roles" className="py-20">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="mb-12 text-center">
              <div className="inline-flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <Shield className="h-4 w-4" />
                Access Control
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Understanding User Roles
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Folonite uses role-based access control to ensure users only see and modify what they're authorized for.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {roleCards.map((role) => (
                <Card key={role.role} className={`${role.bgColor} ${role.borderColor} border-2`}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className={`rounded-lg p-2 ${role.bgColor}`}>
                        <role.icon className={`h-6 w-6 ${role.color}`} />
                      </div>
                      <CardTitle className={`text-xl ${role.color}`}>{role.role}</CardTitle>
                    </div>
                    <CardDescription className="pt-2">{role.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-medium mb-3">Capabilities:</p>
                    <ul className="space-y-2">
                      {role.capabilities.map((cap) => (
                        <li key={cap} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className={`h-4 w-4 ${role.color} shrink-0`} />
                          <span className="text-muted-foreground">{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 rounded-xl bg-muted/50 p-6">
              <h3 className="font-semibold mb-3">Permission Scoping</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Beyond role-based access, Folonite supports property and department-level scoping. 
                This means a Manager might only see assets for specific properties they're assigned to, 
                while an Admin sees everything. Users can be granted access to multiple properties and 
                departments as needed.
              </p>
            </div>
          </div>
        </section>

        {/* Core Concepts Section */}
        <section id="concepts" className="py-20 bg-muted/30">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="mb-12 text-center">
              <div className="inline-flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <Lightbulb className="h-4 w-4" />
                Core Concepts
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Key Concepts in Folonite
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Understanding these fundamental concepts will help you work more effectively with the system.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {coreConcepts.map((concept) => (
                <Card key={concept.title} className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-primary/10 p-2 group-hover:bg-primary/20 transition-colors">
                        <concept.icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{concept.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {concept.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12">
              <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
                <CardHeader>
                  <CardTitle>Quantity Normalization</CardTitle>
                  <CardDescription>How bulk assets become individual records</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    When you create an asset with quantity greater than 1, Folonite automatically creates 
                    individual unit-level records. For example, if you add "Office Chairs — Quantity: 5", 
                    the system generates 5 unique asset IDs (AST-001 through AST-005), each with its own 
                    QR code and tracking history.
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>This enables precise audit verification and individual unit tracking</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Dashboard Navigation Section */}
        <section id="dashboard" className="py-20">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <LayoutDashboard className="h-4 w-4" />
                Navigation
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Dashboard Navigation
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
                The dashboard is your command center. Here's how to make the most of it.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-6">
                {dashboardFeatures.map((feature) => (
                  <div key={feature.title} className="flex gap-4">
                    <div className="rounded-lg bg-primary/10 p-2 h-fit">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Metric Cards Explained</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between py-2 border-b">
                      <span className="text-sm font-medium">Total Assets</span>
                      <span className="text-xs text-muted-foreground">All assets you have access to</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b">
                      <span className="text-sm font-medium">Active Tickets</span>
                      <span className="text-xs text-muted-foreground">Open or in-progress tickets</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b">
                      <span className="text-sm font-medium">Audit Readiness</span>
                      <span className="text-xs text-muted-foreground">% of assets verified this cycle</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-sm font-medium">Compliance Score</span>
                      <span className="text-xs text-muted-foreground">Overall system health indicator</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Keyboard Shortcuts</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Open Command Palette</span>
                      <kbd className="rounded bg-muted px-2 py-1 text-xs">⌘K / Ctrl+K</kbd>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Focus Search</span>
                      <kbd className="rounded bg-muted px-2 py-1 text-xs">/</kbd>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Toggle Sidebar</span>
                      <kbd className="rounded bg-muted px-2 py-1 text-xs">B</kbd>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Section */}
        <section id="mobile" className="py-20 bg-muted/30">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="mb-12 text-center">
              <div className="inline-flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <Smartphone className="h-4 w-4" />
                Mobile Access
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                PWA Installation for Field Use
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Folonite works great on mobile devices. Install it as a Progressive Web App for the best experience.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {mobileFeatures.map((feature) => (
                <Card key={feature.title} className="text-center">
                  <CardHeader>
                    <div className="mx-auto rounded-full bg-primary/10 p-3 w-fit">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg pt-2">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="install-ios">
                  <AccordionTrigger>Installing on iOS (iPhone/iPad)</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <ol className="list-decimal list-inside space-y-2 text-sm">
                      <li>Open Safari and navigate to your Folonite instance</li>
                      <li>Tap the Share button (square with arrow up)</li>
                      <li>Scroll down and tap "Add to Home Screen"</li>
                      <li>Tap "Add" in the top right corner</li>
                      <li>Folonite will now appear as an app icon on your home screen</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="install-android">
                  <AccordionTrigger>Installing on Android</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <ol className="list-decimal list-inside space-y-2 text-sm">
                      <li>Open Chrome and navigate to your Folonite instance</li>
                      <li>Tap the menu button (three dots) in the top right</li>
                      <li>Tap "Add to Home screen" or "Install app"</li>
                      <li>Tap "Add" or "Install" to confirm</li>
                      <li>Folonite will now appear as an app icon in your app drawer</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="offline">
                  <AccordionTrigger>Offline Capabilities</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p className="text-sm mb-2">
                      Folonite supports limited offline functionality for field operations:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>View cached asset lists from your last session</li>
                      <li>Scan QR codes and record verification status</li>
                      <li>Queue changes that sync when connectivity returns</li>
                      <li>View property and department information</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="py-20">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="rounded-3xl bg-primary p-8 text-primary-foreground sm:p-12">
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight">
                    Ready to explore more?
                  </h2>
                  <p className="text-primary-foreground/80 text-lg">
                    Continue your journey with Phase 2: Property & Department Setup, or jump into the app and start managing assets.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
                  <Button size="lg" variant="secondary" asChild className="rounded-full px-8">
                    <Link to="/login">Access Platform</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                    <Link to="/help">Help Center</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
