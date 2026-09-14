import { ComponentRef, Directive, ElementRef, EmbeddedViewRef, HostListener, Injector, Input, ViewContainerRef } from '@angular/core';
import { Tooltip } from '@components/information/tooltip/tooltip';
import { Color } from '@models/enums';
import { TooltipPosition } from '@models/enums/tooltip';

@Directive({
  selector: '[tooltip]',
  standalone: true
})
export class TooltipDirective {
  @Input() tooltip = '';
  @Input() position: TooltipPosition = TooltipPosition.BELOW;
  @Input() color: Color = Color.WHITE;
  @Input() showDelay = 0;
  @Input() hideDelay = 0;

  private componentRef: ComponentRef<Tooltip> | null = null;
  private showTimeout?: number;
  private hideTimeout?: number;
  private touchTimeout?: number;

  constructor(
    private elementRef: ElementRef,
    private injector: Injector,
    private viewContainerRef: ViewContainerRef
  ) {
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.initializeTooltip();
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.setHideTooltipTimeout();
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove($event: MouseEvent): void {
    if (this.componentRef !== null && this.position === TooltipPosition.DYNAMIC) {
      this.componentRef.instance.left = $event.clientX;
      this.componentRef.instance.top = $event.clientY;
      this.componentRef.instance.tooltip = this.tooltip;
      this.componentRef.instance.color = this.color;
    }
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart($event: TouchEvent): void {
    $event.preventDefault();
    window.clearTimeout(this.touchTimeout);
    this.touchTimeout = window.setTimeout(this.initializeTooltip.bind(this), this.hideTimeout);
  }

  @HostListener('touchend')
  onTouchEnd(): void {
    window.clearTimeout(this.touchTimeout);
    this.setHideTooltipTimeout();
  }

  private initializeTooltip() {
    if (this.componentRef === null) {
      window.clearInterval(this.hideDelay);
      this.componentRef = this.viewContainerRef.createComponent(Tooltip, {
        injector: this.injector
      });
      this.setTooltipComponentProperties();
      document.body.appendChild((this.componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0]);
      this.showTimeout = window.setTimeout(this.showTooltip.bind(this), this.showDelay);
    }
  }

  private setTooltipComponentProperties() {
    if (this.componentRef !== null) {
      this.componentRef.instance.tooltip = this.tooltip;
      this.componentRef.instance.position = this.position;
      this.componentRef.instance.color = this.color;

      const {left, right, top, bottom} = this.elementRef.nativeElement.getBoundingClientRect();

      switch (this.position) {
        case TooltipPosition.BELOW: {
          this.componentRef.instance.left = Math.round((right - left) / 2 + left);
          this.componentRef.instance.top = Math.round(bottom);
          break;
        }
        case TooltipPosition.ABOVE: {
          this.componentRef.instance.left = Math.round((right - left) / 2 + left);
          this.componentRef.instance.top = Math.round(top);
          break;
        }
        case TooltipPosition.RIGHT: {
          this.componentRef.instance.left = Math.round(right);
          this.componentRef.instance.top = Math.round(top + (bottom - top) / 2);
          break;
        }
        case TooltipPosition.LEFT: {
          this.componentRef.instance.left = Math.round(left);
          this.componentRef.instance.top = Math.round(top + (bottom - top) / 2);
          break;
        }
        default: {
          break;
        }
      }
    }
  }

  private showTooltip() {
    if (this.componentRef !== null) {
      this.componentRef.instance.visible = true;
    }
  }

  private setHideTooltipTimeout() {
    this.hideTimeout = window.setTimeout(this.destroy.bind(this), this.hideDelay);
  }

  ngOnDestroy(): void {
    this.destroy();
  }

  destroy(): void {
    if (this.componentRef !== null) {
      window.clearInterval(this.showTimeout);
      window.clearInterval(this.hideDelay);
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }

}
