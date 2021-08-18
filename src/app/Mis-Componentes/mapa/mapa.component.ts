import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { MapInfoWindow } from '@angular/google-maps';
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow;
  apiLoaded: Observable<boolean>;
  center: google.maps.LatLngLiteral = { lat: -2.222739, lng: -80.857348 };
  marker: google.maps.Marker;
  constructor(private httpClient: HttpClient) {

    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=' + environment.map_api, 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      );

  }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    this.apiLoaded.subscribe(res => {
      res ? this.initMap() : null;
    })

  }
  initMap(): void {
    const map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        zoom: 13,
        center: this.center,
      }
    );

    const contentString =
      '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading" style="text-align: center;color:#FF0077">Toli-Store</h1>' +
      '<div id="bodyContent">' +
      "<p><b>Toli-Store</b>, es una <b>tienda en linea</b>, que distribuye " +
      "prendas de vestir con telas de alta calidad. " +
      "<strong>Esta es nuestra direccion Fisica </strong> <i class='far fa-smile-beam'></i><i class='far fa-hand-peace'></i></p>" +
      '<p>Actualizacion, ' +
      "(Julio 13, 2021).</p>" +
      "<p style='color: #198754'><i class='fab fa-whatsapp'></i> +593 <strong>983499959</strong></p>" +
      "<p style='color: #500033'><i class='far fa-eye'></i> Prendas de Vestir</p>" +
      "</div>" +
      "</div>";

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });

    this.marker = new google.maps.Marker({
      position: this.center,
      map,
      title: "Ubicación",
    });

    /*this.marker.addListener("click", () => {
      infowindow.open(map, this.marker);
    });
    infowindow.open(map, this.marker);*/
  }
}
