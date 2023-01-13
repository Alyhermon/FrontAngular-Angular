import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ContactoService } from 'src/app/services/contacto.service';
import { app } from 'src/app/ap.model';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit {
  @Input() personaContactos:app

  constructor() { }

  ngOnInit(): void {
  }


}
