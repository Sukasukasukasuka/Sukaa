import { Component, OnInit, ViewChild } from '@angular/core';
import { Slides, NavController } from 'ionic-angular';
import { TabsPage } from '../../tabs/tabs';

@Component({
  selector: 'app-login-slider',
  templateUrl: './login-slider.component.html'
})
export class LoginSliderComponent implements OnInit {

  @ViewChild(Slides) public slides: Slides;
  constructor(
    private _navCtrl: NavController
  ) { }

  ngOnInit() {
    this.slides.lockSwipes(true);
  }

  public goToPage(event: number) {
    this.slides.lockSwipes(false);
    console.log(event, '11111');
    this.slides.slideNext();
    this.slides.lockSwipes(true);
}

public navigateToHomePage(){
    this._navCtrl.setRoot(TabsPage,{}, {animate: true, direction: 'forward'});
}

}
