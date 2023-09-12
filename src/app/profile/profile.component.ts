import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { selectUserData } from '../store/user.selectors';
import { createAvatar } from '@dicebear/core';
import { lorelei } from '@dicebear/collection';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

  profileToDisplay: any;
  isViewProfile: boolean = false;
  amSubscribed: boolean = false;
  @Input()
  isMe: boolean = false;

  avatar: any;
  svg: SafeResourceUrl = '';

  constructor(
    private userService: UserService,
    private sanitizer: DomSanitizer,
    private router: Router,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.select(selectUserData).subscribe((data) => {
      this.profileToDisplay = data;
    });
    this.createProfilePicture();
  }
  ngOnDestroy(): void {
  }

  createProfilePicture() {
    this.avatar = createAvatar(lorelei, {
      seed: this.determineSeed(),
      earringsProbability: 20,
      earrings: ['variant01', 'variant02', 'variant03'],
      frecklesProbability: 12,
      glassesProbability: 30,
    });
    const svgData = this.avatar.toString();
    this.svg = this.sanitizer.bypassSecurityTrustResourceUrl(
      'data:image/svg+xml;base64,' + btoa(svgData)
    );
  }

  determineSeed(): string {
    const seedList = [
      'Cleo',
      'Gizmo',
      'Willow',
      'Oreo',
      'Charlie',
      'Tigger',
      'Coco',
      'Sassy',
      'Salem',
      'Bandit',
      'Leo',
      'Pumpkin',
      'Sammy',
    ];
    const seed = seedList[Math.floor((Math.random() * 100) % seedList.length)];
    return seed;
  }


  deleteProfile() {
    // const dialogRef = this.dialog.open(DeleteProfileDialogComponent);

    // dialogRef.afterClosed().subscribe((result) => {
    //   if (result) {
    //     this.userService
    //       .deleteUser(this.profileToDisplay.user.id)
    //       .subscribe(() => {
    //         this.routeGuard.setGuardStatus(true);
    //         this.router.navigate(['/signUpUser']);
    //       });
    //   } else {
    //     // User canceled deletion
    //   }
    // });
  }

//   subscribeToUser() {
//     if (this.profileToDisplay === null)
//       throw new Error('Passed profile is null, something went wrong.');
//     this.userService
//       .subscribeTo(
//         this.profileService.profile.user!.id,
//         this.profileToDisplay.user!.id
//       )
//       .subscribe(() => {
//         if (this.profileToDisplay === null)
//           throw new Error('Passed profile is null, something went wrong.');
//         this.articleStateService.updateSubscriptionStatus(
//           this.profileToDisplay.user!.id,
//           true
//         );
//         this.amSubscribed = true;
//         this.openSnackBar('Successful subscription!');
//       });
//   }

//   unsubscribeFromUser() {
//     if (this.profileToDisplay === null)
//       throw new Error('Passed profile is null, something went wrong.');
//     this.userService
//       .unsubscribeFrom(
//         this.profileService.profile.user!.id,
//         this.profileToDisplay.user!.id
//       )
//       .subscribe(() => {
//         if (this.profileToDisplay === null)
//           throw new Error('Passed profile is null, something went wrong.');
//         this.articleStateService.updateSubscriptionStatus(
//           this.profileToDisplay.user!.id,
//           false
//         );
//         this.amSubscribed = false;
//         this.openSnackBar('Successful unsubscription!');
//       });
//   }

 }
