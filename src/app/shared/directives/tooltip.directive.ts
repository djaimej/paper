import { ComponentRef, Directive, ElementRef, EmbeddedViewRef, inject, Injector, input, OnDestroy, ViewContainerRef } from '@angular/core';
import { Tooltip } from '@components/information/tooltip/tooltip';
import { Color } from '@models/enums';
import { TooltipPosition } from '@models/enums/tooltip';

@Directive({
  selector: '[tooltip]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
    '(mousemove)': 'onMouseMove($event)',
    '(touchstart)': 'onTouchStart($event)',
    '(touchend)': 'onTouchEnd()',
  },
})
export class TooltipDirective implements OnDestroy {
  readonly tooltip = input('');
  readonly position = input<TooltipPosition>(TooltipPosition.BELOW);
  readonly color = input<Color>(Color.WHITE);
  readonly showDelay = input(0);
  readonly hideDelay = input(0);

  private readonly elementRef = inject(ElementRef);
  private readonly injector = inject(Injector);
  private readonly viewContainerRef = inject(ViewContainerRef);

  private componentRef: ComponentRef<Tooltip> | null = null;
  private showTimeout?: number;
  private hideTimeout?: number;
  private touchTimeout?: number;

  onMouseEnter(): void {
    this.initializeTooltip();
  }

  onMouseLeave(): void {
    this.setHideTooltipTimeout();
  }

  onMouseMove(event: MouseEvent): void {
    if (this.componentRef !== null && this.position() === TooltipPosition.DYNAMIC) {
      const tip = this.componentRef.instance;
      tip.left.set(event.clientX);
      tip.top.set(event.clientY);
      tip.tooltip.set(this.tooltip());
      tip.color.set(this.color());
    }
  }

  onTouchStart(event: TouchEvent): void {
    event.preventDefault();
    window.clearTimeout(this.touchTimeout);
    this.touchTimeout = window.setTimeout(() => this.initializeTooltip(), this.showDelay());
  }

  onTouchEnd(): void {
    window.clearTimeout(this.touchTimeout);
    this.setHideTooltipTimeout();
  }

  private initializeTooltip(): void {
    if (this.componentRef === null) {
      window.clearTimeout(this.hideTimeout);
      this.componentRef = this.viewContainerRef.createComponent(Tooltip, {
        injector: this.injector,
      });
      this.setTooltipComponentProperties();
      document.body.appendChild((this.componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0]);
      this.showTimeout = window.setTimeout(() => this.showTooltip(), this.showDelay());
    }
  }

  private setTooltipComponentProperties(): void {
    if (this.componentRef === null) {
      return;
    }
    const tip = this.componentRef.instance;
    tip.tooltip.set(this.tooltip());
    tip.position.set(this.position());
    tip.color.set(this.color());

    const { left, right, top, bottom } = this.elementRef.nativeElement.getBoundingClientRect();

    switch (this.position()) {
      case TooltipPosition.BELOW:
        tip.left.set(Math.round((right - left) / 2 + left));
        tip.top.set(Math.round(bottom));
        break;
      case TooltipPosition.ABOVE:
        tip.left.set(Math.round((right - left) / 2 + left));
        tip.top.set(Math.round(top));
        break;
      case TooltipPosition.RIGHT:
        tip.left.set(Math.round(right));
        tip.top.set(Math.round(top + (bottom - top) / 2));
        break;
      case TooltipPosition.LEFT:
        tip.left.set(Math.round(left));
        tip.top.set(Math.round(top + (bottom - top) / 2));
        break;
    }
  }

  private showTooltip(): void {
    this.componentRef?.instance.visible.set(true);
  }

  private setHideTooltipTimeout(): void {
    this.hideTimeout = window.setTimeout(() => this.destroy(), this.hideDelay());
  }

  ngOnDestroy(): void {
    this.destroy();
  }

  destroy(): void {
    window.clearTimeout(this.showTimeout);
    window.clearTimeout(this.hideTimeout);
    window.clearTimeout(this.touchTimeout);
    if (this.componentRef !== null) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }
}
