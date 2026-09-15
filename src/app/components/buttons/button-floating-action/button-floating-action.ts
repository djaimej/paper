import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    '(click)': 'onClickButton($event)',
  },
})
export class ButtonFloatingAction {
  readonly icon = input<IIcon>(INTERFACE_INTERACTION.plus);
  readonly variant = input<Variant>('solid');
  readonly type = input<ButtonType>('button');
  readonly disabled = input(false);
  readonly onClick = output<Event>();

  protected readonly src = computed(() => `icons/${this.icon().library}/${this.icon().file}`);
  protected readonly classes = computed(
    () => `${this.variant()} ${this.disabled() ? 'disabled' : ''}`,
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
