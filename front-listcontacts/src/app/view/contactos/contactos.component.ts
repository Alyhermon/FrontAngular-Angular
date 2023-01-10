import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ContactosService } from 'src/app/services/contactos.service';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.scss']
})
export class ContactosComponent implements OnInit {


  modalSwitch:boolean;

  public contactoArray: Array<any>=[]

  //Constructor
  constructor(
    private ContactosService: ContactosService
  ) {
    this.ContactosService.getPersonas().subscribe((resp: any) => {
      this.contactoArray = resp
    })
   }

  ngOnInit(): void {
  }


  //Funcion Para abrir Modal
  openModal(){
    this.modalSwitch = true;
  }
  

}
