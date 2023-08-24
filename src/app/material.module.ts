import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from "@angular/material/icon"
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatSelectModule } from "@angular/material/select"
import { MatInputModule } from "@angular/material/input"


@NgModule({
	declarations: [],
	imports: [
		CommonModule
	],
	exports: [
		MatIconModule,
		MatFormFieldModule,
		MatInputModule,
		MatSelectModule
	]
})
export class MaterialModule { }
