import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [DynamicTableComponent],
  imports: [
    CommonModule,
    Ng2SmartTableModule
  ],
  exports: [
    DynamicTableComponent,
    Ng2SmartTableModule
  ]
})
export class DynamicTableModule { }
