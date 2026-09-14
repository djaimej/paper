import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, HostListener, Input, OnChanges, Output } from '@angular/core';
import { IIcon } from '@models/interfaces/icon';
import { Size, Variant } from '@models/types/properties';
import { ButtonType } from '@models/types/button';
import { INTERFACE_INTERACTION } from '@shared/constants/icons';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-button-icon',
  imports: [AngularSvgIconModule],
  templateUrl: './button-icon.html',
  styleUrl: './button-icon.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonIcon implements OnChanges {
  @Input() icon: IIcon = INTERFACE_INTERACTION.link;
  @Input() variant: Variant = 'solid';
  @Input() type: ButtonType = 'button';
  @Input() size: Size = 'md';
  @Input() disabled = false;
  @Output() onClick = new EventEmitter<Event>();
  src = '';

  ngOnChanges(): void {
    this.src = `icons/${this.icon.library}/${this.icon.file}`;
  }

  @HostBinding('class') get classes(): string {
    return `${this.size} ${this.variant} ${this.disabled ? 'disabled' : ''}`;
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
