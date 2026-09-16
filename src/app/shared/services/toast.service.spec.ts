import { TestBed } from '@angular/core/testing';
import { ToastService } from './toast.service';

describe('ToastService', () => {
  let service: ToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastService);
  });

  it('shows a toast', () => {
    service.show('Hola', { duration: 0 });
    expect(service.toasts()).toHaveLength(1);
    expect(service.toasts()[0].message).toBe('Hola');
  });

  it('dismisses by id', () => {
    const id = service.show('Hola', { duration: 0 });
    service.dismiss(id);
    expect(service.toasts()).toHaveLength(0);
  });

  it('auto-dismisses after the duration', () => {
    vi.useFakeTimers();
    service.show('Hola', { duration: 1000 });
    expect(service.toasts()).toHaveLength(1);
    vi.advanceTimersByTime(1000);
    expect(service.toasts()).toHaveLength(0);
    vi.useRealTimers();
  });

  it('clear removes all toasts', () => {
    service.show('A', { duration: 0 });
    service.show('B', { duration: 0 });
    service.clear();
    expect(service.toasts()).toHaveLength(0);
  });
});
