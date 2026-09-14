import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFieldGroup } from './text-field-group';

describe('TextFieldGroup', () => {
  let component: TextFieldGroup;
  let fixture: ComponentFixture<TextFieldGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextFieldGroup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextFieldGroup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
