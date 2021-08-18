import { Component, OnInit, Output } from '@angular/core';
import { GeneralesService, Menu, User } from '../generales.service';
import { DeviceDetectorService } from 'ngx-device-detector';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  menu: Menu[] = [];
  @Output() user: User;
  isMobile; isTablet; isDesktopDevice;
  constructor(private serviciosGenerales: GeneralesService, private deviceService: DeviceDetectorService) { }

  ngOnInit(): void {
    this.serviciosGenerales.getMenu().subscribe(res => {
      this.menu = res;

    });
    this.serviciosGenerales.getUser().subscribe(res => {
      this.user = res;
    })
  }
  ngAfterViewInit(): void {
    this.isDesktopDevice = this.deviceService.isDesktop();
    console.log(this.isDesktopDevice);

    if (this.isDesktopDevice) {
      this.setAnimation();
      this.setActive(0);
    }


  }
  setAnimation() {
    let izquierda = document.querySelector(".aside-1") as HTMLElement;
    izquierda.classList.add('animate__animated', 'animate__slideInLeft', 'animate__faster');
    let centro = document.querySelector(".main") as HTMLElement;
    centro.classList.add('animate__animated', 'animate__zoomInUp', 'animate__fast');
    let derecha = document.querySelector(".aside-2") as HTMLElement;
    derecha.classList.add('animate__animated', 'animate__slideInRight', 'animate__faster');
    let itemMenu = document.querySelectorAll(".item-link");
    let i = 0;
    itemMenu.forEach((item: HTMLElement) => {
      item.classList.add("animate__animated", "animate__bounceInUp", "animate__delay-" + i + "s")
      i += 1;
    });
  }
  setActive(id) {
    let links = document.querySelectorAll(".item-link");
    links.forEach((element: HTMLUListElement) => {
      element.classList.remove("link-active");
    });
    let element = document.getElementById(id);
    element.classList.add("link-active");
    this.addClass();
  }
  addClass() {
    let menu = document.querySelector(".menu")
    menu.classList.toggle("show-menu");
  }
}
