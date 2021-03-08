import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IonInput, NavController } from '@ionic/angular';
import { UtilService } from 'src/app/util.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  //togglePassword funcn
  showPassword = false;
  passwordToggleIcon = 'eye';

  togglePassword(): void {
    this.showPassword = !this.showPassword;

    if (this.passwordToggleIcon == 'eye') {
      this.passwordToggleIcon = 'eye-off';
    } else {
      this.passwordToggleIcon = 'eye';
    }
  }

  form = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$'),
    ]),

    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16),
    ]),
  });

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  public errorMessages = {
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Please enter a valid email address' },
    ],
    password: [
      { type: 'required', message: 'Password is required' },
      {
        type: 'minlength',
        message: 'Password minimum length 8 characters',
      },
      {
        type: 'maxlength',
        message: 'Password maximum length 16 characters',
      },
    ],
  };

  constructor(
    private util: UtilService,
    private navCtrl: NavController,
    // private input: IonInput,
    public authService: AuthService
  ) {}

  ngOnInit() {}

  submit() {
    console.log(this.form.value);
    if (this.form.invalid) {
      return;
    }
    this.authService.login(this.form.value.email, this.form.value.password);
  }

  login() {
    // Enabling Side Menu
    this.util.setMenuState(true);
    // this.navCtrl.navigateRoot('/tabs', { animationDirection: 'forward' });
  }
}
