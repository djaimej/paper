import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { Size, Variant } from '@models/types/properties';
import { ButtonType } from '@models/types/button';

@Component({
  selector: 'app-button',
  templateUrl: './button.html',
  styleUrl: './button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    '(click)': 'onClickButton($event)',
  },
})
export class Button {
  readonly type = input<ButtonType>('button');
  readonly size = input<Size>('md');
  readonly variant = input<Variant>('solid');
  readonly disabled = input(false);
  readonly onClick = output<Event>();

  protected readonly classes = computed(
    () => `${this.size()} ${this.variant()} ${this.disabled() ? 'disabled' : ''}`,
  );

  onClickButton(event: Event): void {
    if (this.disabled()) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    this.onClick.emit(event);
  }
}
