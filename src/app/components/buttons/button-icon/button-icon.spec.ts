import { ButtonIcon } from './button-icon';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ICON_TEST_PROVIDERS } from '@shared/testing/icon-testing';

describe('ButtonIcon', () => {
  let component: ButtonIcon;
  let fixture: ComponentFixture<ButtonIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonIcon],
      providers: [...ICON_TEST_PROVIDERS],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonIcon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
