import { Component } from '@angular/core';
import { Airline } from '../shared/models/airline';
import { AirlineListItem, ContentEvent } from '../airline-list-item/airline-list-item';

@Component({
  imports: [AirlineListItem],
  selector: 'app-airline-list',
  styleUrl: './airline-list.css',
  templateUrl: './airline-list.html',
})

export class AirlineList {
  airlineList: Airline[] = [];

  onAirlineClicked(event: ContentEvent) {
    console.log(event)
  }
}
