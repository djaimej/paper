import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonFloatingAction } from './button-floating-action';

describe('ButtonFloatingAction', () => {
  let component: ButtonFloatingAction;
  let fixture: ComponentFixture<ButtonFloatingAction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonFloatingAction]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonFloatingAction);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
