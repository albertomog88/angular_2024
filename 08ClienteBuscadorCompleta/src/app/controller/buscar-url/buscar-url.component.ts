import { Component } from '@angular/core';
import { BuscadorServiceService } from '../../service/buscador-service.service';
import { Resultado } from '../../model/Resultado';


@Component({
  selector: 'app-buscar-url',
  templateUrl: './buscar-url.component.html',
  styleUrl: './buscar-url.component.css'
})
export class BuscarURLComponent {

  constructor(private BuscadorServiceService:BuscadorServiceService){

  }

  urlB:string;
  resultado:Resultado;
  buscarPorURL():void{
    this.BuscadorServiceService.buscarURL(this.urlB)
    .subscribe(data=>this.resultado=data);
  }

}
