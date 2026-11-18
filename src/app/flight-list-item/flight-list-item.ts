import { Component, input, output } from '@angular/core';
import { Flight } from '../shared/models/flight'
import { RouterLink } from '@angular/router';
import { FlightListItemEvent } from './flight-list-item-event';
import { FlightRoutePipe } from '../pipes/flight-route-pipe';
import { FlightStatusPipe } from '../pipes/flight-status-pipe';

@Component({
  imports: [RouterLink, FlightRoutePipe, FlightStatusPipe],
  selector: 'app-flight-list-item',
  styleUrl: './flight-list-item.css',
  templateUrl: './flight-list-item.html',
})
export class FlightListItem {
  flight = input.required<Flight>();

  rightClicked = output<FlightListItemEvent>();

  flightClicked(event: MouseEvent): void {
    event.preventDefault();

    let id = this.flight().id;

    if (!id) {
      console.warn('Flight does not have an ID.');
      id = -1;
    }

    this.rightClicked.emit({
      id: id,
      action: 'opened',
    });
  }
}
