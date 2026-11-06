import { TestBed } from '@angular/core/testing';
import { RouteGuardToggleService } from './route-guard-toggle-service';

describe('RouteGuardToggleService', () => {
  let service: RouteGuardToggleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteGuardToggleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
