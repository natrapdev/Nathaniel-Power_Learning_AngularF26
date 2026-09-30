import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AirlineList } from './airline-list';

describe('AirlineList', () => {
  let component: AirlineList;
  let fixture: ComponentFixture<AirlineList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirlineList],
    }).compileComponents();

    fixture = TestBed.createComponent(AirlineList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
