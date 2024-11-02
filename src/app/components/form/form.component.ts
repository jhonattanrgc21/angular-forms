import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {

	form!: FormGroup;

	get textField() {
		return this.form.get('text');
	}

	get emailField() {
		return this.form.get('email');
	}

	get nameField() {
		return this.form.get('name');
	}

	get dateField() {
		return this.form.get('date');
	}

	get categoryField() {
		return this.form.get('category');
	}

	get genderField() {
		return this.form.get('gender');
	}

	constructor(private _formBuilder: FormBuilder) {
		// Se inicializa aqui porque en el ngOnInit se usa cuando se van a realizar peticiones para cargar los datos al inicio del componente
		this.buildForm();
	}

	ngOnInit() {
	}

	onNumberInput(event: Event) {
		const input = event.target as HTMLInputElement;

		// Elimina cualquier carácter que no sea un dígito
		let sanitizedValue = input.value.replace(/[^\d]/g, '');

		// Actualiza el valor del input
		input.value = sanitizedValue;

		// Actualiza el valor del control del formulario
		const control = this.form.get(input.getAttribute('formControlName'));
		if (control) {
		  control.setValue(sanitizedValue, { emitEvent: false });
		  control.updateValueAndValidity();
		}
	  }



	private buildForm() {
		// Si el campo tiene una sola validacion, se recomienda no usar los corchetes
		this.form = this._formBuilder.group({
			name: ['', Validators.required],
			date: ['', Validators.required],
			email: ['', [Validators.required, Validators.email]],
			text: ['', [Validators.required, Validators.maxLength(80)]],
			category: ['', Validators.required],
			gender: ['', Validators.required],
			porcentage: ['', Validators.required],
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

	isInvalid(field: string): boolean | null | undefined {
		return this.form.get(field)?.errors && this.form.get(field)?.touched;
	}

}
