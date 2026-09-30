import { Component } from '@angular/core';
import { Airline } from '../shared/models/airline';

@Component({
  imports: [],
  selector: 'app-airline-list',
  styleUrl: './airline-list.css',
  templateUrl: './airline-list.html',
})
export class AirlineList {
  airlineList: Airline[] = [
    {
      id: 1,
      name: 'Air Canada',
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
      iataCode: 'DL',
      callsign: 'DELTA',
      fleetSize: '1004',
      countryName: 'United States',
      countryIso2: 'US',
    },
    {
      id: 3,
      name: 'Cathay Pacific',
      iataCode: 'CX',
      callsign: 'CATHAY',
      countryName: 'Hong Kong',
      countryIso2: 'HK',
    },
    {
      id: 4,
      name: 'Cebu Pacific',
      iataCode: '5J',
      callsign: 'CEBU AIR',
      dateFounded: 1988,
      countryName: 'Philippines',
      countryIso2: 'PH',
    },
    {
      id: 6,
      name: 'WestJet',
      iataCode: 'WS',
      callsign: 'WESTJET',
      countryName: 'Canada',
      countryIso2: 'CA',
    },
  ];
}
