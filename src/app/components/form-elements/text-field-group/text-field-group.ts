import { ChangeDetectionStrategy, Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

@Component({
  selector: 'app-text-field-group',
  imports: [FormsModule],
  templateUrl: './text-field-group.html',
  styleUrl: './text-field-group.scss',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextFieldGroup),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextFieldGroup implements ControlValueAccessor {
  @Input() public id: string = '';
  @Input() public placeholder: string = '';
  @Input() public label: string = '';
  @Input() public hint: string = '';
  @Input() public maxLength: number = 1000;
  @Input() public disabled: boolean = false;
  public length: number = 0;
  public onChange: any = () => {};
  public onTouched: any = () => {};

  constructor() {}

  public set value(val: string){
    if(val !== undefined) {
      this.length = val.length;
      this.onChange(val)
      this.onTouched(val)
    } 
  }

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
