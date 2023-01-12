import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  url: any = "http://localhost:3000/posts";
  
  constructor(
    private http: HttpClient
  ) {}

   //Post

   postPersonas(data: any){
    return this.http.post<any>(this.url, data)
    .pipe(map((res:any)=> {
      return res;
    }))
   }


   //Get

   getPersonas(){
    return this.http.get<any>(this.url)
    .pipe(map((res:any)=>{
      return res;
    }))
   }


   //Update

   updatePersonas(data: any, id:number){
    return this.http.put<any>(this.url+"/"+id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
   }


   //Delete

   deletePersonas(id:number){
    return this.http.delete<any>(this.url+"/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))

   }
}
