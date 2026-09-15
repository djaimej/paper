import { Tag } from './tag';
import { TestBed } from '@angular/core/testing';

describe('Tag', () => {
  it('renders the text input', () => {
    TestBed.configureTestingModule({ imports: [Tag] });
    const fixture = TestBed.createComponent(Tag);
    fixture.componentRef.setInput('text', 'Nuevo');
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Nuevo');
  });
});
