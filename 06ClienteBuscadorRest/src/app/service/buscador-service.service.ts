import { Injectable } from '@angular/core';
import { Resultado } from '../model/Resultado';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuscadorServiceService {

  constructor(private http:HttpClient){

  }

  buscar(tematica:string):Observable<Resultado[]>{
    //Conexion a servicio remoto
    let url:string = "http://localhost:9000/buscar/"+tematica;
    return this.http.get<Resultado[]>(url);
  }

}
