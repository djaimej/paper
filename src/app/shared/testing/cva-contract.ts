import { EnvironmentProviders, Provider, Type } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ControlValueAccessor } from '@angular/forms';

export interface CvaContractOptions<T> {
  /** Componente bajo prueba (implementa ControlValueAccessor). */
  readonly component: Type<ControlValueAccessor>;
  /** Selector del control nativo dentro del componente. */
  readonly nativeSelector: string;
  /** Valor escrito con writeValue que debería reflejarse en la vista. */
  readonly writtenValue: T;
  /** Lee lo que muestra la vista, para probar que writeValue se reflejó. */
  readonly readView: (native: HTMLInputElement) => T;
  /** Simula interacción del usuario; devuelve el valor que debería emitir. */
  readonly userInput: (native: HTMLInputElement) => T;
  /** Providers extra (p. ej. svg-icon + HTTP de pruebas). */
  readonly providers?: readonly (Provider | EnvironmentProviders)[];
  /** false mientras el componente no refleje writeValue en el DOM (se salta ese caso). */
  readonly writeValueReflects?: boolean;
}

export function runCvaContract<T>(name: string, options: CvaContractOptions<T>): void {
  const reflects = options.writeValueReflects ?? true;

  describe(`${name} · ControlValueAccessor`, () => {
    let fixture: ComponentFixture<ControlValueAccessor>;
    let cva: ControlValueAccessor;
    let native: HTMLInputElement;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [options.component],
        providers: [...(options.providers ?? [])],
      }).compileComponents();

      fixture = TestBed.createComponent(options.component);
      cva = fixture.componentInstance;
      fixture.detectChanges();
      native = fixture.nativeElement.querySelector(options.nativeSelector);
      expect(native, `ningún elemento coincide con "${options.nativeSelector}"`).not.toBeNull();
    });

    (reflects ? it : it.skip)('refleja writeValue en la vista', async () => {
      cva.writeValue(options.writtenValue);
      fixture.detectChanges();
      await fixture.whenStable();   // ngModel refleja model/disabled en un microtask
      fixture.detectChanges();
      expect(options.readView(native)).toEqual(options.writtenValue);
    });

    it('emite por registerOnChange al recibir input del usuario', () => {
      const onChange = vi.fn();
      cva.registerOnChange(onChange);

      const expected = options.userInput(native);
      fixture.detectChanges();

      expect(onChange).toHaveBeenCalledWith(expected);
    });

    it('marca touched por registerOnTouched al recibir input', () => {
      const onTouched = vi.fn();
      cva.registerOnTouched(onTouched);

      options.userInput(native);
      fixture.detectChanges();

      expect(onTouched).toHaveBeenCalled();
    });

    it('deshabilita el control nativo con setDisabledState', async () => {
      cva.setDisabledState?.(true);
      fixture.detectChanges();
      await fixture.whenStable();
      fixture.detectChanges();
      expect(native.disabled).toBe(true);
    });
  });
}
