import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceModule } from 'src/app/shared/service/service.module';

import { FormFieldModule } from './../../components/forms/form-field/form-field.module';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginService } from './login.service';

import { FirebaseModule } from './../../firebase/firebase.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ServiceModule,
    FirebaseModule,
    ReactiveFormsModule,
    FormFieldModule
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule { }
