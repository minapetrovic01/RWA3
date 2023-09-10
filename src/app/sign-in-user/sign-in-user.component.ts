import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { routerGo } from '../store/router.actions';
import { Router } from '@angular/router';
import { login } from '../store/user.actions';

@Component({
  selector: 'app-sign-in-user',
  templateUrl: './sign-in-user.component.html',
  styleUrls: ['./sign-in-user.component.scss']
})
export class SignInUserComponent implements OnInit, OnDestroy{
  email: string = '';
  password: string = '';
  hidePassword: boolean = true;

  constructor(private store: Store<AppState>, private router:Router) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  onSignIn(): void {
    console.log('onSignIn');
    this.store.dispatch(login({email:this.email, password:this.password}));
  }

  onSignUp(): void {
    this.router.navigate(['sign-up']);
  }



}
