import {FormControl, ValidatorFn, Validators} from '@angular/forms';

export function validateRequired(message: string): ValidatorFn {
  return (control: FormControl) => {
    return Validators.required(control) ? {required: message} : null;
  };
}
