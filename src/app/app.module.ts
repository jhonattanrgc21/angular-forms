import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { NgxMaskModule } from 'ngx-mask';
import { FormArrayComponent } from './components/form-array/form-array.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

@NgModule({
	declarations: [
		AppComponent,
		ProductFormComponent,
		FormComponent,
		FormArrayComponent
	],
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		NgxMaskModule.forRoot(),
		BrowserAnimationsModule,
		MaterialModule
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
