import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  signupForm = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    password_confirmation: new FormControl(null, [Validators.required]),
    username: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required]),
  });
  isError: boolean = false;
  passwordError: boolean = false;
  serverError: boolean = false;
  constructor(private authService:AuthService, private router: Router) { }
  onSingUp(){
    this.serverError = false;
    if(!this.validForm()){
      return
    }
    this.authService.signUp(this.signupForm.value)?.subscribe((res:any)=>{
      if(res.status === 'success'){
        this.router.navigate(['/login']);
      }

    }, err=>{
      this.serverError = true;
    })
  }

  validForm(){

    this.isError = false;
    this.passwordError = false;
    if(!this.signupForm.value.email || !this.signupForm.value.username || !this.signupForm.value.phone || !this.signupForm.value.password || !this.signupForm.value.password_confirmation){
      this.isError = true;
      return false
    }
    if(this.signupForm.value.password != this.signupForm.value.password_confirmation){
      this.passwordError = true;
      return false
    }
    return true
  }

}
