import { ChangeDetectionStrategy, Component, input } from '@angular/core';
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
  readonly subtle = input(false);
  readonly size = input(50);
  readonly aspectRatio = input(1);
}
