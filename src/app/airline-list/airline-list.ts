import { Component, inject } from '@angular/core';
import { AirlineListItem, ContentEvent } from '../airline-list-item/airline-list-item';
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
  cargoAirlineList = this.airlineService.cargoAirlineList;

  onAirlineClicked(event: ContentEvent) {
    console.log(event)
  }
}
