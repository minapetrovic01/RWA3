import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDto } from '../entities/user.dto';

@Component({
  selector: 'app-sign-up-user',
  templateUrl: './sign-up-user.component.html',
  styleUrls: ['./sign-up-user.component.scss']
})
export class SignUpUserComponent implements OnInit, OnDestroy{
 
  hidePassword: boolean = true;

  user:UserDto = new UserDto('','','','','','');

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  onSignIn(): void {
    this.router.navigate(['sign-in']);
  }

  onSignUp(): void {
    console.log('onSignUp');
  }


}
