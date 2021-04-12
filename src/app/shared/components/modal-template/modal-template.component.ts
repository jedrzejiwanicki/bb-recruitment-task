import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-modal-template',
  templateUrl: './modal-template.component.html',
  styleUrls: ['./modal-template.component.scss']
})
export class ModalTemplateComponent {
  @Output() dismiss: EventEmitter<void> = new EventEmitter<void>();

  close(): void {
    this.dismiss.emit();
  }
}
