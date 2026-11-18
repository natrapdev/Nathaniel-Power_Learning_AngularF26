import { Routes } from '@angular/router';
import { FlightList } from './flight-list/flight-list';
import { routeGuard } from './toggleable-route-guard';

export const routes: Routes = [
  { path: 'flights', component: FlightList },
  {
    path: 'flights/:id',
    loadComponent: () => import('./flight-detail/flight-detail').then((m) => m.FlightDetail),
  },
  {
    path: 'flights/edit/:id',
    loadComponent: () => import('./flight-form/flight-form').then((m) => m.FlightForm),
    canActivate: [routeGuard],
  },
  {
    path: 'add-flight',
    loadComponent: () => import('./flight-form/flight-form').then((m) => m.FlightForm),
  },
];
