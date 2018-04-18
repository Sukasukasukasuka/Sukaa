import { Component, OnInit } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/enter-application/login/login';
import { LoginSliderComponent } from '../pages/enter-application/login-slider/login-slider.component';

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {
  public rootPage:any;

  public constructor(
    private _platform: Platform,
    private _statusBar: StatusBar,
    private _splashScreen: SplashScreen
  ) {  }

  public ngOnInit() {
    console.log('in init');
    this._platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this._statusBar.styleDefault();
      this._splashScreen.hide();
    })
    .then(() => this.rootPage = LoginSliderComponent)
    .then(() => console.log('setted root page'))
  }
}
