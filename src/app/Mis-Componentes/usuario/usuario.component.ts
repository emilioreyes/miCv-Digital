import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../generales.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  @Input() userLoged: User;
  constructor() { }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    let img = document.querySelector('.user-img') as HTMLDivElement;
    img.style.backgroundImage = 'url(' + this.userLoged.url_img + ')';
    img.style.backgroundSize = "cover";

  }

}
