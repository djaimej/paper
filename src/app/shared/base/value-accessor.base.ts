import { computed, Directive, input, signal } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Directive()
export abstract class ValueAccessorBase<T> implements ControlValueAccessor {
  /** id del control nativo. */
  readonly id = input('');
  /** Disabled manual (template-driven); se combina con el del formulario. */
  readonly disabled = input(false);

  /** Valor del control. La vista lo lee con controlValue(). */
  protected readonly controlValue = signal<T | null>(null);

  /** Disabled proveniente de un formulario reactivo (setDisabledState). */
  private readonly formDisabled = signal(false);
  /** Estado efectivo para enlazar: [disabled]="isDisabled()". */
  protected readonly isDisabled = computed(() => this.disabled() || this.formDisabled());

  private onChange: (value: T) => void = () => { };
  private onTouched: () => void = () => { };

  /** Lo invocan los componentes ante la interacción del usuario. */
  protected update(value: T): void {
    this.controlValue.set(value);
    this.onChange(value);
    this.onTouched();
  }

  writeValue(value: T): void {
    this.controlValue.set(value);
  }
  registerOnChange(fn: (value: T) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.formDisabled.set(isDisabled);
  }
}
