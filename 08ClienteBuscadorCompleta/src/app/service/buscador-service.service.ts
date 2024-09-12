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

  crear(r:Resultado):Observable<String>{
    console.log("LLamando alta en service")
    let url:string = "http://localhost:9000/alta";
    return this.http.post<String>(url, r);
  }

  buscarURL(urlB:string):Observable<Resultado>{
    //Conexion a servicio remoto
    let url:string = "http://localhost:9000/buscarURL/"+urlB;
    return this.http.get<Resultado>(url);
  }

}
