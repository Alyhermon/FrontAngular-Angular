import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {


  constructor(public modal: NgbModal) { }

  ngOnInit(): void {
  }

  form= new FormGroup({
    nombre: new FormControl('', Validators.compose([Validators.required, Validators.minLength(1)])),
    apellido: new FormControl('',Validators.compose([Validators.required, Validators.minLength(1)])),
    email: new FormControl('',Validators.compose([Validators.email, Validators.required])),
    telefono: new FormControl('', Validators.compose([Validators.required, Validators.minLength(1)])),
  });

  saveContacts(values: any){
    console.log(values)

  }

}
