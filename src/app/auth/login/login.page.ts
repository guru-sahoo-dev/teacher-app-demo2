import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { UtilService } from 'src/app/util.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$'),
      
    ]),

    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16),
    ])
  })

  get email() {
    return this.form.get('email')
  }

  get password() {
    return this.form.get('password')
  }

  constructor(
    private util: UtilService,
    private navCtrl: NavController, 
  ) { }

  ngOnInit() {
  }

  submit() {
    console.log(this.form.value); 
  }

  login() {
    // Enabling Side Menu
    this.util.setMenuState(true);
    this.navCtrl.navigateRoot('/home', { animationDirection: 'forward' });
  }

}
