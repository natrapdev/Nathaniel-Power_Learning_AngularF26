import { InjectionToken } from '@angular/core';

export interface FlightConfig {
  apiBaseUrl: string;
  defaultStatus: string;
}

export const FLIGHT_CONFIG = new InjectionToken<FlightConfig>('flight.config')
