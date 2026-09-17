import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-image',
  imports: [AngularSvgIconModule],
  templateUrl: './image.html',
  styleUrl: './image.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Image {
  readonly type = input<'square' | 'circle'>('square');
  readonly ratio = input(1);
  readonly src = input('');
  readonly alt = input('');

  protected readonly placeholder = 'icons/imaging/image.svg';
  protected readonly effectiveRatio = computed(() => (this.type() === 'circle' ? 1 : this.ratio()));
}
