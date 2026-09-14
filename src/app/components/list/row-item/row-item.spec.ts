import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowItem } from './row-item';

describe('RowItem', () => {
  let component: RowItem;
  let fixture: ComponentFixture<RowItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RowItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RowItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
