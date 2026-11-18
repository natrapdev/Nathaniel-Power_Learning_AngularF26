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

  load() {
    this.error.set(null);

    this.http.get<{ data: Flight[] }>(`${this.config.apiBaseUrl}`, {
        params: {
          access_key: 'ae1f4a4b5b79aea451d8909453453734',
          limit: '30',
        },
      }).pipe(
        map(response => response.data ?? []))
      .subscribe({
        next: (list) => {
          const processedList = list.map((flight, index) => ({
            ...flight,
              id: crypto.randomUUID()
          }));
          this.flights.set(processedList);
        },
        error: () => {
          this.error.set('Could not load flight data from AviationStack.');
        },
      });
  }

  filterType = this.config.defaultStatus;
  filteredFlightList = computed(() =>
    this.flightList().filter((a) => a.flight_status === this.filterType),
  );
  filteredFlightCount = computed(() => this.filteredFlightList().length);

  addFlight(newFlight: Flight) {
    this.flights.update((list) => [...list, newFlight]);

    console.log(this.flightList());
  }

  removeFlight(id: string | number) {
    this.flights.update((list) => list.filter((f) => f.id !== id));
  }

  updateFlight(updated: Flight) {
    this.flights.update((list) => list.map((f) => (f.id == updated.id ? { ...f, ...updated } : f)));
  }
}
