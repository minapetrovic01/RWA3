import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  constructor(private router:Router) { }



  openProfile() {
    this.router.navigate(['mainPage/profile']);
  }

  openProjectForm() {
    this.router.navigate(['mainPage/projectForm', 'create']);
  }

  openPaperForm() {
    this.router.navigate(['mainPage/paperForm/', 'create']);
  }

  openBookForm() {
    this.router.navigate(['mainPage/bookForm', 'create']);
  }

  openMyArticles() {
    this.router.navigate(['mainPage/myArticles']);
  }

  openMyApplications() {
    this.router.navigate(['mainPage/myApplications']);
  }

  openMySubscriptions() {
    this.router.navigate(['mainPage/mySubscriptions']);
  }

  openGradeColleagues() {
    this.router.navigate(['mainPage/gradeColleagues']);
  }

  openHomePage() {
    this.router.navigate(['mainPage/homePage']);
  }

  signOut() {
   
    // this.mainPageGuard.setGuardStatus(false);
    // this.profileGuard.setGuardStatus(false);

    this.router.navigate(['/sign-in']);
  }

 

}
