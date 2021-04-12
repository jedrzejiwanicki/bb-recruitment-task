import {AbstractControl, ValidatorFn} from '@angular/forms';

export function validatePositiveNumber(message: string): ValidatorFn {
  return (control: AbstractControl) => {
    if (!!control.value && !isNaN(control.value) && control.value < 0) {
      return { positiveNumber: message };
    }

    return null;
  };
}
