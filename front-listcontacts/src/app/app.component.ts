import { Component } from '@angular/core';
import { ContactosService } from 'src/app/services/contactos.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front-listcontacts';


  //Constructor
  constructor() {  }

  ngOnInit(): void {
  }



}
