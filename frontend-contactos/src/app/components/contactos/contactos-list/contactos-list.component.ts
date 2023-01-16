import { Component, OnInit } from '@angular/core';
import { Contacto } from '../contacto.model';
import { Subscription } from 'rxjs';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-contactos-list',
  templateUrl: './contactos-list.component.html',
  styleUrls: ['./contactos-list.component.scss']
})
export class ContactosListComponent implements OnInit {
  contactos: Contacto[] = [];
  subscription: Subscription;

  constructor(private contactoService: ContactoService) { }

  ngOnInit(): void {
    this.subscription = this.contactoService.contactosChanged.subscribe(
      (contactos: Contacto[]) => {
        this.contactos = contactos;
      }
    );

    this.contactoService.getContactos();
  }

  onDelete(id: number) {
    this.contactoService.deleteContacto(id);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
