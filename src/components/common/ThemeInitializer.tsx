import { useEffect } from 'react';
import { ACCENT_COLORS, DARK_LEVELS } from '@/lib/theme-config';

export function ThemeInitializer() {
  useEffect(() => {
    const applyTheme = () => {
      const root = document.documentElement;
      const accentColor = localStorage.getItem('theme_accent') || 'zinc';
      const darkLevel = localStorage.getItem('theme_dark_level') || 'standard';
      const isDark = root.classList.contains('dark');

      const accent = ACCENT_COLORS.find(c => c.id === accentColor) || ACCENT_COLORS[0];

      // Main accent colors
      const primaryValue = isDark && (accent as any).darkValue ? (accent as any).darkValue : accent.value;
      const primaryHover = isDark && (accent as any).darkHover ? (accent as any).darkHover : accent.hover;

      root.style.setProperty('--primary', primaryValue);
      root.style.setProperty('--primary-hover', primaryHover);
      root.style.setProperty('--ring', primaryValue);

      // Sidebar accent colors
      root.style.setProperty('--sidebar-primary', primaryValue);
      root.style.setProperty('--sidebar-ring', primaryValue);

      if (!isDark) {
        root.style.setProperty('--sidebar-accent', accent.light);
        root.style.setProperty('--accent', accent.light);
        root.style.setProperty('--accent-foreground', accent.value);

      } else {
        root.style.removeProperty('--sidebar-accent');
        root.style.removeProperty('--accent');
        root.style.removeProperty('--accent-foreground');
      }

      const level = DARK_LEVELS.find(l => l.id === darkLevel) || DARK_LEVELS[0];

      let bgValue = '0 0% 100%';
      if (isDark) {
        bgValue = level.bg;
        root.style.setProperty('--background', level.bg);
        root.style.setProperty('--card', level.card);
        root.style.setProperty('--popover', level.card);
        root.style.setProperty('--sidebar-background', level.card);

        // Adjust dashboard card headers for dark mode depth
        // @ts-expect-error headerOpacity is optional on DarkLevel
        const opacity = level.headerOpacity || 0.1;
        root.style.setProperty('--header-amc', `hsl(240 5% 50% / ${opacity})`);
        root.style.setProperty('--header-food', `hsl(150 100% 50% / ${opacity})`);
      } else {
        root.style.removeProperty('--background');
        root.style.removeProperty('--card');
        root.style.setProperty('--popover', '0 0% 100%');

        // Light mode sidebar background (tint of accent)
        if (accent.sidebar) {
          root.style.setProperty('--sidebar-background', accent.sidebar);
        } else {
          root.style.removeProperty('--sidebar-background');
        }

        // Light mode defaults
        root.style.setProperty('--header-amc', 'hsl(240 5% 96%)');
        root.style.setProperty('--header-food', 'hsl(150 100% 96%)');
      }

      // Update theme-color meta tag to match background
      const metaThemeColor = document.querySelector('meta[name="theme-color"]');
      if (metaThemeColor) {
        metaThemeColor.setAttribute('content', `hsl(${bgValue})`);
      }
    };

    // Apply immediately
    applyTheme();

    // Observe class changes on html element to detect dark mode toggle
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          applyTheme();
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return null;
}
