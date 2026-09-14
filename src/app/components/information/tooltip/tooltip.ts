import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Color } from '@models/enums';
import { TooltipPosition } from '@models/enums/tooltip';

@Component({
  selector: 'app-tooltip',
  imports: [CommonModule],
  templateUrl: './tooltip.html',
  styleUrl: './tooltip.scss',
  standalone: true
})
export class Tooltip {
  position: TooltipPosition = TooltipPosition.ABOVE;
  color: Color = Color.WHITE;
  @Input() tooltip: string = '';
  left = 0;
  top = 0;
  visible = true;
}
