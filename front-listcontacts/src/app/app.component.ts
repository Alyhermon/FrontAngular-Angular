import { Component } from '@angular/core';
import { CrudService } from './services/crud.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front-listcontacts';
  public lista:any =[];
  constructor(private CrudService:CrudService){

  }

  ngOnInit():void{
    this.cargarData();

  }

  public cargarData(){
    this.CrudService.get('https://jsonplaceholder.typicode.com/users')
    .subscribe(respuesta => {
      this.lista = respuesta;
    })
  }
}
