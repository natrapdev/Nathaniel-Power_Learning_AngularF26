import { computed, inject, Service, signal } from '@angular/core';
import { Flight } from '../shared/models/flight';
import { HttpClient } from '@angular/common/http';
import { FLIGHT_CONFIG } from '../config/flight.config';
import { map } from 'rxjs';


@Service()
export class FlightApiService {
  private http = inject(HttpClient);
  private config = inject(FLIGHT_CONFIG);

  private flights = signal<Flight[]>([]);
  flightList = this.flights.asReadonly();
  error = signal<string | null>(null);

  constructor() {
    this.load();
  }

  load() {}

  filterType = this.config.defaultStatus;
  filteredFlightList = computed(() =>
    this.flightList().filter((a) => a.flight_status === this.filterType),
  );
  filteredFlightCount = computed(() => this.filteredFlightList().length);

  addFlight(newFlight: Flight) {
    this.flights.update((list) => [...list, newFlight]);

    console.log(this.flightList());
  }

  removeFlight(id: string | Number) {
    this.flights.update((list) => list.filter((a) => a.id !== id));
  }

  updateFlight(updated: Flight) {
    this.flights.update((list) => list.map((a) => (a.id == updated.id ? { ...a, ...updated } : a)));
  }
}
