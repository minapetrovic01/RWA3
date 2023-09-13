import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  constructor(private router:Router) { }

  addNewDecision() {
    this.router.navigate(['/calculator']);
  }

  myDecisions() {
    this.router.navigate(['/my-decisions']);
  }
  searchForOthers() {
    this.router.navigate(['/feed']);
  }
  goToProfile() {
    this.router.navigate(['/my-profile']);
  }

  signOut() {
   
    // this.mainPageGuard.setGuardStatus(false);
    // this.profileGuard.setGuardStatus(false);

    this.router.navigate(['/sign-in']);
  }

 

}
