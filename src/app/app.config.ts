import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { AIRLINE_CONFIG } from './config/airline.config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    { provide: AIRLINE_CONFIG,
      useValue: {
        apiBaseUrl: 'https://api.placeholder.example.com/api',
        defaultType: 'scheduled'
    } }
  ]
};
