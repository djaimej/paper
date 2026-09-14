import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
  selector: 'app-text-field',
  imports: [FormsModule],
  templateUrl: './text-field.html',
  styleUrl: './text-field.scss',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextField),
      multi: true
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextField implements ControlValueAccessor {
  @Input() public id: string = '';
  @Input() public placeholder: string = '';
  @Input() public disabled: boolean = false;
  public onChange: any = () => {};
  public onTouched: any = () => {};

  constructor() { }

  public set value(val: string){
    if(val !== undefined) {
      this.onChange(val)
      this.onTouched(val)
    } 
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
