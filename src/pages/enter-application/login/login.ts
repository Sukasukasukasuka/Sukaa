import { Component, ViewChild, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, Slide } from 'ionic-angular';
import { Login } from './login.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements OnInit{

  // @ViewChild(Slides) slides: Slides;

  public login: Login = {
    name: '',
    weight: null,
    age: null,
    height: null,
    gender: null
  }
  public formGroup: FormGroup;
  public loading: boolean;
  @Output() public submitEvent: EventEmitter<number> = new EventEmitter();

  public constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _formBuilder: FormBuilder
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  public ngOnInit(){
    this.formGroup = this._formBuilder.group({
      name: ['', Validators.required ],
      weight: ['', Validators.required ],
      height: ['', Validators.required ],
      age: ['', Validators.required ],
      gender: ['', Validators.required ]

    })
    this.loading = true;

  }

  public submit(){
    console.log(this.login);

    this.submitEvent.next(2);
  }

}
