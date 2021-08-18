import { Component, OnInit } from '@angular/core';
import { Menu, GeneralesService } from '../../generales.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  menu: Menu[] = [];
  constructor(private serviciosGenerales: GeneralesService) { }

  ngOnInit(): void {
    this.serviciosGenerales.getMenu().subscribe(res => {
      this.menu = res;
    });
  }
  ngAfterViewInit(): void {
    let links = document.querySelectorAll(".item-link");
    console.log(links);
    links.forEach((element: HTMLUListElement) => {
      console.log(element)
    });
  }
  setActive(id) {
    let links = document.querySelectorAll(".item-link");
    links.forEach((element: HTMLUListElement) => {
      element.classList.remove("link-active");
    });
    let element = document.getElementById(id);
    element.classList.add("link-active");
    console.log(element);

  }
}
