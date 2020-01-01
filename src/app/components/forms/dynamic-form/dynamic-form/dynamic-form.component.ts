import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  @Input() config: any[] = [];

  public dynamicForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.dynamicForm = this.createGroup();
    console.log(this.dynamicForm);
  }

  createGroup() {
    const group = this.fb.group({});
    this.config.forEach(control => group.addControl(control.name, this.fb.control('')));
    return group;
  }
  keys(object) {
   return Object.keys(object);
  }
}
