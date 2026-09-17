import { TestBed } from '@angular/core/testing';
import { ICON_TEST_PROVIDERS } from '@shared/testing/icon-testing';
import { Showcase } from './showcase';

describe('Showcase', () => {
  it('creates', () => {
    TestBed.configureTestingModule({ imports: [Showcase], providers: [...ICON_TEST_PROVIDERS] });
    const fixture = TestBed.createComponent(Showcase);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });
});
