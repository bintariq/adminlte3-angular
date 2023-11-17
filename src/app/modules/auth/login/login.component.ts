import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SocketService } from 'src/app/core/shared/socket.service';
import {AuthService} from '../services/auth.service'
import { navItems } from 'src/app/core/default-layout/_nav';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public navItems = navItems;
  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });
  isError: boolean = false;
  constructor(private authService:AuthService, private router: Router, private socket: SocketService) { }


  onSingIn(){
    this.router.navigate(['/dashboard']);
  }
  moveToForgetPassword(){
    this.router.navigate(['reset-password']);
  }
}
