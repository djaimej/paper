import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowMessage } from './row-message';

describe('RowMessage', () => {
  let component: RowMessage;
  let fixture: ComponentFixture<RowMessage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RowMessage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RowMessage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
