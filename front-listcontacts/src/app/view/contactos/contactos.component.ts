import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.scss']
})
export class ContactosComponent implements OnInit {

  modalSwitch:boolean;

  constructor() { }

  ngOnInit(): void {
  }


  //Funcion Para abrir Modal
  openModal(){
    this.modalSwitch = true;
  }

}
