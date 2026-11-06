import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { RouteGuardToggleService } from './route-guard-toggle-service';

export const routeGuard: CanActivateFn = () => {
  const router = inject(Router);
  const toggle = inject(RouteGuardToggleService);

  return toggle.guardEnabled() ? true : router.createUrlTree(['/airlines']);
}
