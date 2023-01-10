import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  _url = 'hhttp://localhost:3000'

  constructor(
    private http: HttpClient
  ) { 
    console.log("Servicio");  
  }

  getPersonas(){
    let header = new HttpHeaders()
    .set('Type-content', 'aplication/json')

    return this.http.get(this._url, {
      headers: header
    })
   }
}
