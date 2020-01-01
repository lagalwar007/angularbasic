import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-input',
  styleUrls: ['./form-input.component.scss'],
  template: `<div
  class="dynamic-field form-input"
  [formGroup]="group">
  <label>{{ config.label }}</label>
  <input
    type="text"
    [attr.placeholder]="config.placeholder"
    [formControlName]="config.name" />
</div>
  `
})
export class FormInputComponent {
  config;
  group: FormGroup;
  constructor() { }

}
