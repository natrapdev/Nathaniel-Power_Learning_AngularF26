import { TestBed } from '@angular/core/testing';
import { MockAirline } from './mock-flight';

describe('MockAirline', () => {
  let service: MockAirline;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockAirline);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
