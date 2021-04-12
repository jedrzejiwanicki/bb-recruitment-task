import {Component, Input} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.scss']
})
export class FormErrorComponent {
  @Input() control: FormControl;

  public getErrorMessages(): string[] {
    return Object.values(this.control.errors || {});
  }
}
