import { TestBed } from '@angular/core/testing';
import { Select } from './select';

describe('Select · ControlValueAccessor', () => {
  it('refleja writeValue y emite en change', () => {
    TestBed.configureTestingModule({ imports: [Select] });
    const fixture = TestBed.createComponent(Select);
    fixture.componentRef.setInput('options', [
      { value: 'a', label: 'A' },
      { value: 'b', label: 'B' },
    ]);
    fixture.detectChanges();
    const native = fixture.nativeElement.querySelector('select') as HTMLSelectElement;

    fixture.componentInstance.writeValue('b');
    fixture.detectChanges();
    expect(native.value).toBe('b');

    const onChange = vi.fn();
    fixture.componentInstance.registerOnChange(onChange);
    native.value = 'a';
    native.dispatchEvent(new Event('change'));
    expect(onChange).toHaveBeenCalledWith('a');
  });
});
