import { Component, input, output } from '@angular/core';
import { Flight } from '../shared/models/flight'
import { RouterLink } from '@angular/router';
import { FlightListItemEvent } from './flight-list-item-event';

@Component({
  imports: [RouterLink],
  selector: 'app-flight-list-item',
  styleUrl: './flight-list-item.css',
  templateUrl: './flight-list-item.html',
})
export class FlightListItem {
  flight = input.required<Flight>();

  opened = output<FlightListItemEvent>();

  flightClicked(): void {
    let id = this.flight().id;

    if (!id) {
      id = "No ID";
    }

    this.opened.emit({
      id: id,
      action: 'opened',
    });
  }
}
