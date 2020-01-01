import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { TableRoutingModule } from './table-routing.module';
import { DynamicTableModule } from 'src/app/components/table/dynamic-table.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    TableRoutingModule,
    DynamicTableModule,
    HttpClientModule
  ]
})
export class TableModule { }
