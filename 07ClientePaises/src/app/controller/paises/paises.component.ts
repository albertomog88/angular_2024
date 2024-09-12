import { Pais } from '../../model/Pais';
import { PaisService } from './../../service/pais.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrl: './paises.component.css'
})
export class PaisesComponent {
continentes:string[];
paises:Pais[];
continentesSel:string;

constructor(private paisesService:PaisService){
  this.cargarContinentes();
}

cargarContinentes():void{
  this.paisesService.continentes()
  .subscribe(data=>this.continentes=data);
}

cargarPaises():void{
  this.paisesService.paisesPorContinentes(this.continentesSel)
  .subscribe(data=>this.paises=data);
}

}
