import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../model/Pais';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http:HttpClient) {

   }

   continentes(){
    let url:string = "http://localhost:9000/continentes";
    return this.http.get<Pais[]>(url);
   }

   paisesPorContinentes(continente:string):Observable<Pais[]>{
    let url:string = "http://localhost:9000/paises/"+continente;
    return this.http.get<Pais[]>(url);
   }
}
