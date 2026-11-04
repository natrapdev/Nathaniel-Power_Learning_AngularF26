import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AirlineForm } from './airline-form';

describe('AirlineForm', () => {
  let component: AirlineForm;
  let fixture: ComponentFixture<AirlineForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirlineForm],
    }).compileComponents();

    fixture = TestBed.createComponent(AirlineForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
