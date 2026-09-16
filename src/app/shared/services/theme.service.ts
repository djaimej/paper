import { DOCUMENT } from '@angular/common';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { Theme } from '@models/enums';

const STORAGE_KEY = 'paper-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly theme = signal<Theme>(this.initialTheme());

  readonly current = this.theme.asReadonly();
  readonly isDark = computed(() => this.theme() === Theme.DARK);

  constructor() {
    // Persistir en cada cambio.
    effect(() => {
      try {
        this.document.documentElement.classList.toggle('dark', this.theme() === Theme.DARK);
        localStorage.setItem(STORAGE_KEY, this.theme());
      } catch {
        /* almacenamiento no disponible */
      }
    });
  }

  toggle(): void {
    this.theme.update((t) => (t === Theme.DARK ? Theme.LIGHT : Theme.DARK));
  }

  set(theme: Theme): void {
    this.theme.set(theme);
  }

  setDark(isDark: boolean): void {
    this.theme.set(isDark ? Theme.DARK : Theme.LIGHT);
  }

  private initialTheme(): Theme {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === Theme.DARK || stored === Theme.LIGHT) {
        return stored as Theme;
      }
    } catch {
      /* almacenamiento no disponible */
    }
    const prefersDark =
      this.document.defaultView?.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
    return prefersDark ? Theme.DARK : Theme.LIGHT;
  }
}
