import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ValueAccessorBase } from '@shared/base/value-accessor.base';
import { provideValueAccessor } from '@shared/providers/provide-value-accessor';

@Component({
  selector: 'app-radio-item',
  imports: [AngularSvgIconModule],
  templateUrl: './radio-item.html',
  styleUrl: './radio-item.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideValueAccessor(() => RadioItem)],
})
export class RadioItem extends ValueAccessorBase<boolean> {
  readonly name = input('');
  readonly value = input('');
  readonly label = input('');
}
