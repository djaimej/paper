import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { IIcon } from '@models/interfaces/icon';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-toast',
  imports: [AngularSvgIconModule],
  templateUrl: './toast.html',
  styleUrl: './toast.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Toast {
  readonly color = input<'white' | 'black'>('black');
  readonly message = input('');
  readonly icon = input<IIcon>({ library: 'interface-interaction', file: 'info-circle.svg' });

  protected readonly visible = signal(true);
  protected readonly src = computed(() => `icons/${this.icon().library}/${this.icon().file}`);
  protected readonly srcClose = 'icons/interface-interaction/close-exit.svg';

  close(): void {
    this.visible.set(false);
  }
}
