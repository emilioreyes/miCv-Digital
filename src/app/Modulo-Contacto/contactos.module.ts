import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactosComponent } from './contactos/contactos.component';
import { Router, Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', children: [
      { path: '', component: ContactosComponent }
    ]
  }
]

@NgModule({
  declarations: [ContactosComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class ContactosModule { }
