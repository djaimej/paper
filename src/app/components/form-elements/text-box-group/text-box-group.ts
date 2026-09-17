import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { ValueAccessorBase } from '@shared/base/value-accessor.base';
import { provideValueAccessor } from '@shared/providers/provide-value-accessor';

@Component({
  selector: 'app-text-box-group',
  templateUrl: './text-box-group.html',
  styleUrl: './text-box-group.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideValueAccessor(() => TextBoxGroup)],
})
export class TextBoxGroup extends ValueAccessorBase<string> {
  readonly placeholder = input('');
  readonly label = input('');
  readonly hint = input('');
  readonly maxLength = input(1000);
  protected readonly length = computed(() => this.controlValue()?.length ?? 0);
}
