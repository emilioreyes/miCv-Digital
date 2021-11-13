import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  contactForm: FormGroup;
  textLength = 0;
  max = 250;
  whatsapp; miMensaje;
  miEmail;
  constructor() { }

  ngOnInit(): void {
    this.inicializarForm();
    this.whatsapp = environment.wsp;
  }

  inicializarForm() {
    this.contactForm = new FormGroup({
      email: new FormControl("", [Validators.pattern(environment.patternEmail), Validators.required]),
      mensaje: new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(this.max)])
    })
  }

  onKeyUpEvent(event: any) {
    let palabra = event.target.value;
    this.textLength = palabra.length;
    this.miMensaje = palabra;
  }

  sendForm() {

  }

  setMail() {
    this.miEmail = this.contactForm.controls.email.value;
  }

  get email() {
    return this.contactForm.get("email");
  }

  get mensaje() {
    return this.contactForm.get("mensaje");
  }

  errorMessage = {
    email: [
      { type: "pattern", mensaje: "El mail no es válido" },
      { type: "required", mensaje: "El mail es obligatorio" }
    ], mensaje: [
      { type: "minlength", mensaje: "El minimo de caracteres es 10" },
      { type: "maxlength", mensaje: "El maximo son " + this.max + " caracteres" },
      { type: "required", mensaje: "El mensaje es requerido" }
    ]
  }

}
