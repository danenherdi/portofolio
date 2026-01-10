import { atom } from 'nanostores';

export type Theme = 'engineering' | 'photography' | 'system';

// Default theme based on route context (will be updated by Layout)
export const $theme = atom<Theme>('system');

// Get initial theme from localStorage or system preference
export function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'system';

  const stored = localStorage.getItem('theme') as Theme | null;
  if (stored && ['engineering', 'photography', 'system'].includes(stored)) {
    return stored;
  }

  return 'system';
}

// Set theme and persist to localStorage
export function setTheme(theme: Theme) {
  $theme.set(theme);
  if (typeof window !== 'undefined') {
    localStorage.setItem('theme', theme);
    applyTheme(theme);
  }
}

// Apply theme to document
export function applyTheme(theme: Theme) {
  if (typeof window === 'undefined') return;

  let actualTheme: 'engineering' | 'photography' = 'engineering';

  if (theme === 'system') {
    // Determine from current route
    const path = window.location.pathname;
    if (path.startsWith('/photography')) {
      actualTheme = 'photography';
    } else {
      actualTheme = 'engineering';
    }
  } else {
    actualTheme = theme;
  }

  document.documentElement.setAttribute('data-theme', actualTheme);
}

// Get route-based default theme
export function getRouteTheme(pathname: string): 'engineering' | 'photography' {
  if (pathname.startsWith('/photography')) {
    return 'photography';
  }
  // Default to engineering for /, /projects, /blog, etc.
  return 'engineering';
}
