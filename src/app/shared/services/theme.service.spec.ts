import { TestBed } from '@angular/core/testing';
import { Theme } from '@models/enums';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  beforeEach(() => localStorage.clear());

  const create = () => {
    TestBed.configureTestingModule({});
    return TestBed.inject(ThemeService);
  };

  it('toggles between light and dark', () => {
    const service = create();
    const initial = service.current();
    service.toggle();
    expect(service.current()).not.toBe(initial);
    service.toggle();
    expect(service.current()).toBe(initial);
  });

  it('reflects dark state via isDark()', () => {
    const service = create();
    service.set(Theme.DARK);
    expect(service.isDark()).toBe(true);
    service.setDark(false);
    expect(service.isDark()).toBe(false);
  });

  it('restores the persisted theme on init', () => {
    localStorage.setItem('paper-theme', Theme.DARK);
    expect(create().current()).toBe(Theme.DARK);
  });

  it('persists the theme when it changes', () => {
    const service = create();
    service.set(Theme.DARK);
    TestBed.tick(); // vacía el effect de persistencia
    expect(localStorage.getItem('paper-theme')).toBe(Theme.DARK);
  });
});
