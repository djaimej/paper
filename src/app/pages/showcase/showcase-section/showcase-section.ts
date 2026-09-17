import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-showcase-section',
  templateUrl: './showcase-section.html',
  styleUrl: './showcase-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowcaseSection {
  readonly title = input.required<string>();
  readonly description = input('');
}
