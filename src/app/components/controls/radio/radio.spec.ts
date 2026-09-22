import { TestBed } from '@angular/core/testing';
import { ICON_TEST_PROVIDERS } from '@shared/testing/icon-testing';
import { Radio } from './radio';

describe('Radio', () => {
  const create = () => {
    TestBed.configureTestingModule({ imports: [Radio], providers: [...ICON_TEST_PROVIDERS] });
    const fixture = TestBed.createComponent(Radio);
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
    fixture.componentRef.setInput('id', '4');
    fixture.componentRef.setInput('name', 'paper-radio');
    fixture.componentRef.setInput('value', '1');
    fixture.componentRef.setInput('checked', true);
    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();
    const el = input();
    expect(el.id).toBe('4');
    expect(el.name).toBe('paper-radio');
    expect(el.value).toBe('1');
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
    fixture.componentRef.setInput('value', '2');
    fixture.detectChanges();
    const selected = vi.fn();
    fixture.componentInstance.selected.subscribe(selected);
    const el = input();
    el.checked = true;
    el.dispatchEvent(new Event('change'));
    expect(selected).toHaveBeenCalledWith('2');
  });
});
