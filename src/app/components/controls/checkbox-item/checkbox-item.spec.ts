import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxItem } from './checkbox-item';

describe('CheckboxItem', () => {
  let component: CheckboxItem;
  let fixture: ComponentFixture<CheckboxItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
