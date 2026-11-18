import { Component, inject } from '@angular/core';
import { FlightListItem } from '../flight-list-item/flight-list-item';
import { FlightListItemEvent } from '../flight-list-item/flight-list-item-event';
import { FlightService } from '../services/flight';
import { FlightApiService } from '../services/flight-api';
import { LoadingService } from '../services/loading/loading-service';

@Component({
  imports: [FlightListItem],
  selector: 'app-flight-list',
  styleUrl: './flight-list.css',
  templateUrl: './flight-list.html',
})
export class FlightList {
  private flightService = inject(FlightService);
  private loadingService = inject(LoadingService);

  isLoading = this.loadingService.isLoading;

  flightList = this.flightService.flightList;

  filterType = this.flightService.filterType;
  filteredFlightList = this.flightService.filteredFlightList;
  filteredFlightCount = this.flightService.filteredFlightCount;

  onFlightRightClicked(event: FlightListItemEvent) {
    console.log(event);

    this.flightService.removeFlight(event.id);
  }
}
