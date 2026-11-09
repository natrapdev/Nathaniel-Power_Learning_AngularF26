import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const airlineFleetAverageSizeValidator: ValidatorFn = (
  control: AbstractControl,
): ValidationErrors | null => {
  const fleetSize = control.get('fleetSize');
  const fleetAverageSize = control.get('fleetAverageSize');

  return fleetSize && fleetAverageSize && fleetSize.value < fleetAverageSize.value ?
    { invalidFleetAverageSize: true } : null;
};
