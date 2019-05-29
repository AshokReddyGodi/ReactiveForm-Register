import { Component, OnInit } from '@angular/core';

// Importing the reactive form module classes.
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Import custom validator to validate that password and confirm password fields match.
import { Passwordmatch } from './Passwordvalidation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Register Form';

  myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  _formValidate() {
    // Here we have used a form builder and an array to allow for multiple validation rules on a form.
    this.myForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      pwd: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      cnfPwd: ['', Validators.required]
    }, {
        validator: Passwordmatch.matchPassword
      });
  }

  // To initialize the form group and validations in the 'ngOnInit' lifecycle hook.
  ngOnInit() {
    this._formValidate();
  }

  // To show how developers can access the form control values.
  _formSubmit() {
    if (this.myForm.invalid) {
      return;
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.myForm.getRawValue()));
  }
}
