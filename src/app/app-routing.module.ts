import { LayoutComponent } from './shared/layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: '../app/containers/login/login.module#LoginModule'
  }, {
    path: 'forms',
    loadChildren: '../app/containers/form/form.module#FormModule'
  },{
    path: 'table',
    loadChildren: '../app/containers/table/table.module#TableModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
