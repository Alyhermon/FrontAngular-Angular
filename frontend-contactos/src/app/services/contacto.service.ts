import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Contacto } from '../components/contactos/contacto.model';
import data from '../../assets/json/data.json';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  contactosChanged = new Subject<Contacto[]>();
  lastId: number = 0;

  private contactos: Contacto[] = [];
  private dbName: string = 'contactos-data';

  constructor() {
    this.loadInitialData();
  }

  loadInitialData() {
    if (localStorage.getItem(this.dbName) !== null) { return; }

    localStorage.setItem(this.dbName, JSON.stringify(data));
  }

  getContactos(): void {
    const jsonObj = JSON.parse(localStorage.getItem(this.dbName) ?? '');

    this.contactos = jsonObj as Contacto[];
    this.lastId = this.contactos[this.contactos.length - 1].id;
    this.contactosChanged.next(this.contactos.slice());
  }

  getContactoById(id: number): Contacto{
    const contact = this.contactos.find(c => c.id == id);

    if (contact === null) { return null; }

    return contact;
  }

  addContacto (contacto: Contacto) {
    contacto.id = this.lastId + 1;

    this.contactos.push(contacto);
    this.contactosChanged.next(this.contactos);

    localStorage.setItem(this.dbName, JSON.stringify(this.contactos));
  }

  updateContacto (contacto: Contacto) {
    let contactoFound = this.contactos.find(c => c.id === contacto.id);
    
    let index = this.contactos.indexOf(contactoFound);
    this.contactos[index] = contacto;

    this.contactosChanged.next(this.contactos);
    localStorage.setItem(this.dbName, JSON.stringify(this.contactos));
  }

  deleteContacto (id: number) {
    let contactoFound = this.contactos.find(c => c.id === id);
    let index = this.contactos.indexOf(contactoFound);
    this.contactos.splice(index, 1);

    this.contactosChanged.next(this.contactos.slice());
    localStorage.setItem(this.dbName, JSON.stringify(this.contactos));
  }
}
