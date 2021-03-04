import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-aprobar',
  templateUrl: './modal-aprobar.component.html',
  styleUrls: ['./modal-aprobar.component.css']
})
export class ModalAprobarComponent implements OnInit {

  constructor(
    public modal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
