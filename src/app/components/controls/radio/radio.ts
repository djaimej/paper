import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ValueAccessorBase } from '@shared/base/value-accessor.base';
import { provideValueAccessor } from '@shared/utils/provide-value-accessor';

@Component({
  selector: 'app-radio',
  imports: [AngularSvgIconModule],
  templateUrl: './radio.html',
  styleUrl: './radio.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideValueAccessor(Radio)],
})
export class Radio extends ValueAccessorBase<boolean> {
  readonly name = input('');
  readonly value = input('');
}
