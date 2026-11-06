import { Service, signal } from '@angular/core';

@Service()
export class RouteGuardToggleService {
  guardEnabled = signal(true);

  toggleGuard() {
    this.guardEnabled.update(value => !value);
  }
}
