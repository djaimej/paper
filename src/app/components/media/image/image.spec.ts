import { Image } from './image';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ICON_TEST_PROVIDERS } from '@shared/testing/icon-testing';

describe('Image', () => {
  let component: Image;
  let fixture: ComponentFixture<Image>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Image],
      providers: [...ICON_TEST_PROVIDERS],
    }).compileComponents();

    fixture = TestBed.createComponent(Image);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
