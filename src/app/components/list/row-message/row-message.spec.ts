import { RowMessage } from './row-message';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ICON_TEST_PROVIDERS } from '@shared/testing/icon-testing';

describe('RowMessage', () => {
  let component: RowMessage;
  let fixture: ComponentFixture<RowMessage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RowMessage],
      providers: [...ICON_TEST_PROVIDERS],
    }).compileComponents();

    fixture = TestBed.createComponent(RowMessage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
