import { TextFieldIcon } from './text-field-icon';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ICON_TEST_PROVIDERS } from '@shared/testing/icon-testing';

describe('TextFieldIcon', () => {
  let component: TextFieldIcon;
  let fixture: ComponentFixture<TextFieldIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextFieldIcon],
      providers: [...ICON_TEST_PROVIDERS],
    }).compileComponents();

    fixture = TestBed.createComponent(TextFieldIcon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
