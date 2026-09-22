import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-radio',
  imports: [AngularSvgIconModule],
  templateUrl: './radio.html',
  styleUrl: './radio.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Radio {
  readonly id = input('');
  readonly name = input('');
  readonly value = input('');
  readonly checked = input(false);
  readonly disabled = input(false);
  readonly selected = output<string>();
}
