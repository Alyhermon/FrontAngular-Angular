import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactoService } from './services/contacto.service';
import { app } from './ap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = "Lista de Contactos"
  public personas: Array<any> = [];

  showadd!: boolean;
  showupdate!: boolean;

  //Data

  ContactosData: app = new app();

  //Formulario

  formValue!: FormGroup;

  allPersonasData: any;

  constructor(
    private formBuilder: FormBuilder,
    private contactosService: ContactoService
  ) {
    this.contactosService.getPersonas().subscribe((resp: any) => {
      this.personas = resp;
    });
  }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', Validators.required],
      telefono: ['', Validators.required],
    });
    this.getData();
  }

  //Metodos de los Modales para mostrar uno y otro
  add() {
    this.showadd = true;
  }

  update() {
    this.ContactosData.nombre = this.formValue.value.nombre;
    this.ContactosData.apellido = this.formValue.value.apellido;
    this.ContactosData.email = this.formValue.value.email;
    this.ContactosData.telefono = this.formValue.value.telefono;

    this.contactosService
      .updatePersonas(this.ContactosData, this.ContactosData.id)
      .subscribe(
        (res: any) => {
          this.formValue.reset();
          this.getData();
        },
        (error) => {
          alert('No editado');
        }
      );
  }

  edit(data: any) {
    this.showadd = false;
    this.showupdate = true;
    this.ContactosData.id = data.id;

    this.formValue.controls['nombre'].setValue(data.nombre);
    this.formValue.controls['apellido'].setValue(data.apellido);
    this.formValue.controls['email'].setValue(data.email);
    this.formValue.controls['telefono'].setValue(data.telefono);
  }

  addPersonas() {
    this.ContactosData.nombre = this.formValue.value.nombre;
    this.ContactosData.apellido = this.formValue.value.apellido;
    this.ContactosData.email = this.formValue.value.email;
    this.ContactosData.telefono = this.formValue.value.telefono;

    this.contactosService.postPersonas(this.ContactosData).subscribe(
      (res: any) => {
        console.log(res);
        this.formValue.reset();
        this.getData();
      },
      (error: any) => {
        alert('Something went wrong!!!');
      }
    );
  }

  getData() {
    this.contactosService.getPersonas().subscribe((res) => {
      this.personas = res;
    });
  }

  deletepers(data: any) {
    if (confirm('Are you sure to delete this contact?'))
      this.contactosService.deletePersonas(data.id).subscribe((res: any) => {
        this.getData();
      });
  }
}
