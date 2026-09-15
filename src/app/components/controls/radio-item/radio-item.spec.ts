import { RadioItem } from './radio-item';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ICON_TEST_PROVIDERS } from '@shared/testing/icon-testing';

describe('RadioItem', () => {
  let component: RadioItem;
  let fixture: ComponentFixture<RadioItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioItem],
      providers: [...ICON_TEST_PROVIDERS],
    }).compileComponents();

    fixture = TestBed.createComponent(RadioItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
