import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario/usuario.component';
import { MapaComponent } from './mapa/mapa.component';
import { TabsInformacionComponent } from './tabs-informacion/tabs-informacion.component';
import { ItemListComponent } from './item-list/item-list.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientJsonpModule } from '@angular/common/http';

@NgModule({
  declarations: [UsuarioComponent, MapaComponent, TabsInformacionComponent, ItemListComponent, FormularioComponent],
  imports: [
    CommonModule, RouterModule, FormsModule, ReactiveFormsModule, GoogleMapsModule, HttpClientJsonpModule
  ], exports: [
    UsuarioComponent, MapaComponent, TabsInformacionComponent, ItemListComponent, HttpClientModule, FormularioComponent
  ]
})
export class MisComponentesModule { }
