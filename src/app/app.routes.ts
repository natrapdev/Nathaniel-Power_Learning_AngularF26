import { Routes } from '@angular/router';
import { AirlineDetail } from './airline-detail/airline-detail';
import { AirlineList } from './airline-list/airline-list';

export const routes: Routes = [
  { path: 'airlines', component: AirlineList },
  { path: 'airlines/:id', component: AirlineDetail }
];
