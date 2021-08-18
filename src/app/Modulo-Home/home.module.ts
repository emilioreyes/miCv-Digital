import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { MisComponentesModule } from '../Mis-Componentes/mis-componentes.module';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', children: [
      { path: '', component: HomeComponent }
    ]
  }
]

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes), MisComponentesModule
  ]
})
export class HomeModule { }
