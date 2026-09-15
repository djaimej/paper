import { RowItem } from './row-item';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ICON_TEST_PROVIDERS } from '@shared/testing/icon-testing';

describe('RowItem', () => {
  let component: RowItem;
  let fixture: ComponentFixture<RowItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RowItem],
      providers: [...ICON_TEST_PROVIDERS],
    }).compileComponents();

    fixture = TestBed.createComponent(RowItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
