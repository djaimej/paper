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
  readonly type = input<'square' | 'circle' | 'skeleton'>('square');
  readonly subtle = input(false);
  readonly size = input(50);
  readonly aspectRatio = input(1);

  protected readonly src = computed(() =>
    this.type() === 'skeleton' ? 'media/skeleton.svg' : 'icons/imaging/image.svg',
  );
  protected readonly ratio = computed(() => (this.type() === 'skeleton' ? 1 : this.aspectRatio()));
}
