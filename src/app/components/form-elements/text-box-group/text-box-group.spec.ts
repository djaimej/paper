import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBoxGroup } from './text-box-group';

describe('TextBoxGroup', () => {
  let component: TextBoxGroup;
  let fixture: ComponentFixture<TextBoxGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextBoxGroup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextBoxGroup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
