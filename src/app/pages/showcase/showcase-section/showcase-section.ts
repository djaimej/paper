import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { CodeBlock } from '../code-block/code-block';

@Component({
  selector: 'app-showcase-section',
  imports: [CodeBlock],
  templateUrl: './showcase-section.html',
  styleUrl: './showcase-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[id]': 'anchor()' },
})
export class ShowcaseSection {
  readonly title = input.required<string>();
  readonly description = input('');
  readonly code = input('');
  readonly justify = input<'start' | 'around'>('start');

  readonly anchor = computed(() =>
    this.title().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
  );
}
