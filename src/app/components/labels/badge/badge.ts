import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { IIcon } from '@models/interfaces/icon';
import { INTERFACE_INTERACTION } from '@shared/constants/icons';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-badge',
  imports: [AngularSvgIconModule],
  templateUrl: './badge.html',
  styleUrl: './badge.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Badge {
  readonly icon = input<IIcon>(INTERFACE_INTERACTION.check);
  readonly type = input<'default' | 'white' | 'black'>('default');
  readonly text = input('');

  protected readonly visible = signal(true);
  protected readonly src = computed(() => `icons/${this.icon().library}/${this.icon().file}`);
  protected readonly srcClose =
    `icons/${INTERFACE_INTERACTION.clearXSolid.library}/${INTERFACE_INTERACTION.clearXSolid.file}`;

  close(): void {
    this.visible.set(false);
  }
}
