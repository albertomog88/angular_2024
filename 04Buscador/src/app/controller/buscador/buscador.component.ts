import { Component } from '@angular/core';
import { Resultado } from '../../model/Resultado';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {
  resultados:Resultado[]=[
    { tematica: "Ciencia", url: "https://ejemplo.com/ciencia", descripcion: "Información sobre avances científicos" },
    { tematica: "Tecnología", url: "https://ejemplo.com/tecnologia", descripcion: "Últimas tendencias tecnológicas" },
    { tematica: "Matemáticas", url: "https://ejemplo.com/matematicas", descripcion: "Recursos de aprendizaje de matemáticas" }
  ];
  tematica:string;
  listaValores:Resultado[];

  buscar():void{
    this.listaValores = this.resultados.filter(r => r.tematica === this.tematica);
  }

}
