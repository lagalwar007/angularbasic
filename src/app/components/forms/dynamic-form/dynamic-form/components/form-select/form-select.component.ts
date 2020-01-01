import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-select',
  styleUrls: ['./form-select.component.scss'],
  template: `
  <div
    class="dynamic-field form-select"
    [formGroup]="group">
    <label>{{ config.label }}</label>
    <select [formControlName]="config.name">
      <option value="">{{ config.placeholder }}</option>
      <option *ngFor="let option of config.options">
        {{ option }}
      </option>
    </select>
  </div>
  `,
})
export class FormSelectComponent implements OnInit {

  config;
  group: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
