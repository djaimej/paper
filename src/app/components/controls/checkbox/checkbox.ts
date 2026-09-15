import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ValueAccessorBase } from '@shared/base/value-accessor.base';
import { provideValueAccessor } from '@shared/utils/provide-value-accessor';

@Component({
  selector: 'app-checkbox',
  imports: [AngularSvgIconModule],
  templateUrl: './checkbox.html',
  styleUrl: './checkbox.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideValueAccessor(Checkbox)],
})
export class Checkbox extends ValueAccessorBase<boolean> { }
