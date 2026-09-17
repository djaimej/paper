import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    '(click)': 'onClickButton($event)',
  },
})
export class ButtonIcon {
  readonly icon = input<IIcon>(INTERFACE_INTERACTION.link);
  readonly variant = input<Variant>('solid');
  readonly type = input<ButtonType>('button');
  readonly size = input<Size>('md');
  readonly disabled = input(false);
  readonly clicked = output<Event>();

  protected readonly src = computed(() => `icons/${this.icon().library}/${this.icon().file}`);
  protected readonly classes = computed(
    () => `${this.size()} ${this.variant()} ${this.disabled() ? 'disabled' : ''}`,
  );

  onClickButton(event: Event): void {
    if (this.disabled()) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    this.clicked.emit(event);
  }
}
