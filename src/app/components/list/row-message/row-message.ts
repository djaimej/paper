import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-row-message',
  imports: [AngularSvgIconModule],
  templateUrl: './row-message.html',
  styleUrl: './row-message.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RowMessage {
  readonly imageSrc = input('');
  readonly label = input('');
  readonly description = input('');
  readonly date = input('');
  readonly onAction = output<void>();
  protected readonly src = 'icons/imaging/image.svg';
}
