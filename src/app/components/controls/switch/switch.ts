import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ValueAccessorBase } from '@shared/base/value-accessor.base';
import { provideValueAccessor } from '@shared/providers/provide-value-accessor';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.html',
  styleUrl: './switch.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideValueAccessor(() => Switch)],
})
export class Switch extends ValueAccessorBase<boolean> {
  readonly label = input('');
}
