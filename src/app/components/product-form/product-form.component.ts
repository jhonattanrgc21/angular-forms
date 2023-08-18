import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  /*
  * Estructura del FormControl:
  * Valor, Validacion sincrona, Validacion asincrona (Peticiones a Backend para verificar datos)
  */
  emailCtrl = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10)], []);

  constructor(){
    this.emailCtrl.valueChanges.pipe(debounceTime(500)).subscribe({
      next: (value) => console.log(value)
    })
  }

  getEmail(event: Event) {
    event.preventDefault();
    console.log(this.emailCtrl.value);
  }
}
