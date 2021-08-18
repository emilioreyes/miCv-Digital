import { Component, OnInit } from '@angular/core';
import { GeneralesService, Item } from '../../generales.service';

@Component({
  selector: 'app-destacados',
  templateUrl: './destacados.component.html',
  styleUrls: ['./destacados.component.scss']
})
export class DestacadosComponent implements OnInit {
  lstItem: Item[] = [];
  constructor(private serviciosGenerales: GeneralesService) { }

  ngOnInit(): void {
    this.serviciosGenerales.getDestacados().subscribe(res => {
      this.lstItem = res;
    });
  }

}
