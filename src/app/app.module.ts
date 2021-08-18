import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ExploreCityComponent } from './explore-city/explore-city.component';
import { NotificationComponent } from './notification/notification.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { MisComponentesModule } from './Mis-Componentes/mis-componentes.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExploreCityComponent,
    NotificationComponent,
    FavoritosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, MisComponentesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
