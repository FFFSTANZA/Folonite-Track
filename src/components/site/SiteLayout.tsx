import { ModeToggle } from "@/components/common/ModeToggle";

interface SiteLayoutProps { children: React.ReactNode }

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground">
        Skip to content
      </a>
      {/* Top header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            {/* Folonite Text Logo */}
            <span className="text-xl font-bold text-primary whitespace-nowrap">
              Folonite
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <a href="#overview" className="transition-colors hover:text-foreground">Overview</a>
            <a href="#features" className="transition-colors hover:text-foreground">Features</a>
            <a href="#modules" className="transition-colors hover:text-foreground">Modules</a>
            <a href="#demo" className="transition-colors hover:text-foreground">Demo</a>
          </nav>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <a
              href="/login"
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Login
            </a>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main id="main-content">
        {children}
      </main>

      <footer className="border-t bg-muted/40 py-12 text-sm">
        <div className="container flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-center gap-2 md:justify-start">
              <span className="text-lg font-bold text-primary">
                Folonite
              </span>
            </div>
            <p className="max-w-xs text-muted-foreground">
              Modern asset operations platform for distributed teams.
            </p>
          </div>
          <div className="flex gap-8 text-muted-foreground">
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-foreground">Product</span>
              <a href="#features" className="hover:text-foreground">Features</a>
              <a href="#modules" className="hover:text-foreground">Modules</a>
              <a href="#demo" className="hover:text-foreground">Demo</a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-foreground">Support</span>
              <a href="mailto:support@folonite.in" className="hover:text-foreground">Contact</a>

            </div>
          </div>
        </div>
        <div className="container mt-8 border-t pt-8 text-center text-muted-foreground md:text-left">
          <p>© {new Date().getFullYear()} Folonite. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
