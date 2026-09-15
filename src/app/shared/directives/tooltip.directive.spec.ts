import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TooltipDirective } from './tooltip.directive';
import { By } from '@angular/platform-browser';

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

  it('does not run the hide callback after destroy (regresión)', () => {
    const directive = fixture.debugElement
      .query(By.directive(TooltipDirective))
      .injector.get(TooltipDirective);
    const destroySpy = vi.spyOn(directive, 'destroy');

    fixture.componentInstance.hideDelay = 1000;
    fixture.detectChanges();

    trigger('mouseenter'); // programa showTimeout
    trigger('mouseleave'); // programa hideTimeout -> destroy() a los 1000ms
    expect(destroySpy).not.toHaveBeenCalled();

    fixture.destroy();     // ngOnDestroy -> destroy() (única llamada esperada)
    expect(destroySpy).toHaveBeenCalledTimes(1);

    vi.advanceTimersByTime(2000); // si el hideTimeout sobreviviera, dispararía destroy otra vez
    expect(destroySpy).toHaveBeenCalledTimes(1);
  });
});
