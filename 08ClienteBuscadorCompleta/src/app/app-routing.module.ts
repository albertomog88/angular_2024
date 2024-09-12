import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorComponent } from './controller/buscador/buscador.component';
import { NuevoComponent } from './controller/nuevo/nuevo.component';
import { BuscarURLComponent } from './controller/buscar-url/buscar-url.component';

const routes: Routes = [
  {
    path:"buscar",
    component:BuscadorComponent
  },
  {
    path:"nuevo",
    component:NuevoComponent
  },
  {
    path:"buscarURL",
    component:BuscarURLComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
