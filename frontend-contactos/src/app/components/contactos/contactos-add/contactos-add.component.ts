import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { ContactoService } from 'src/app/services/contacto.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Contacto } from '../contacto.model';

@Component({
  selector: 'app-contactos-add',
  templateUrl: './contactos-add.component.html',
  styleUrls: ['./contactos-add.component.scss']
})
export class ContactosAddComponent implements OnInit {
  contactoAddForm: FormGroup;
  paramsSubscription: Subscription;

  forbiddenSymbols: String[] = ['/', '*', '@'];
  id: number;
  editMode = false;
  formValid = false;

  constructor(
    private contactoService: ContactoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.paramsSubscription = this.route.params
      .subscribe(
        (param: Params) => {
          this.id = +param['id'];
          this.editMode = param['id'] != null;
          this.initForm();
        }
      );

    this.contactoAddForm.statusChanges.subscribe(
      (status) => {
        console.log(this.contactoAddForm)
        if (status == 'VALID') {
          this.formValid = true;
          return;
        }

        this.formValid = false;
      }
    );
  }

  private initForm() {
    let id = 0;
    let nombre = '';
    let apellido = '';
    let email = '';
    let telefonos = new FormArray([
      new FormControl(null, Validators.required)
    ]); 

    if (this.editMode) {
      const contact = this.contactoService.getContactoById(this.id);

      id = contact.id;
      nombre = contact.nombre;
      apellido = contact.apellido;
      email = contact.email;
      
      if (contact['telefonos']) {
        telefonos = new FormArray([]);

        for (let tel of contact.telefonos) {
          telefonos.push(new FormControl (tel, Validators.required));
        }
      }
    }

    this.contactoAddForm = new FormGroup({
      'id': new FormControl(id),
      'nombre': new FormControl(nombre, [Validators.required, this.forbiddenCharacters.bind(this)]),
      'apellido': new FormControl(apellido, this.forbiddenCharacters.bind(this)),
      'email': new FormControl(email, [Validators.required, Validators.email]),
      'telefonos': telefonos
    });
  }

  onAddPhone() {
    const control = new FormControl(null, Validators.required);
    (this.contactoAddForm.get('telefonos') as FormArray).push(control);
  }

  get phoneControls() {
    return (this.contactoAddForm.get('telefonos') as FormArray).controls;
  }

  onClearAllPhones() {
    (this.contactoAddForm.get('telefonos') as FormArray).clear();
  }

  onClearForm() {
    this.initForm();
  }

  onDeletePhone(idx: number) {
    (this.contactoAddForm.get('telefonos') as FormArray).removeAt(idx);
  }

  forbiddenCharacters(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenSymbols.indexOf(control.value) !== -1) {
      return {'forbiddenChar': true}
    }

    return {'forbiddenChar': false};
  }


  onSubmit() {
    const value = this.contactoAddForm.value;

    const contact = new Contacto(
      +value['id'],
      value['nombre'],
      value['apellido'],
      value['email'],
      value['telefonos']      
    );

    if (this.editMode) {
      this.contactoService.updateContacto(contact);
    } else {
      this.contactoService.addContacto(contact);
    }

    let nextRoute = !this.editMode ? '../' : '../../';

    this.router.navigate([nextRoute], { relativeTo: this.route });
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }
}
