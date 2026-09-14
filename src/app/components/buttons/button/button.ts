import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, HostBinding, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Size, Variant } from '@models/types/properties';
import { ButtonType } from '@models/types/button';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrls: ['./button.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Button {
  @Input() type: ButtonType = 'button';
  @Input() size: Size = 'md';
  @Input() variant: Variant = 'solid';
  @Input() disabled = false;
  @Output() onClick = new EventEmitter<Event>();

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
