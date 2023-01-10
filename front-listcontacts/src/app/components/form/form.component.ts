import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private _builder: FormBuilder
  ) { 
    this.form = this._builder.group({
      nombre:['', Validators.required], 
      apellido: ['', Validators.required],
      email:['', Validators.compose([Validators.email, Validators.required])],
      telefono: ['', Validators.required]
    })
  }

  enviar(values: any){
    console.log(values)
  }

  ngOnInit(): void {
  }

}
