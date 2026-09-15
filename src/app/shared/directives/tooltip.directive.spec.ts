import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TooltipDirective } from './tooltip.directive';

@Component({
  standalone: true,
  imports: [TooltipDirective],
  template: `<button tooltip="Hola" [showDelay]="showDelay" [hideDelay]="hideDelay"></button>`,
})
class TooltipHost {
  showDelay = 0;
  hideDelay = 0;
}

describe('TooltipDirective', () => {
  let fixture: ComponentFixture<TooltipHost>;
  let host: HTMLElement;

  const trigger = (type: 'mouseenter' | 'mouseleave') => host.dispatchEvent(new Event(type));
  const tooltipInDom = () => document.body.querySelector('.tooltip');

  beforeEach(async () => {
    vi.useFakeTimers();
    await TestBed.configureTestingModule({ imports: [TooltipHost] }).compileComponents();

    fixture = TestBed.createComponent(TooltipHost);
    fixture.detectChanges();
    host = fixture.nativeElement.querySelector('button');
  });

  afterEach(() => {
    fixture.destroy();
    document.body.querySelectorAll('.tooltip').forEach((n) => n.remove());
    vi.useRealTimers();
  });

  it('creates a tooltip element on mouseenter', () => {
    expect(tooltipInDom()).toBeNull();
    trigger('mouseenter');
    expect(tooltipInDom()).not.toBeNull();
  });

  it('removes the tooltip after hideDelay on mouseleave', () => {
    fixture.componentInstance.hideDelay = 200;
    fixture.detectChanges();

    trigger('mouseenter');
    trigger('mouseleave');
    expect(tooltipInDom()).not.toBeNull(); // sigue hasta que pase el delay

    vi.advanceTimersByTime(200);
    expect(tooltipInDom()).toBeNull();
  });

  it('leaves no pending timers after destroy (regresión)', () => {
    const baseline = vi.getTimerCount();
    fixture.componentInstance.hideDelay = 1000;
    fixture.detectChanges();

    trigger('mouseenter'); // programa showTimeout
    trigger('mouseleave'); // programa hideTimeout
    expect(vi.getTimerCount()).toBeGreaterThan(baseline);

    fixture.destroy(); // ngOnDestroy -> destroy() debe limpiar todo

    expect(vi.getTimerCount()).toBe(baseline);
    expect(tooltipInDom()).toBeNull();
  });
});
