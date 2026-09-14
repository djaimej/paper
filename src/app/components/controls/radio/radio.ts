import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-radio',
  imports: [FormsModule, AngularSvgIconModule],
  templateUrl: './radio.html',
  styleUrl: './radio.scss',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Radio),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Radio {
  @Input() public id: string = '';
  @Input() public name: string = '';
  @Input() public value: string = '';
  @Input() public disabled: boolean = false;
  private _checked: boolean = false;
  public onChange: (value: boolean) => void = () => {};
  public onTouched: () => void = () => {};

  public get checked(): boolean {
    return this._checked;
  }

  public set checked(val: boolean) {
    this._checked = val;
    this.onChange(val);
    this.onTouched();
  }

  public writeValue(value: boolean): void {
    this._checked = value;
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
