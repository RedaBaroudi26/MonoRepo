import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from 'apps/admin/src/app/core/service/auth.service';
import { Role } from 'apps/admin/src/app/core/models/role';
import { UnsubscribeOnDestroyAdapter } from 'apps/admin/src/app/shared/UnsubscribeOnDestroyAdapter';
import { UserService } from '@tp1-mono-repo/shared';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  providers : [UserService] 
})
export class SigninComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit
{
  
  authForm!: UntypedFormGroup;
  submitted = false;
  loading = false;
  error = '';
  hide = true;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    private userService : UserService,
    private authService : AuthService
  ) {
    super();
  }

  ngOnInit() {
    this.authForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() {
    return this.authForm.controls;
  }

  
  onSubmit() {

    this.submitted = true;
    this.loading = true;
    this.error = '';

    if (this.authForm.invalid) {
      this.error = 'email and Password not valid !';
      return;
    } else {
      this.subs.sink = this.userService
        .login(this.f['email'].value, this.f['password'].value)
        .subscribe({
          next: (res) => {
            if (res.success) {
              setTimeout(() => { 
                this.userService.user = {
                  name: res.name ,
                  email: res.email ,
                  adress: '',
                  city: '',
                  country: '',
                  phone: '',
                  isAdmin: true
                }
                this.authService.login( "admin@school.org" , "admin@123" ).subscribe(
                  () => {const role = this.authService.currentUserValue.role;
                  if ( role === Role.All || role === Role.Admin) {
                    this.router.navigate(['/admin/dashboard/main']);
                  } }
                )
                this.loading = false;
              }, 1000);
            } else {
              this.error = 'Invalid Login';
            }
          },
          error: (error) => {
            this.error = error;
            this.submitted = false;
            this.loading = false;
          },
        });
    }
    
  }
  

}
