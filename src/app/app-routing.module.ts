import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExploreCityComponent } from './explore-city/explore-city.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { NotificationComponent } from './notification/notification.component';


const routes: Routes = [
  // { path: '', loadChildren: () => import('../app/Modulo-Home/home.module').then(m => m.HomeModule) },
  { path: 'bienvenida', loadChildren: () => import('../app/Modulo-Bienvenida/bienvenida.module').then(m => m.BienvenidaModule) },
  { path: 'destacados', loadChildren: () => import('../app/Modulo-Destacados/destacados.module').then(m => m.DestacadosModule) },
  { path: 'servicios', loadChildren: () => import('../app/Modulo-Servicios/servicios.module').then(m => m.ServiciosModule) },
  { path: 'contactos', loadChildren: () => import('../app/Modulo-Contacto/contactos.module').then(m => m.ContactosModule) },
  { path: '', pathMatch: 'full', redirectTo: 'bienvenida' },
  { path: '**', redirectTo: 'bienvenida' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
