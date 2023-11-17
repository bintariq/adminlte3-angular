import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {AuthService} from '../services/auth.service'

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  resetPasswordForm = new FormGroup({
    password: new FormControl(null, [Validators.required]),
    password_confirmation: new FormControl(null, [Validators.required]),
  });
  emailForm = new FormGroup({
    email: new FormControl(null, [Validators.required]),
  });
  isError: boolean = false;
  screen: string = 'emailScreen';
  successMsg: string;
  emailProcessing: boolean = false;
  token:any = '';
  constructor(private activatedRoute: ActivatedRoute,private authService:AuthService, private router: Router) {
    this.activatedRoute.queryParams.subscribe(queryParams => {
      if (queryParams.token) {

         this.token = queryParams.token;
         this.screen = 'passwordScreen'
      }
    });
  }


  onResetPassword(){
   this.isError = false;
   this.authService.resetPassword(this.resetPasswordForm.value,this.token)?.subscribe((res:any)=>{
    if(res.status === 'success'){
      this.router.navigate(['/login']);
    }else{
      this.isError = true;
    }

   }, err=>{
    this.isError = true;
    this.successMsg = 'Token is expired';
   })

  }

  onEmailScreenClick(){
    this.isError = false;
    this.emailProcessing = true;
    this.authService.forgetPassword(this.emailForm.value)?.subscribe((res:any)=>{
      this.emailProcessing = false;
     if(res.status === 'success'){
       this.successMsg = 'Reset Password Email Has Been Sent To Your Account';
     }else{
       this.isError = true;
       this.successMsg = 'There is Problem in sending email';
     }

    }, err=>{
     this.isError = true;
    })
  }

}
