import { Component, OnInit } from '@angular/core';
import { GeneralesService, Item } from '../../generales.service';
import { DeviceDetectorService } from 'ngx-device-detector';
@Component({
  selector: 'app-tabs-informacion',
  templateUrl: './tabs-informacion.component.html',
  styleUrls: ['./tabs-informacion.component.scss']
})
export class TabsInformacionComponent implements OnInit {
  lstItem: Item[] = [];
  isDesktopDevice;
  constructor(private serviciosGenerales: GeneralesService, private deviceService: DeviceDetectorService) { }

  ngOnInit(): void {
    this.serviciosGenerales.getItem().subscribe(res => {
      this.lstItem = res;
    });
  }
  ngAfterViewInit(): void {
    let tabContent = document.querySelectorAll('.tab-content');
    tabContent.forEach((element: HTMLElement) => {
      element.style.display = "none";
    });
    this.activarTab('aptitudes')
    this.isDesktopDevice = this.deviceService.isDesktop();
    this.isDesktopDevice ? this.setAnimation() : null
  }
  setAnimation() {
    let tabContent = document.querySelectorAll(".tab-content");
    tabContent.forEach((tab: HTMLElement) => {
      tab.classList.add("animate__animated", "animate__bounceInUp")
    });
  }
  activarTab(id) {
    let tabs = document.querySelectorAll('.tab');
    tabs.forEach((element: HTMLElement) => {
      element.classList.remove('is-active')
    });
    let tabHeader = document.getElementById("tab-" + id);
    tabHeader.classList.add('is-active');


    let tabContent = document.querySelectorAll('.tab-content');
    tabContent.forEach((element: HTMLElement) => {
      element.style.display = "none";
    });
    let tab = document.getElementById(id);
    tab.style.display = "block";
  }
}
