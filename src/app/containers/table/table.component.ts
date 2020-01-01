import { Component, OnInit } from '@angular/core';
import { ServerDataSource } from 'ng2-smart-table';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  public source: ServerDataSource;
  settings = {
    columns: {
      id: {
        title: 'ID',
      },
      albumId: {
        title: 'Album',
      },
      title: {
        title: 'Title',
      },
      url: {
        title: 'Url',
      },
    },
  };
  constructor(public http: HttpClient) {
    this.source = new ServerDataSource(http, {
      endPoint: 'https://jsonplaceholder.typicode.com/photos'
    });
  }
  ngOnInit() {}

}
