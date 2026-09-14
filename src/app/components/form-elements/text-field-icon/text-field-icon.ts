import { ChangeDetectionStrategy, Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IIcon } from '@models/interfaces/icon';
import { INTERFACE_INTERACTION } from '@shared/constants/icons';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-text-field-icon',
  imports: [AngularSvgIconModule, FormsModule],
  templateUrl: './text-field-icon.html',
  styleUrl: './text-field-icon.scss',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextFieldIcon),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextFieldIcon implements OnInit, ControlValueAccessor {
  @Input() public icon: IIcon = INTERFACE_INTERACTION.search;
  @Input() public id: string = '';
  @Input() public placeholder: string = '';
  @Input() public disabled: boolean = false;
  public onChange: any = () => {};
  public onTouched: any = () => {};
  public src: string = '';

  constructor() { }

  ngOnInit(): void {
    this.src = `icons/${this.icon.library}/${this.icon.file}`;
  }

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
