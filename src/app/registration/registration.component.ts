import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  user: any = {
    // Initialize the user object with empty values
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    middleName: '',
    lastName: '',
    phoneNumber: ''
  };
  isRegistered: boolean = false;

  @ViewChild('registrationForm', { static: false }) form!: NgForm;

  ngAfterViewInit() {
    // 'form' is now assigned here
  }

  passwordsMatchValidator(): boolean {
    return this.user['password'] === this.user['confirmPassword'];
  }

  registerUser() {
    this.isRegistered = false;

    if (this.form.valid) {
      if (this.passwordsMatchValidator()) {
        this.isRegistered = true;
      } else {
        this.form.controls['confirmPassword'].setErrors({ 'passwordMismatch': true });
      }
    }
  }
}