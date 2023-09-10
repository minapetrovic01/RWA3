import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { AppState } from './app.state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { SignInUserComponent } from './sign-in-user/sign-in-user.component';
import { SignUpUserComponent } from './sign-up-user/sign-up-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import{ MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { authReducer } from './store/user.reducer';
import { UserEffects } from './store/user.effects';

@NgModule({
  declarations: [
    AppComponent,
    SignInUserComponent,
    SignUpUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot<AppState>({auth:authReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
    EffectsModule.forRoot([UserEffects]),
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
