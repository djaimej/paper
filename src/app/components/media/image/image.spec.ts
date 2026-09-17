import { TestBed } from '@angular/core/testing';
import { ICON_TEST_PROVIDERS } from '@shared/testing/icon-testing';
import { Image } from './image';

describe('Image', () => {
  const create = () => {
    TestBed.configureTestingModule({ imports: [Image], providers: [...ICON_TEST_PROVIDERS] });
    return TestBed.createComponent(Image);
  };

  it('shows the placeholder when there is no src', () => {
    const fixture = create();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('img')).toBeNull();
    expect(fixture.nativeElement.querySelector('svg-icon')).toBeTruthy();
  });

  it('shows the image once src is set', () => {
    const fixture = create();
    fixture.componentRef.setInput('src', 'photo.jpg');
    fixture.detectChanges();
    const img = fixture.nativeElement.querySelector('img') as HTMLImageElement | null;
    expect(img).toBeTruthy();
    expect(img?.getAttribute('src')).toBe('photo.jpg');
    expect(fixture.nativeElement.querySelector('svg-icon')).toBeNull();
  });
});
