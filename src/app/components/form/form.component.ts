import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form!: FormGroup;

  get textField(){
    return this.form.get('text')?.value;
  }

  get emailField(){
    return this.form.get('email')?.value;
  }

  constructor(private _formBuilder: FormBuilder) {
    // Se inicializa aqui porque en el ngOnInit se usa cuando se van a realizar peticiones para cargar los datos al inicio del componente
    this.buildForm();
  }

  ngOnInit() {
  }

  private buildForm() {
    this.form = this._formBuilder.group({
      name: ['',  [Validators.required]],
      date: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      text: ['', [Validators.required, Validators.maxLength(80)]],
      category: ['', [Validators.required]],
      gender: ['', [Validators.required]],
    });

    this.form.valueChanges
    .subscribe(value => {
      console.log(value);
    });
  }

  save(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      console.log(value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  doSomething() {
    console.log('click');
  }

}
