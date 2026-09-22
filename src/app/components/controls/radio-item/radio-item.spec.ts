import { TestBed } from '@angular/core/testing';
import { ICON_TEST_PROVIDERS } from '@shared/testing/icon-testing';
import { RadioItem } from './radio-item';

describe('RadioItem', () => {
  const create = () => {
    TestBed.configureTestingModule({ imports: [RadioItem], providers: [...ICON_TEST_PROVIDERS] });
    const fixture = TestBed.createComponent(RadioItem);
    const input = () => fixture.nativeElement.querySelector('input[type="radio"]') as HTMLInputElement;
    return { fixture, input };
  };

  it('se crea', () => {
    const { fixture } = create();
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('refleja id/name/value/checked/disabled en el input nativo', () => {
    const { fixture, input } = create();
    fixture.componentRef.setInput('id', 'blue');
    fixture.componentRef.setInput('name', 'accent-color');
    fixture.componentRef.setInput('value', 'blue');
    fixture.componentRef.setInput('checked', true);
    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();
    const el = input();
    expect(el.id).toBe('blue');
    expect(el.name).toBe('accent-color');
    expect(el.value).toBe('blue');
    expect(el.checked).toBe(true);
    expect(el.disabled).toBe(true);
  });

  it('no está marcado cuando checked es false', () => {
    const { fixture, input } = create();
    fixture.componentRef.setInput('checked', false);
    fixture.detectChanges();
    expect(input().checked).toBe(false);
  });

  it('emite selected con value() al cambiar', () => {
    const { fixture, input } = create();
    fixture.componentRef.setInput('value', 'red');
    fixture.detectChanges();
    const selected = vi.fn();
    fixture.componentInstance.selected.subscribe(selected);
    const el = input();
    el.checked = true;
    el.dispatchEvent(new Event('change'));
    expect(selected).toHaveBeenCalledWith('red');
  });

  it('renderiza el label', () => {
    const { fixture } = create();
    fixture.componentRef.setInput('label', 'Blue');
    fixture.detectChanges();
    const label = fixture.nativeElement.querySelector('.label') as HTMLElement;
    expect(label.textContent?.trim()).toBe('Blue');
  });
});
