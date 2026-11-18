import { Service, signal, computed, effect, inject } from '@angular/core';
import { Flight } from '../shared/models/flight';
import { FLIGHT_CONFIG } from '../config/flight.config';

@Service()
export class FlightService {
  private config = inject(FLIGHT_CONFIG);
  protected flights = signal<Flight[]>([]);

  flightList = this.flights.asReadonly();
  flightCount = computed(() => this.flightList().length);

  filterType = this.config.defaultStatus;
  filteredFlightList = computed(() =>
    this.flightList().filter((a) => a.flight_status === this.filterType),
  );
  filteredFlightCount = computed(() => this.filteredFlightList().length);

  constructor() {
    effect(() => {
      console.log('Flight count is now', this.flightCount());
    });
  }

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
