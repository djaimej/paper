import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-checkbox-item',
  imports: [FormsModule, AngularSvgIconModule],
  templateUrl: './checkbox-item.html',
  styleUrl: './checkbox-item.scss',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxItem),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxItem implements ControlValueAccessor {
  @Input() public id: string = '';
  @Input() public label: string = '';
  @Input() public disabled: boolean = false;
  private _value: boolean = false;
  public onChange: (value: boolean) => void = () => {};
  public onTouched: () => void = () => {};

  public get value(): boolean {
    return this._value;
  }

  public set value(val: boolean) {
    this._value = val;
    this.onChange(val);
    this.onTouched();
  }

  public writeValue(value: boolean): void {
    this._value = value;
  }

  public registerOnChange(fn: (value: boolean) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}