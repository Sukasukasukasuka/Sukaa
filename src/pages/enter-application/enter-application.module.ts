import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPage } from './login/login';
import { ActivitylistPage } from './activitylist/activitylist';
import { LoginSliderComponent } from './login-slider/login-slider.component';
import { IonicModule } from 'ionic-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginPage,
    ActivitylistPage,
    LoginSliderComponent
],
entryComponents: [
  LoginPage,
  ActivitylistPage,
  LoginSliderComponent
]
})
export class EnterApplicationModule { }
