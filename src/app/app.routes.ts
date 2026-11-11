import { Routes } from '@angular/router';
import { FlightDetail } from './flight-detail/flight-detail';
import { FlightList } from './flight-list/flight-list';
import { FlightForm } from './flight-form/flight-form';
import { routeGuard } from './toggleable-route-guard';

export const routes: Routes = [
  { path: 'flights', component: FlightList },
  { path: 'flights/:id', component: FlightDetail },
  { path: 'flights/edit/:id', component: FlightForm, canActivate: [routeGuard] },
  { path: 'add-flight', component: FlightForm }
];
