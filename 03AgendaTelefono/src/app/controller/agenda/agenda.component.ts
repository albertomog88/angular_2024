import { Component } from '@angular/core';
import {Contacto} from '../../model/Contacto';


@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent {
  agenda:Contacto[]=[];

  nombre: string;
  edad: number;
  telefono: string;

  guardar():void{
    this.agenda.push(new Contacto(this.nombre, this.edad, this.telefono));

  }

  // Método para eliminar un contacto
  eliminarContacto(index: number) {
    this.agenda.splice(index, 1);
  }
}
