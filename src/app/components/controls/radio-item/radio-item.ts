import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-radio-item',
  imports: [AngularSvgIconModule],
  templateUrl: './radio-item.html',
  styleUrl: './radio-item.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioItem {
  readonly id = input('');
  readonly name = input('');
  readonly value = input('');
  readonly label = input('');
  readonly checked = input(false);
  readonly disabled = input(false);
  readonly selected = output<string>();
}
