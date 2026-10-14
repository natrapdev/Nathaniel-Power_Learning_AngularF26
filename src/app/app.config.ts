import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { AIRLINE_CONFIG } from './config/airline.config';
import { MockAirlineService } from './services/mock-airline';
import { AirlineService } from './services/airline';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    { provide: AIRLINE_CONFIG,
      useValue: {
        apiBaseUrl: 'https://api.placeholder.example.com/api',
        defaultType: 'scheduled'
    } },
    { provide: AirlineService, useClass: MockAirlineService }
    /*
    * One can change back to using the real AirlineService by simply removing the line above.
    * We could also change the useClass value to AirlineService to use the real service as well.
    */
  ]
};
