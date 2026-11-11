import { Service, signal } from '@angular/core';
import { AirlineService } from './airline';
import { Airline } from '../shared/models/airline';

@Service()
export class MockAirlineService extends AirlineService {
  constructor() {
    super();
    this.airlines.set([
      {
        id: 1,
        airline_name: 'Air Canada',
        type: 'scheduled',
        iata_code: 'AC',
        callsign: 'AIR CANADA',
        fleet_size: 210,
        date_founded: 1937,
        country_name: 'Canada',
        country_iso2: 'CA',
      },
      {
        id: 2,
        airline_name: 'Cargolux Airlines International S.A.',
        type: 'cargo',
        iata_code: 'CV',
        callsign: 'CARGOLUX',
        country_name: 'Luxembourg',
        country_iso2: 'LU',
      },
      {
        id: 3,
        airline_name: 'Cathay Pacific',
        type: 'scheduled',
        iata_code: 'CX',
        callsign: 'CATHAY',
        country_name: 'Hong Kong',
        country_iso2: 'HK',
      },
      {
        id: 4,
        airline_name: 'Cebu Pacific',
        type: 'scheduled',
        iata_code: '5J',
        callsign: 'CEBU AIR',
        date_founded: 1988,
        country_name: 'Philippines',
        country_iso2: 'PH',
      },
      {
        id: 6,
        airline_name: 'WestJet',
        type: 'scheduled',
        iata_code: 'WS',
        callsign: 'WESTJET',
        country_name: 'Canada',
        country_iso2: 'CA',
      },
      {
        id: 7,
        airline_name: 'UPS Airlines',
        type: 'cargo',
        iata_code: '5X',
        callsign: 'UPS',
        fleet_size: 30,
        date_founded: 1970,
        country_name: 'United States',
        country_iso2: 'US',
      },
      {
        id: 8,
        airline_name: 'Delta Airlines',
        type: 'scheduled',
        iata_code: 'DL',
        callsign: 'DELTA',
        fleet_size: '1004',
        country_name: 'United States',
        country_iso2: 'US',
      },
    ]);
  }
}
