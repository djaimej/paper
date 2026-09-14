import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';
import { IIcon } from '@models/interfaces/icon';
import { Variant } from '@models/types/properties';
import { ButtonType } from '@models/types/button';
import { INTERFACE_INTERACTION } from '@shared/constants/icons';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-button-floating-action',
  imports: [AngularSvgIconModule],
  templateUrl: './button-floating-action.html',
  styleUrl: './button-floating-action.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonFloatingAction {
  @Input() icon: IIcon = INTERFACE_INTERACTION.plus;
  @Input() variant: Variant = 'solid';
  @Input() type: ButtonType = 'button';
  @Input() disabled = false;
  @Output() onClick = new EventEmitter<any>();
  src: string = ''

  ngOnInit(): void {
    this.src = `icons/${this.icon.library}/${this.icon.file}`;
  }

  @HostBinding('class') get classes(): string {
    this.src = `icons/${this.icon.library}/${this.icon.file}`;
    return `${this.variant} ${this.disabled ? 'disabled' : ''}`;
  }

  @HostListener('click', ['$event'])
  onClickButton(event: Event): void {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    this.onClick.emit(event);
  }
}
