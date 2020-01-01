import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public googleAuth = new Subject<firebase.auth.UserCredential>();
  public submitted = false;
  public loginForm = new FormGroup({
    email    : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required),
  });
  constructor(public loginService: LoginService) {}

  onLogin() {
    this.submitted = true;
    console.log(this.loginForm.valid);
    // this.loginService.loginWithGoogle().then(auth => this.googleAuth.next(auth));
    
  }
  get f() { return this.loginForm.controls; }
  logout() {}
  ngOnInit() {}

}
