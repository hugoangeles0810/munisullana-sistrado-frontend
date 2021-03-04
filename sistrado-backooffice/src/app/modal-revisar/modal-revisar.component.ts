import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-revisar',
  templateUrl: './modal-revisar.component.html',
  styleUrls: ['./modal-revisar.component.css']
})
export class ModalRevisarComponent implements OnInit {

  constructor(
    public modal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
