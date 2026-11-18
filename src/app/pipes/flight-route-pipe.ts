import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flightRoute',
})
export class FlightRoutePipe implements PipeTransform {
  transform(
    departureIata: string | null | undefined,
    arrivalIata: string | null | undefined,
  ): string {
    if (!departureIata || !arrivalIata) return 'Route Unavailable';
    return `${departureIata.toUpperCase()} ➔ ${arrivalIata.toUpperCase()}`;
  }
}
