import { DestroyRef, Directive, ElementRef, inject, output } from '@angular/core';

@Directive({
  selector: '[appActiveSection]',
})
export class ActiveSectionDirective {
  private readonly host = inject(ElementRef<HTMLElement>);
  readonly activeSection = output<string>();

  constructor() {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          this.activeSection.emit(visible.target.id);
        }
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: [0, 0.25, 0.5, 1] },
    );

    for (const section of Array.from(this.host.nativeElement.children)) {
      console.log(typeof section);
      console.log(section);

      observer.observe(section as Element);
    }
    inject(DestroyRef).onDestroy(() => observer.disconnect());
  }
}
