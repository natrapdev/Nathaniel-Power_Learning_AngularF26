import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { FLIGHT_CONFIG } from './config/flight.config';
import { MockFlightService } from './services/mock-flight';
import { FlightService } from './services/flight';
import { FlightApiService } from './services/flight-api';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { loadingInterceptor } from './services/loading/loading-interceptor';
import { errorInterceptor } from './services/error-service/error-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),
    {
      provide: FLIGHT_CONFIG,
      useValue: {
        apiBaseUrl: 'https://api.aviationstack.com/v1/flights?',
        defaultStatus: 'active',
      },
    },
    { provide: FlightService, useClass: MockFlightService },
    /*
     * One can change back to using the real FlightService by simply removing the line above.
     * We could also change the useClass value to FlightService to use the real service as well.
     */

    provideHttpClient(withInterceptors([loadingInterceptor, errorInterceptor]))
  ],
};
