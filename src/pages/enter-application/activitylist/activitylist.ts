import { Component, Output, EventEmitter } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ActivitylistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-activitylist',
  templateUrl: 'activitylist.html',
})
export class ActivitylistPage {

  @Output() public goToHome: EventEmitter<void> = new EventEmitter();
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivitylistPage');
  }

  public goHome(){
    this.goToHome.next();
  }
}
