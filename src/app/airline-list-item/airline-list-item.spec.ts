import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AirlineListItem } from './airline-list-item';

describe('AirlineListItem', () => {
  let component: AirlineListItem;
  let fixture: ComponentFixture<AirlineListItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirlineListItem],
    }).compileComponents();

    fixture = TestBed.createComponent(AirlineListItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
