import { InjectionToken } from '@angular/core';

export interface AirlineConfig {
  apiBaseUrl: string;
  defaultType: string;
}

export const AIRLINE_CONFIG = new InjectionToken<AirlineConfig>('airline.config')
