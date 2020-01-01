import { ServerDataSource } from 'ng2-smart-table';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnInit {

  @Input() settings;
  @Input() source: ServerDataSource;
  constructor() { }

  ngOnInit() {
  }

}
