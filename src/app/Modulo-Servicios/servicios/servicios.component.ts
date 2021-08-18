import { Component, HostListener, OnInit, SimpleChanges } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Servicios, GeneralesService } from '../../generales.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {
  lstServicios: Servicios[] = [];
  deviceInfo = null;
  isMobile; isTablet; isDesktopDevice;
  mediaQuery;
  whatsapp;
  constructor(private serviciosGenerales: GeneralesService, private deviceService: DeviceDetectorService) {
    this.epicFunction();
  }

  ngOnInit(): void {
    this.serviciosGenerales.getServicios().subscribe(res => {
      this.lstServicios = res;
    });
    this.whatsapp = environment.wsp;

  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    console.log('323223232', event.target.innerWidth);
    // this.setearColumnasInMasonry(event.target.innerWidth);
  }

  ngAfterViewInit(): void {

    this.isDesktopDevice ? this.setAnimation() : null;
    /* let container: HTMLDivElement = document.querySelector('.lst-cards');
     console.log(container.offsetWidth);
 
     let columnas;
     if (this.isDesktopDevice) {
       if (container.offsetWidth > 500) {
         columnas = 3;
       } else if (container.offsetWidth <= 500 && container.offsetWidth > 400) {
         columnas = 2;
       } else {
         columnas = 1;
       }
     } else if (this.isTablet) {
       if (container.offsetWidth > 500) {
         columnas = 3
       } else if (container.offsetWidth <= 500 && container.offsetWidth > 400) {
         columnas = 2;
       } else {
         columnas = 1;
       }
     } else if (this.isMobile) {
       columnas = 1;
     }
     this.mansonryLayout(container, document.querySelectorAll(".card"), columnas);*/
  }

  setearColumnasInMasonry(width) {
    let container: HTMLDivElement = document.querySelector('.lst-cards');
    console.log(width, container.offsetWidth);
    let columnas;
    if (width >= 500) {
      columnas = 3
    } else if (width > 400 && width < 500) {
      columnas = 2
    } else if (width < 400) {
      columnas = 2
    }
    //  this.mansonryLayout(container, document.querySelectorAll(".card"), columnas);
    container.classList.toggle(`columns-${columnas}`);
  }

  epicFunction() {
    console.log('hello `Home` component');
    this.deviceInfo = this.deviceService.getDeviceInfo();
    this.isMobile = this.deviceService.isMobile();
    this.isTablet = this.deviceService.isTablet();
    this.isDesktopDevice = this.deviceService.isDesktop();
    console.log(this.deviceService.getDeviceInfo().device);

    console.log(this.deviceInfo);
    console.log(this.isMobile);  // returns if the device is a mobile device (android / iPhone / windows-phone etc)
    console.log(this.isTablet);  // returns if the device us a tablet (iPad etc)
    console.log(this.isDesktopDevice); // returns if the app is running on a Desktop browser.

  }
  setAnimation() {
    let i = 0;
    let cards = document.querySelectorAll(".cartas");
    cards.forEach((card: HTMLElement) => {
      card.classList.add("animate__animated", "animate__bounceInUp", "animate__delay-" + i + "s")
      i += 1;
    });
  }
  mansonryLayout(container: HTMLDivElement, itemsElemnt, columns) {
    container.classList.add('masonry-layout', `columns-${columns}`);
    let columnsElement: HTMLElement[] = [];
    for (let i = 1; i <= columns; i++) {
      let column = document.createElement('div');
      column.classList.add("masonry-column", "column-" + i);
      container.appendChild(column);
      columnsElement.push(column);
    }
    for (let m = 0; m < Math.ceil(itemsElemnt.length / columns); m++) {
      for (let n = 0; n < columns; n++) {
        let item: HTMLElement = itemsElemnt[m * columns + n];
        console.log(item);
        if (item?.getAttribute) {
          columnsElement[n].append(item);
          item.classList.add('masonry-item');
        }
      }

    }
  }

}
