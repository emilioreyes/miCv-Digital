import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { Routes, RouterModule } from '@angular/router';
import { MisComponentesModule } from '../Mis-Componentes/mis-componentes.module';

const routes: Routes = [
  {
    path: '', children: [
      { path: '', component: BienvenidaComponent }
    ]
  }
]

@NgModule({
  declarations: [BienvenidaComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes), MisComponentesModule
  ]
})
export class BienvenidaModule { }
