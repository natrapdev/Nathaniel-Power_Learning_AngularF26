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
  airlineList: Airline[] = [
    {
      id: 1,
      name: 'Air Canada',
      type: 'scheduled',
      iataCode: 'AC',
      callsign: 'AIR CANADA',
      fleetSize: 210,
      dateFounded: 1937,
      countryName: 'Canada',
      countryIso2: 'CA',
    },
    {
      id: 2,
      name: 'Delta Airlines',
      type: 'scheduled',
      iataCode: 'DL',
      callsign: 'DELTA',
      fleetSize: '1004',
      countryName: 'United States',
      countryIso2: 'US',
    },
    {
      id: 3,
      name: 'Cathay Pacific',
      type: 'scheduled',
      iataCode: 'CX',
      callsign: 'CATHAY',
      countryName: 'Hong Kong',
      countryIso2: 'HK',
    },
    {
      id: 4,
      name: 'Cebu Pacific',
      type: 'scheduled',
      iataCode: '5J',
      callsign: 'CEBU AIR',
      dateFounded: 1988,
      countryName: 'Philippines',
      countryIso2: 'PH',
    },
    {
      id: 6,
      name: 'WestJet',
      type: 'scheduled',
      iataCode: 'WS',
      callsign: 'WESTJET',
      countryName: 'Canada',
      countryIso2: 'CA',
    },
  ];

  onAirlineClicked(event: ContentEvent) {
    console.log(event)
  }
}
