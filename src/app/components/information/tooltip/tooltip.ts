import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Color } from '@models/enums';
import { TooltipPosition } from '@models/enums/tooltip';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.html',
  styleUrl: './tooltip.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Tooltip {
  readonly tooltip = signal('');
  readonly position = signal<TooltipPosition>(TooltipPosition.ABOVE);
  readonly color = signal<Color>(Color.WHITE);
  readonly left = signal(0);
  readonly top = signal(0);
  readonly visible = signal(true);
}
