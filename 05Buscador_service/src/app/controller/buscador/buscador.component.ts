import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { Resultado } from '../../model/Resultado';
import { BuscadorServiceService } from '../../service/buscador-service.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {

    constructor(private BuscadorServiceService:BuscadorServiceService){

    }


    tematica:string;
    //guardaremos los resultados de la búsqueda
    resultados:Resultado[]=[];
    buscar():void{
     this.resultados=this.BuscadorServiceService.buscar(this.tematica);
    }

}
