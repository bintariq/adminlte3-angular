import { Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SocketService } from 'src/app/core/shared/socket.service';
import { DatePipe } from '@angular/common';
import { RolesService } from 'src/app/core/shared/services/roles.service';
import { HttpClient } from '@angular/common/http';
import { UsersService } from './users.service';
import { ConfirmationComponent } from 'src/app/core/shared/components/confirmation/confirmation.component';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @ViewChild('closeModal') closeModal: ElementRef

  selectedRoles:any = [];
  closeResult: string;
  userInfo:any;
  userForm: any;
  allUsers:any = [];
  userRoles:any = [];
  errors: any = [];
  formError: any = {};
  tableColumns:[
    'Id',
    'User Name',
    'Email',
    'Phone',
    'Status',
    'Login Status',
    'Actions'
  ];
  message: string;
  imagePath: any;
  createFormImageUrl: string | ArrayBuffer;
  editFormImageUrl: string | ArrayBuffer;
  changedFileName: string;
  userImage: string;
  serverError: boolean;
  popUpShowHideFlag: boolean;
  editPopup: boolean;
  formSubmissionFlag: boolean = false;
  constructor(
    private roleService: RolesService,
    private socket: SocketService,
    private http: HttpClient,
    private usersService: UsersService,
    private viewContainer: ViewContainerRef
    ) {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
  }

  ngOnInit(): void {
    this.getUserList();
    this.getUserRoleList();
    this.setForm();
  }

  async getUserList() {
    this.allUsers = [
      {
        user_id: '1',
        email:'john@gmail.com',
        password:'123456',
        phone:'+92301789658',
        gender:'male',
        country:'Pakistan',
        userStatus:1,
        loginStatus:0,
        username:'john doe'
      },
      {
        user_id: '2',
        email:'suzan@gmail.com',
        password:'123456',
        phone:'+92693569314',
        country:'Pakistan',
        gender:'male',
        userStatus:1,
        loginStatus:0,
        username:'Suzan Miler'
      }
    ];
  }
  getUserRoleList() {
    this.userRoles = [
      {
        id:1,
        roleName:'Super Admin'
      },
      {
        id:2,
        roleName:'Company Admin'
      }
    ]
  }
  setForm() {
    debugger
    this.userForm = new FormGroup({
      user_id: new FormControl(null),
      roleId: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      username: new FormControl(null, [Validators.required]),
      userStatus: new FormControl(),
      loginStatus: new FormControl(),
      gender: new FormControl(),
      phone: new FormControl(null, [Validators.required]),
      userImage: new FormControl(['']),
      password: new FormControl(null, [Validators.required]),
      password_confirmation: new FormControl(null, [Validators.required]),
    });
  }
  updateStatus(item) {

    item.userStatus = item.userStatus ? 0 : !item.userStatus;
    this.userForm.patchValue({ 'userStatus': item.userStatus });
    this.userForm.patchValue(item)
    this.update();

  }

  updateLoginStatus(item) {
    if(item.loginStatus){item.loginStatus = 0}else{item.loginStatus = 1};
    this.userForm.patchValue({ 'loginStatus': item.loginStatus });
    this.userForm.patchValue(item)
    this.update();
  }


  create() {
    if (!this.validForm()) {
      return
    }
    this.formSubmissionFlag  = true;
    const formData: any = new FormData();
    formData.append('countryId', 1);
    formData.append('companyId', 1);
    formData.append('roleId', this.userForm.value.roleId);
    formData.append('email', this.userForm.value.email);
    formData.append('password', this.userForm.value.password);
    formData.append('password_confirmation', this.userForm.value.password_confirmation);
    formData.append('username', this.userForm.value.username);
    formData.append('phone', this.userForm.value.phone);
    formData.append('userImage', this.userForm.value.userImage);
    this.userForm.reset();
    this.closeModal.nativeElement.click();
    this.formSubmissionFlag  = false;
    Swal.fire({
      title: '',
      text: 'User created Successfully',
      icon: 'success',
      confirmButtonText: 'Close'
    })
    // this.usersService.createUser(formData)?.subscribe(async (res: any) => {
    //   if (res.status === 'success') {
    //     this.userForm.reset();
    //     this.closeModal.nativeElement.click();
    //     this.formSubmissionFlag  = false;
    //     Swal.fire({
    //       title: '',
    //       text: 'User created Successfully',
    //       icon: 'success',
    //       confirmButtonText: 'Close'
    //     })
    //   }
    // }, err => {
    //   console.log(err);
    //   Swal.fire({
    //     title: 'Error!',
    //     text: 'There is an error from backend side.',
    //     icon: 'error',
    //     confirmButtonText: 'Close'
    //   })
    //   this.serverError = true;
    // })
  }
  read(i: any) {
    this.userForm.patchValue(i);
    this.editPopup = true;
    // setTimeout(() => {
    //   this.popUpShowHideFlag = !this.popUpShowHideFlag;
    // }, 500);
  }
  update() {
    this.formSubmissionFlag  = true;
    const formData: any = new FormData();
    formData.append('user_id', this.userForm.value.user_id);
    formData.append('countryId', 1);
    formData.append('companyId', 1);
    formData.append('roleId', this.userForm.value.roleId);
    formData.append('email', this.userForm.value.email);
    formData.append('username', this.userForm.value.username);
    formData.append('phone', this.userForm.value.phone);
    formData.append('userImage', this.userForm.value.userImage);
    formData.append('userStatus', this.userForm.value.userStatus);
    formData.append('loginStatus', this.userForm.value.loginStatus);
    this.formSubmissionFlag  = false;
    this.closeModal.nativeElement.click();
    Swal.fire({
      title: '',
      text: 'User updated Successfully',
      icon: 'success',
      confirmButtonText: 'Close'
    });
    // this.usersService.editUser(formData)?.subscribe((res: any) => {
    //   if (res.status === 'success') {
    //     this.formSubmissionFlag  = false;
    //     this.closeModal.nativeElement.click();
    //     Swal.fire({
    //       title: '',
    //       text: 'User updated Successfully',
    //       icon: 'success',
    //       confirmButtonText: 'Close'
    //     })
    //   }
    // })
  }
  delete(i: any) {
    const dialogRef = this.viewContainer.createComponent(ConfirmationComponent)
    dialogRef.instance.visible = true;
    dialogRef.instance.action.subscribe(x => {
      if (x) {
        // this.usersService.deleteUser(i.user_id)?.subscribe((res: any) => {
        //   if (res.status === 'success') {
        //     dialogRef.instance.visible = false;
        //     Swal.fire({
        //       title: '',
        //       text: 'User Deleted Successfully',
        //       icon: 'success',
        //       confirmButtonText: 'Close'
        //     })
        //   }
        // })
        dialogRef.instance.visible = false;
        Swal.fire({
          title: '',
          text: 'User Deleted Successfully',
          icon: 'success',
          confirmButtonText: 'Close'
        })
      }
    })
  }
  validForm() {
    this.errors = [];
    this.formError = {};
    let validFlag = true;
    if (!this.userForm.value.email) {
      this.errors.push('email');
      this.formError.errorForEmail = 'Email is required';
      validFlag = false;
    }
    if (!this.userForm.value.password) {
      this.errors.push('password');
      this.formError.errorForPassword = 'Password is required';
      validFlag = false;
    }
    return validFlag;
  }













  //  FILE UPLOAD FUNCTIONS

  selectFile(e, formType) {

    let file = e.target.files[0];
    let ext: string[] = file.type.split('/');
    if (file.type === 'application/pdf' || ext[0] === 'video' || ext[0] === 'image') {
      if (formType == 'createForm') {
        this.userForm.get('userImage').setValue(file);
      } else {
        this.userForm.get('userImage').setValue(file);
      }
      this.showImage(file, formType)
    } else {
      e.stopPropagation();
    }
  }
  showImage(file, formType) {
    const mimeType = file.type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    const reader = new FileReader();
    this.imagePath = file;
    reader.readAsDataURL(file);
    reader.onload = (_event) => {
      if (formType == 'createForm') {
        this.createFormImageUrl = reader.result;
      } else {
        this.editFormImageUrl = reader.result;
      }
    }
  }
  onRemoveFile(e, formType) {
    e.value = '';
    this.userForm.get('userImage').setValue([]);
    this.changedFileName = '';
    this.userImage = '';
    if (formType == 'createForm') {
      this.createFormImageUrl = '';
    } else {
      this.editFormImageUrl = '';
    }
  }
  getFileName(url) {
    if (typeof url == 'string') {
      let array = url.split('display/');
      return array[1];
    }
  }
  focusOnInput(e) {
    setTimeout(() => {
      e?.focus();
    }, 200);
  }

}
