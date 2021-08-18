import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../generales.service';
import { Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  @Input() item: Item;
  isDesktopDevice;
  constructor(private router: Router, private deviceService: DeviceDetectorService) {
    this.isDesktopDevice = deviceService.isDesktop();
  }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.isDesktopDevice ? this.setAnimation() : null;
  }
  navegar(url) {
    this.router.navigateByUrl(url);
  }
  setAnimation() {
    let i = 0;
    let cards = document.querySelectorAll(".wrapper-item");
    cards.forEach((card: HTMLElement) => {
      card.classList.add("animate__animated", "animate__bounceInUp", "animate__delay-" + i + "s")
      i += 1;
    });
    i = 0;
    let lineas = document.querySelectorAll(".linea");
    lineas.forEach((linea: HTMLElement) => {
      linea.classList.add("animate__animated", "animate__bounceInUp", "animate__delay-" + i + "s")
      i += 1;
    });
  }
}
