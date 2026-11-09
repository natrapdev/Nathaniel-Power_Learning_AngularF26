import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function airlineNoWhitespaceValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    const whitespace = (value && typeof value == 'string' && value.trim().length === 0);
    return whitespace ? { whitespace: true } : null;
  };
}
