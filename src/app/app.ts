import { Component, inject, signal } from '@angular/core';
import { FlightList } from './flight-list/flight-list';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { RouteGuardToggleService } from './route-guard-toggle-service';

@Component({
  imports: [FlightList, RouterOutlet, RouterLinkActive, RouterLink],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  editGuard = inject(RouteGuardToggleService);
}
