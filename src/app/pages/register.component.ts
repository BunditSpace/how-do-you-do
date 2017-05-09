import { RegisterService } from './services/register.service';
import { User } from 'app/pages/model/user';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  templateUrl: 'register.component.html'
})
export class RegisterComponent {

  model: User;

  constructor(private registerService: RegisterService) 
  {
      this.model =  { _id: null, username: "", password: "", email: "" };
  }

  registerUserForm: NgForm;
  @ViewChild('registerUserForm') currentForm: NgForm;

  ngAfterViewChecked() {
      this.formChanged();
    }

    formChanged() {
      if (this.currentForm === this.registerUserForm) { return; }
      this.registerUserForm = this.currentForm;
      if (this.registerUserForm) {
        this.registerUserForm.valueChanges
          .subscribe(data => this.onValueChanged(data));
      }
    }

    onValueChanged(data?: any) {
      if (!this.registerUserForm) { return; }
      const form = this.registerUserForm.form;

      for (const field in this.formErrors) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);

        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            this.formErrors[field] += messages[key] + ' ';
          }
        }
      }
    }

    formErrors = {
      'username': '',
      'email': '',
      'password': ''
    };

    validationMessages = {
      'username': {
        'required': 'Username is required.',
        'minlength': 'Username need more than 3 characters'
      },
      'email': {
        'required': 'Email is required.',
        'minlength': 'Email need more than 5 characters'
      },
      'password': {
        'required': 'Password is required.',
        'minlength': 'Password need more than 8 characters'
      }
    };

    registerUser(user: User) {
      console.log(user);
      this.registerService.registerUser(user);
    }
}
