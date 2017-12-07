import { Component, OnInit } from '@angular/core';
import { SignInService } from '../sign-in.service';


@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css'],
  providers:[SignInService]
})
export class SignInFormComponent implements OnInit {
  email = '';
  password = '';

  constructor(private signinService: SignInService) { }

  ngOnInit() {
  }

  // onSubmit(){
  //   console.log(this.email+this.password);
  // }

  onSubmit(formSignIn) {
    // console.log(formSignIn.value.email2 + formSignIn.value.password2);
    // throw new Error('Form invalid');
    this.signinService.sendPost(formSignIn.value)
    .then(res=>console.log(res));
    
  }


}
