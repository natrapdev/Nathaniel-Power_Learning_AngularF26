import { Component, inject } from '@angular/core';
import { AirlineListItem } from '../airline-list-item/airline-list-item';
import { AirlineListItemEvent } from '../airline-list-item/airline-list-item-event';
import { AirlineService } from '../services/airline';

@Component({
  imports: [AirlineListItem],
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

  onAirlineClicked(event: AirlineListItemEvent) {
    console.log(event);

    //this.airlineService.removeAirline(event.id);
  }
}
