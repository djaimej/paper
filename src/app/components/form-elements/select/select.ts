import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IOption } from '@models/interfaces/select';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-select',
  imports: [CommonModule, FormsModule, AngularSvgIconModule],
  templateUrl: './select.html',
  styleUrl: './select.scss',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Select),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Select implements ControlValueAccessor {
  @Input() public id: string = '';
  @Input() public name: string = '';
  @Input() public placeholder: string = 'Select';
  @Input() public options: IOption[] = [];
  @Input() public disabled: boolean = false;
  public onChange: any = () => { };
  public onTouched: any = () => { };

  constructor() {}

  public set value(val: string) {
    this.onChange(val);
    this.onTouched(val);
  }

  public writeValue(value: string): void {
    this.value = value;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
