import { TestBed } from '@angular/core/testing';
import { ICON_TEST_PROVIDERS } from '@shared/testing/icon-testing';
import { Toast } from './toast';

describe('Toast', () => {
  it('emits dismissed when the close icon is clicked', () => {
    TestBed.configureTestingModule({ imports: [Toast], providers: [...ICON_TEST_PROVIDERS] });
    const fixture = TestBed.createComponent(Toast);
    fixture.detectChanges();

    let count = 0;
    fixture.componentInstance.dismissed.subscribe(() => count++);
    (fixture.nativeElement.querySelector('.close') as HTMLElement).dispatchEvent(new MouseEvent('click'));

    expect(count).toBe(1);
  });
});
