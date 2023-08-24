import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-form-array',
	templateUrl: './form-array.component.html',
	styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent {
	form: FormGroup;

	constructor(private fb: FormBuilder) {
		this.form = this.fb.group({
			lessons: this.fb.array([])
		});
	}

	get lessons() {
		return this.form.controls["lessons"] as FormArray;
	}

	get lessonsList(){
		return this.lessons.controls as FormGroup[];
	}

	addLesson() {
		const lessonForm: FormGroup = this.fb.group({
			title: ['', Validators.required],
			level: ['beginner', Validators.required]
		});

		this.lessons.push(lessonForm);
	}

	deleteLesson(lessonIndex: number) {
		this.lessons.removeAt(lessonIndex);
	}
}
