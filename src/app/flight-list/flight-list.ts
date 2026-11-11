import { Component, inject } from '@angular/core';
import { FlightListItem } from '../flight-list-item/flight-list-item';
import { FlightListItemEvent } from '../flight-list-item/flight-list-item-event';
import { FlightService } from '../services/flight';
import { FlightApiService } from '../services/flight-api';

@Component({
  imports: [FlightListItem],
  selector: 'app-flight-list',
  styleUrl: './flight-list.css',
  templateUrl: './flight-list.html',
})
export class FlightList {
  private flightService = inject(FlightService);
  // isLoading = this.flightService.loading;
  //error = this.flightService.error;

  flightList = this.flightService.flightList;

  filterType = this.flightService.filterType;
  filteredFlightList = this.flightService.filteredFlightList;
  filteredFlightCount = this.flightService.filteredFlightCount;

  onFlightClicked(event: FlightListItemEvent) {
    console.log(event);

    //this.flightService.removeFlight(event.id);
  }
}
