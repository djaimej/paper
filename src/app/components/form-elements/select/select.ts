import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IOption } from '@models/interfaces/select';
import { ValueAccessorBase } from '@shared/base/value-accessor.base';
import { provideValueAccessor } from '@shared/utils/provide-value-accessor';

@Component({
  selector: 'app-select',
  templateUrl: './select.html',
  styleUrl: './select.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideValueAccessor(Select)],
})
export class Select extends ValueAccessorBase<string> {
  readonly name = input('');
  readonly placeholder = input('Select');
  readonly options = input<IOption[]>([]);
}
