import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { FormInputComponent } from './dynamic-form/components/form-input/form-input.component';
import { FormSelectComponent } from './dynamic-form/components/form-select/form-select.component';
import { FormButtonComponent } from './dynamic-form/components/form-button/form-button.component';

@NgModule({
  declarations: [DynamicFormComponent, FormInputComponent, FormSelectComponent, FormButtonComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    DynamicFormComponent
  ]
})
export class DynamicFormModule { }
