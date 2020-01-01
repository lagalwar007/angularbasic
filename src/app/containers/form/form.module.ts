import { FormRoutingModule } from './form-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { DynamicFormModule } from 'src/app/components/forms/dynamic-form/dynamic-form.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    FormRoutingModule,
    DynamicFormModule,
    ReactiveFormsModule
  ]
})
export class FormModule { }
