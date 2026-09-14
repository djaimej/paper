import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFieldIcon } from './text-field-icon';

describe('TextFieldIcon', () => {
  let component: TextFieldIcon;
  let fixture: ComponentFixture<TextFieldIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextFieldIcon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextFieldIcon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
