import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-derive',
  templateUrl: './modal-derive.component.html',
  styleUrls: ['./modal-derive.component.css']
})
export class ModalDeriveComponent implements OnInit {

  constructor(
    public modal: NgbActiveModal) { }

  ngOnInit(): void {
  }
  
}
