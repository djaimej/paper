import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { ValueAccessorBase } from '@shared/base/value-accessor.base';
import { provideValueAccessor } from '@shared/providers/provide-value-accessor';

@Component({
  selector: 'app-text-field-group',
  templateUrl: './text-field-group.html',
  styleUrl: './text-field-group.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideValueAccessor(() => TextFieldGroup)],
})
export class TextFieldGroup extends ValueAccessorBase<string> {
  readonly placeholder = input('');
  readonly label = input('');
  readonly hint = input('');
  readonly maxLength = input(1000);
  protected readonly length = computed(() => this.controlValue()?.length ?? 0);
}
