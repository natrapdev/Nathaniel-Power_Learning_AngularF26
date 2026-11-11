import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { FLIGHT_CONFIG } from './config/flight.config';
import { MockFlightService } from './services/mock-flight';
import { FlightService } from './services/flight';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),
    {
      provide: FLIGHT_CONFIG,
      useValue: {
        apiBaseUrl: 'https://airlines-api.omkar.cloud',
        defaultStatus: 'active',
      },
    },
    { provide: FlightService, useClass: MockFlightService },
    /*
     * One can change back to using the real FlightService by simply removing the line above.
     * We could also change the useClass value to FlightService to use the real service as well.
     */
  ],
};
