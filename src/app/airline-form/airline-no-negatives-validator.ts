import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const airlineNoNegativesValidator: ValidatorFn = (
  control: AbstractControl,
): ValidationErrors | null => {
  const fleetSize = control.get('fleet_size');
  const dateFounded = control.get('date_founded');

  return fleetSize && dateFounded && (fleetSize.value < 0 || dateFounded.value < 0) ?
    { hasNegativeNumber: true } : null;
};
