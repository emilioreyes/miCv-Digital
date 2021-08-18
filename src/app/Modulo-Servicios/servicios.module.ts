import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiciosComponent } from './servicios/servicios.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', children: [
      { path: '', component: ServiciosComponent }
    ]
  }
]

@NgModule({
  declarations: [ServiciosComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class ServiciosModule { }
