import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flightStatus',
})
export class FlightStatusPipe implements PipeTransform {
  transform(status: string | null | undefined, format: 'short' | 'long' = 'short'): string {
    if (!status) return 'Unknown';
    if (format === 'long') {
      switch (status.toLowerCase()) {
        case 'active':
          return 'In Flight';
        case 'scheduled':
          return 'Scheduled';
        case 'landed':
          return 'Landed';
        default:
          return status;
      }
    }
    return status.toUpperCase();
  }
}
