import { TestBed } from '@angular/core/testing';
import { ICON_TEST_PROVIDERS } from '@shared/testing/icon-testing';
import { Badge } from './badge';

describe('Badge', () => {
  it('renders the text input', () => {
    TestBed.configureTestingModule({ imports: [Badge], providers: [...ICON_TEST_PROVIDERS] });
    const fixture = TestBed.createComponent(Badge);
    fixture.componentRef.setInput('text', 'Nuevo');
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Nuevo');
  });
});
