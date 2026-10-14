import { Service, signal, computed, effect, inject } from '@angular/core';
import { Airline } from '../shared/models/airline';
import { AIRLINE_CONFIG } from '../config/airline.config';

@Service()
export class AirlineService {
  private config = inject(AIRLINE_CONFIG);
  private airlines = signal<Airline[]>([]);

  airlineList = this.airlines.asReadonly();
  airlineCount = computed(() => this.airlineList().length);

  filterType = this.config.defaultType;
  filteredAirlineList = computed(() =>
    this.airlineList().filter((a) => a.type === this.filterType)
  );
  filteredAirlineCount = computed(() => this.filteredAirlineList().length);

  constructor() {
    effect(() => {
      console.log('Airline count is now', this.airlineCount());
    });
  }

  addAirline(newAirline: Airline) {
    this.airlines.update((list) => [...list, newAirline]);
  }
  removeAirline(id: string | Number) {
    this.airlines.update(list =>
      list.filter(a =>
        a.id !== id
      ));
  }
}
