
import { Component } from '@angular/core';

import { Resultado } from '../../model/Resultado';
import { BuscadorServiceService } from '../../service/buscador-service.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrl: './nuevo.component.css'
})
export class NuevoComponent {

  resultado:Resultado = new Resultado("","","");

  constructor(private buscarService:BuscadorServiceService){

  }

  mensaje:string;
  tipo:string;
  alta():void{
    console.log("LLamando alta en component");
    this.buscarService.crear(this.resultado)
    .subscribe(data=>{
      console.log("DATA "+data);
      if(Boolean(data)){
        this.mensaje="Item grabado correctamente";
        this.tipo = "alert alert-success";

      }
      else{
        this.mensaje = "Item NO grabado";
        this.tipo = "alert alert-danger";
      }
    });
  }

}
