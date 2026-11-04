import { Component, inject } from '@angular/core';
import { AirlineListItem, ContentEvent } from '../airline-list-item/airline-list-item';
import { AirlineService } from '../services/airline';
import { RouterLink } from '@angular/router';

@Component({
  imports: [AirlineListItem, RouterLink],
  selector: 'app-airline-list',
  styleUrl: './airline-list.css',
  templateUrl: './airline-list.html',
})
export class AirlineList {
  private airlineService = inject(AirlineService);

  airlineList = this.airlineService.airlineList;

  filterType = this.airlineService.filterType;
  filteredAirlineList = this.airlineService.filteredAirlineList;
  filteredAirlineCount = this.airlineService.filteredAirlineCount;

  onAirlineClicked(event: ContentEvent) {
    console.log(event);

    //this.airlineService.removeAirline(event.id);
  }
}
