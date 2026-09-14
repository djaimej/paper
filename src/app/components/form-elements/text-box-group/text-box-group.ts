import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormControl, FormsModule, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

@Component({
  selector: 'app-text-box-group',
  imports: [FormsModule],
  templateUrl: './text-box-group.html',
  styleUrl: './text-box-group.scss',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextBoxGroup),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextBoxGroup implements ControlValueAccessor {
  @Input() public label: string = '';
  @Input() public hint: string = '';
  @Input() public maxLength: number = 1000;
  @Input() public placeholder: string = '';
  @Input() public id: string = '';
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

  public writeValue(value: string): void {
    this.value = value;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
