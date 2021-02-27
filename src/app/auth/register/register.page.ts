import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm = new FormGroup({

    name: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z]+$'),
      Validators.minLength(5),
      Validators.maxLength(20),
    ]),

    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$'),
      
    ]),

    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$'),
      Validators.minLength(10),
    ]),

    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16),
    ]),

    passcode: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(10),
    ])
  })

  get name() {
    return this.registerForm.get('name')
  }

  get email() {
    return this.registerForm.get('email')
  }

  get phone() {
    return this.registerForm.get('phone')
  }

  get password() {
    return this.registerForm.get('password')
  }

  get passcode() {
    return this.registerForm.get('passcode')
  }

  public errorMessages = {
    name: [
      { type: 'required', message: 'Name is required' },
      { type: 'pattern', message: 'Please enter a valid name' },
      { type: 'maxlength', message: 'Name can be maximum 20 characters', },
    ],
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Please enter a valid email' },
    ],
    password: [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'password minimum length 8', },
      { type: 'maxlength', message: 'password maximum length 15', },
    ],
    phone: [
      { type: 'required', message: 'Phone number is required' },
      { type: 'pattern', message: 'Please enter a valid phone number' },
      { type: 'minLength', message: 'Please enter a valid phone number', },
    ],
    passcode: [
      { type: 'required', message: 'Passcode is required' },
      { type: 'minLength', message: 'Please enter a valid passcode', },
    ],
  };

  constructor() { }

  ngOnInit() {
  }

  submit() {
    console.log(this.registerForm.value);
  }

}
