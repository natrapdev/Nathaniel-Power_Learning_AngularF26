import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const flightDateValidator: ValidatorFn = (
  control: AbstractControl,
): ValidationErrors | null => {
  const departure = control.get('departure.scheduled');
  const arrival = control.get('arrival.scheduled');

  if (!departure || !arrival || !departure.value || !arrival.value) {
    return null;
  }

  const departureTime = new Date(departure.value).getTime();
  const arrivalTime = new Date(arrival.value).getTime();

  return (departureTime > arrivalTime) ? { arrivalBeforeDeparture: true } : null;
};
