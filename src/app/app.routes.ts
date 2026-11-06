import { Routes } from '@angular/router';
import { AirlineDetail } from './airline-detail/airline-detail';
import { AirlineList } from './airline-list/airline-list';
import { AirlineForm } from './airline-form/airline-form';
import { routeGuard } from './toggleable-route-guard';

export const routes: Routes = [
  { path: 'airlines', component: AirlineList },
  { path: 'airlines/:id', component: AirlineDetail },
  { path: 'airlines/edit/:id', component: AirlineForm, canActivate: [routeGuard] },
  { path: 'add-airline', component: AirlineForm }
];
