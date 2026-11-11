import { Service, signal } from '@angular/core';
import { FlightService } from './flight';
import { Flight } from '../shared/models/flight';

@Service()
export class MockFlightService extends FlightService {
  constructor() {
    super();
    this.flights.set([
      {
        id: 1,
        flight_date: '2026-10-11',
        flight_status: 'scheduled',
        departure: {
          airport: 'John F. Kennedy International',
          iata: 'JFK',
          scheduled: '2026-11-11T08:00:00+00:00',
          terminal: '4',
        },
        arrival: {
          airport: 'Los Angeles International',
          iata: 'LAX',
          scheduled: '2026-11-11T11:15:00+00:00',
          terminal: '2',
        },
        airline: {
          name: 'Delta Air Lines',
          iata: 'DL',
        },
        flight: {
          number: '123',
          iata: 'DL123',
        },
      },
      {
        id: 2,
        flight_date: '2026-11-11',
        flight_status: 'active',
        departure: {
          airport: 'San Francisco International',
          iata: 'SFO',
          scheduled: '2026-11-11T09:30:00+00:00',
          terminal: '1',
        },
        arrival: {
          airport: "Chicago O'Hare International",
          iata: 'ORD',
          scheduled: '2026-11-11T15:45:00+00:00',
          terminal: '3',
        },
        airline: {
          name: 'United Airlines',
          iata: 'UA',
        },
        flight: {
          number: '456',
          iata: 'UA456',
        },
      },
      {
        id: 3,
        flight_date: '2026-11-11',
        flight_status: 'landed',
        departure: {
          airport: 'Miami International',
          iata: 'MIA',
          scheduled: '2026-11-11T06:00:00+00:00',
          terminal: 'J',
        },
        arrival: {
          airport: 'Dallas/Fort Worth International',
          iata: 'DFW',
          scheduled: '2026-11-11T08:10:00+00:00',
          terminal: 'A',
        },
        airline: {
          name: 'American Airlines',
          iata: 'AA',
        },
        flight: {
          number: '789',
          iata: 'AA789',
        },
      },
    ]);
  }
}
