import { Component, signal } from '@angular/core';
import { AirlineList } from './airline-list/airline-list';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  imports: [AirlineList, RouterOutlet, RouterLinkActive, RouterLink],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Nathaniel-Power-Learning-AngularF26');
  favNumber: number = 6;
  countryName: string = 'Canada';
}
