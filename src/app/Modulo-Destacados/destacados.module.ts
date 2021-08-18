import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestacadosComponent } from './destacados/destacados.component';
import { Routes, RouterModule } from '@angular/router';
import { MisComponentesModule } from '../Mis-Componentes/mis-componentes.module';


const routes: Routes = [
  {
    path: '', children: [
      { path: '', component: DestacadosComponent }
    ]
  }
]

@NgModule({
  declarations: [DestacadosComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes), MisComponentesModule
  ]
})
export class DestacadosModule { }
