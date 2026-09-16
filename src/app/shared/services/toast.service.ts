import { Injectable, signal } from '@angular/core';
import { IIcon } from '@models/interfaces/icon';

const DEFAULT_ICON: IIcon = { library: 'interface-interaction', file: 'info-circle.svg' };

export interface ToastData {
  readonly id: number;
  readonly message: string;
  readonly color: 'white' | 'black';
  readonly icon: IIcon;
}

export interface ToastOptions {
  readonly color?: 'white' | 'black';
  readonly icon?: IIcon;
  readonly duration?: number; // ms; 0 = sin auto-descarte
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  private readonly items = signal<ToastData[]>([]);
  private readonly timers = new Map<number, ReturnType<typeof setTimeout>>();
  private counter = 0;

  readonly toasts = this.items.asReadonly();

  show(message: string, options: ToastOptions = {}): number {
    const id = ++this.counter;
    this.items.update((list) => [
      ...list,
      { id, message, color: options.color ?? 'black', icon: options.icon ?? DEFAULT_ICON },
    ]);

    const duration = options.duration ?? 4000;
    if (duration > 0) {
      this.timers.set(id, setTimeout(() => this.dismiss(id), duration));
    }
    return id;
  }

  dismiss(id: number): void {
    const timer = this.timers.get(id);
    if (timer !== undefined) {
      clearTimeout(timer);
      this.timers.delete(id);
    }
    this.items.update((list) => list.filter((t) => t.id !== id));
  }

  clear(): void {
    this.timers.forEach((t) => clearTimeout(t));
    this.timers.clear();
    this.items.set([]);
  }
}
