import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-observar',
  templateUrl: './modal-observar.component.html',
  styleUrls: ['./modal-observar.component.css']
})
export class ModalObservarComponent implements OnInit {

  observaciones: string = "";

  constructor(
    public modal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  observar() {
    console.log("Observaciones: " + this.observaciones);
    this.modal.close({
      observaciones: this.observaciones
    });
  }
}
