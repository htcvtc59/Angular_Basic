import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  formSignUp: FormGroup;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.formSignUp = this.formBuilder.group({
      email: ['', [Validators.required, gmailValidator]],
      password: '',
      subject: this.formBuilder.group({
        nodejs: false,
        angular: false,
        reactjs: false
      })
    });
  }

  onSubmit() {
    console.log(this.formSignUp.value);
  }
  // Custom reactive form validator



}

function gmailValidator(formControl: FormControl) {
  if (formControl.value.includes('@gmail.com')) {
    return null;
  }
  return { gmail: true };
}
