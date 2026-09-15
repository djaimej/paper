import { TestBed } from '@angular/core/testing';
import { Button } from './button';

describe('Button', () => {
  it('emits onClick when enabled', () => {
    const fixture = TestBed.createComponent(Button);
    fixture.detectChanges();
    const seen: Event[] = [];
    fixture.componentInstance.onClick.subscribe((e) => seen.push(e));

    fixture.nativeElement.dispatchEvent(new MouseEvent('click'));
    expect(seen).toHaveLength(1);
  });

  it('does not emit onClick when disabled', () => {
    const fixture = TestBed.createComponent(Button);
    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();
    const seen: Event[] = [];
    fixture.componentInstance.onClick.subscribe((e) => seen.push(e));

    fixture.nativeElement.dispatchEvent(new MouseEvent('click'));
    expect(seen).toHaveLength(0);
  });
});
