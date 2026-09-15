import { CheckboxItem } from './checkbox-item';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ICON_TEST_PROVIDERS } from '@shared/testing/icon-testing';

describe('CheckboxItem', () => {
  let component: CheckboxItem;
  let fixture: ComponentFixture<CheckboxItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxItem],
      providers: [...ICON_TEST_PROVIDERS],
    }).compileComponents();

    fixture = TestBed.createComponent(CheckboxItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
