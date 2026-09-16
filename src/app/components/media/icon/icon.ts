import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { IIcon } from '@models/interfaces/icon';
import { Size } from '@models/types/properties';
import { INTERFACE_INTERACTION } from '@shared/constants/icons';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-icon',
  imports: [AngularSvgIconModule],
  templateUrl: './icon.html',
  styleUrl: './icon.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Icon {
  readonly icon = input<IIcon>(INTERFACE_INTERACTION.star);
  readonly size = input<Size>('md');
  protected readonly src = computed(() => `icons/${this.icon().library}/${this.icon().file}`);
}
