import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AirlineDetail } from './airline-detail';

describe('AirlineDetail', () => {
  let component: AirlineDetail;
  let fixture: ComponentFixture<AirlineDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirlineDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(AirlineDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
