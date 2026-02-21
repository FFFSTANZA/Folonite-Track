interface SiteLayoutProps { children: React.ReactNode }

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="min-h-dvh bg-gradient-to-br from-primary/5 via-primary/10 to-background text-foreground font-sans">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground">
        Skip to content
      </a>
      <header className="sticky top-0 z-50 w-full bg-muted/30 border-b border-border/40 backdrop-blur-sm">
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6">
          <a href="/" className="flex items-center gap-2">
            <span className="text-lg font-semibold tracking-tight">Folonite</span>
          </a>
          <nav className="hidden flex-1 items-center justify-center gap-8 text-sm font-medium text-foreground md:flex">
            <a href="#overview" className="transition-opacity hover:opacity-70">Overview</a>
            <a href="#features" className="transition-opacity hover:opacity-70">Features</a>
            <a href="#modules" className="transition-opacity hover:opacity-70">Modules</a>
            <a href="#demo" className="transition-opacity hover:opacity-70">Demo</a>
          </nav>
          <div className="flex items-center">
            <a
              href="/login"
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft transition-opacity hover:opacity-90"
            >
              Login
            </a>
          </div>
        </div>
      </header>

      <main id="main-content">
        {children}
      </main>

      <footer className="border-t border-border/40 py-16 text-sm">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-6 text-center md:flex-row md:items-start md:justify-between md:text-left">
          <div className="flex flex-col gap-3">
            <span className="text-lg font-semibold">Folonite</span>
            <p className="max-w-xs text-muted-foreground">
              Calm, compliant asset operations for distributed teams.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-10 text-muted-foreground md:justify-end">
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
        <div className="mx-auto mt-10 w-full max-w-7xl border-t border-border/40 px-6 pt-8 text-center text-muted-foreground md:text-left">
          <p>© {new Date().getFullYear()} Folonite. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
