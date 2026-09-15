import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { INTERFACE_INTERACTION } from '@shared/constants/icons';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-tag',
  imports: [AngularSvgIconModule],
  templateUrl: './tag.html',
  styleUrl: './tag.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Tag {
  readonly disipable = input(false);
  readonly type = input<'white' | 'black'>('white');
  readonly text = input('');

  protected readonly visible = signal(true);
  protected readonly srcClose =
    `icons/${INTERFACE_INTERACTION.clearX.library}/${INTERFACE_INTERACTION.clearX.file}`;

  close(): void {
    this.visible.set(false);
  }
}
