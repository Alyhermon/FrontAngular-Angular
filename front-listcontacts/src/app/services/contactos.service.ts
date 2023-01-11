import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  _url = 'http://localhost:3000/posts'

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
