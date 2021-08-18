import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
export interface Menu {
  id: number;
  nombre: string;
  icono: string;
  path?: string;
  opciones?: Menu[];
}
export interface User {
  id: number;
  url_img: string;
  nombre: string;
  profesion: string;
  url_repositorio?: string;
}
export interface Item {
  id: number;
  url_img: string;
  nombre: string;
  descripcion: string;
  url_pagina?: string;
}
export interface Servicios {
  id: number;
  titulo: string;
  descripcion: string;
}

@Injectable({
  providedIn: 'root'
})
export class GeneralesService {


  constructor() { }
  getMenu(): Observable<Menu[]> {
    return of(this.menu);
  }
  getUser(): Observable<User> {
    return of(this.user);
  }
  getItem(): Observable<Item[]> {
    return of(this.item);
  }
  getDestacados(): Observable<Item[]> {
    return of(this.itemDestacados);
  }
  getServicios(): Observable<Servicios[]> {
    return of(this.servicios)
  }
  user: User = {
    id: 1, url_img: "../../../assets/img/foto.jpg",
    nombre: "Emilio Reyes",
    profesion: "Ingeniero en Sistemas",
    url_repositorio: "https://github.com/emilioreyes"
  }
  item: Item[] = [{
    id: 0,
    url_img: "../../../assets/img/logoJunta.ico",
    nombre: "Sistema Control JAPMAN",
    descripcion: "Desarrollador del Sistema para el control del consumo para la Junta Parroquial de Agua Manglaralto"
  }, {
    id: 1,
    url_img: "../../../assets/img/firebase.png",
    nombre: "Firebase Stores",
    descripcion: "Desarrollador de tiendas en linea para emprededores Angular-Firebase"
  }, {
    id: 3,
    url_img: "../../../assets/img/images.png",
    nombre: "Docente Pre-Universitario",
    descripcion: "Docente de Matemáticas para el pre-universitario de la Facultad de Sistemas y Telecomunicaciones"
  }
  ]
  itemDestacados: Item[] = [{
    id: 0,
    url_img: "../../../assets/img/logoJunta.ico",
    nombre: "Sistema Control JAPMAN",
    descripcion: "Sistema para el control del consumo de agua para la Junta de Agua Potable Manglaralto." +
      "Este sistema se desarrollo en el 2015 y desde aquella fecha hasta la actualidad hemos respondido a las modificaciones y requerimientos que" +
      " las distintas administraciones han requerido."
  }, {
    id: 1,
    url_img: "../../../assets/img/firebase.png",
    nombre: "Firebase Stores",
    descripcion: "Desarrollador de tiendas en linea para emprededores Angular-Firebase." +
      " Estas paginas las creamos con la finalidad de reducir costos en infraestructura e implementacion y que de esta manera se conviertan" +
      " en una alternativa econòmica factible para los nuevos negocios del mercado, Firebase es la plataforma de desarrollo móvil de Google que le permite" +
      " crear y hacer crecer su aplicación rápidamente. Está diseñado para que pueda incorporar fácilmente los productos de Google Cloud a medida que crecen las necesidades de su equipo o infraestructura. fuente(https://firebase.google.com/firebase-and-gcp?hl=es)"
  }, {
    id: 3,
    url_img: "../../../assets/img/logo_toli.png",
    nombre: "Toli Store",
    descripcion: "Toli Store es una nueva marca de ropa que actualmente està en proceso de registro; tenemos stock de camisetas. " +
      "El proyecto està en fase de expanciòn y actualmente ya contamos con una tienda en linea, màs redes sociales que permiten visualizar la marca y los productos",
    url_pagina: "https://toli-store-2872f.web.app/"
  },
  {
    id: 4,
    url_img: "../../../assets/img/images.png",
    nombre: "GECOVE",
    descripcion: "Sistema de Gestiòn de Contabilidad y Ventas. " +
      "Actualmente el proyecto està en fase de desarrollo, el Backend de la plataforma esta siendo desarrollado con Java + Spring boot + Spring Security" +
      " El Frontend serà multiplataforma, tendremos version Web (Angular) y Version Web (Ionic)",
    url_pagina: ""
  }, {
    id: 5,
    url_img: "../../../assets/img/lampara.jpg",
    nombre: "eColorFul Magic",
    descripcion: "Las eColoFul Magic es un conjunto de lamparas que podrás controlar con el Bluetooth de tu dispositivo móvil." +
      " Úsalas como lamparas de noche en tu habitación, en tu sala o como complemento para arreglos de mesa y adaptalas al color de tu preferencia",
    url_pagina: "https://play.google.com/store/apps/details?id=com.project.emilio.bt"
  }
  ]
  menu: Menu[] = [{
    id: 1,
    nombre: 'Bienvenida',
    icono: "fas fa-home",
    path: 'bienvenida',
    opciones: [
      {
        id: 1,
        nombre: 'Home op 1',
        icono: "fas fa-home"
      },
      {
        id: 2,
        nombre: 'Home op 2',
        icono: "fas fa-home"
      }
    ]
  }, {
    id: 2,
    nombre: 'Portafolio',
    icono: "fas fa-briefcase",
    path: 'destacados',
    opciones: [
      {
        id: 1,
        nombre: 'Ex Cy op 1',
        icono: "fas fa-home"
      },
      {
        id: 2,
        nombre: 'Ex Cy op 2',
        icono: "fas fa-home"
      }
    ]
  }, {
    id: 3,
    nombre: 'Servicios',
    icono: "fas fa-star",
    path: 'servicios',
    opciones: [
      {
        id: 1,
        nombre: 'Not op 1',
        icono: "fas fa-home"
      },
      {
        id: 2,
        nombre: 'Not op 2',
        icono: "fas fa-home"
      }
    ]
  }/*, {
    id: 4,
    nombre: 'Contacto',
    icono: "fas fa-id-card-alt",
    path: 'contactos',
    opciones: [
      {
        id: 1,
        nombre: 'Fav op 1',
        icono: "fas fa-home"
      },
      {
        id: 2,
        nombre: 'Fav op 2',
        icono: "fas fa-home"
      }
    ]
  }*/
  ]
  servicios: Servicios[] = [
    {
      id: 0,
      titulo: "Frontend-Developper",
      descripcion: "Desarrollamos proyectos web responsivos, con tecnologias escalables y actualizadas."
    }, {
      id: 1,
      titulo: "Programador",
      descripcion: "Creamos soluciones informáticas que requieran de programación para comercios en general."
    }, {
      id: 2,
      titulo: "Redes Sociales",
      descripcion: "Asesoramos en el uso de redes sociales para que puedas administrar tu negocio o emprendimiento. Te mostramos como usar Facebook Business Suite" +
        " para que usted mismo administre sus anuncios publicitarios."
    }, {
      id: 3,
      titulo: "Soporte Técnico",
      descripcion: "Brindamos a nuestros clientes el soporte técnico necesario en el uso de aplicativos desarrollados por nosotros."
    }, {
      id: 4,
      titulo: "Asistencia Remota",
      descripcion: "Contamos con asistencia remota para temas informáticos en general. "
    }, {
      id: 5,
      titulo: "Acompañante",
      descripcion: '"Cuidado y me bacilo hasta tu pelada." =D'
    }
  ]
}
