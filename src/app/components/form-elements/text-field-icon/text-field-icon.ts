import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { IIcon } from '@models/interfaces/icon';
import { INTERFACE_INTERACTION } from '@shared/constants/icons';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ValueAccessorBase } from '@shared/base/value-accessor.base';
import { provideValueAccessor } from '@shared/providers/provide-value-accessor';

@Component({
  selector: 'app-text-field-icon',
  imports: [AngularSvgIconModule],
  templateUrl: './text-field-icon.html',
  styleUrl: './text-field-icon.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideValueAccessor(() => TextFieldIcon)],
})
export class TextFieldIcon extends ValueAccessorBase<string> {
  readonly icon = input<IIcon>(INTERFACE_INTERACTION.search);
  readonly placeholder = input('');
  protected readonly src = computed(() => `icons/${this.icon().library}/${this.icon().file}`);
}
