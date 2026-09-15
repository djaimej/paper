import { ButtonFloatingAction } from './button-floating-action';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ICON_TEST_PROVIDERS } from '@shared/testing/icon-testing';

describe('ButtonFloatingAction', () => {
  let component: ButtonFloatingAction;
  let fixture: ComponentFixture<ButtonFloatingAction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonFloatingAction],
      providers: [...ICON_TEST_PROVIDERS],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonFloatingAction);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
