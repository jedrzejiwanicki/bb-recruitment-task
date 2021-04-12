import {FormControl, ValidatorFn} from '@angular/forms';

export function validateAdjecentControlValueLessThan(message: string, adjecent: FormControl, lessThanVal: number): ValidatorFn {
  return (control: FormControl) => {

    if (
      control.value
      && !isNaN(control.value)
      && adjecent.value && !isNaN(adjecent.value)
      && adjecent.value - control.value < lessThanVal
    ) {
      return {adjecentControlValueLessThan: message};
    }

    return null;
  };
}
