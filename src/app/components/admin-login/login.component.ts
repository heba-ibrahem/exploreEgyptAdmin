import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
// import { OktaAuthService } from '@okta/okta-angular';
import { AdminLoginService } from 'src/app/services/admin-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup = new FormGroup({});
  currentUserSubscription: Subscription | null = null;
  islogged: boolean = false;
  constructor(private fb: FormBuilder, private adminService: AdminLoginService
    , private router: Router) {

    this.LoginForm = this.fb.group({
      email: [''],
      password: [''],
    })
  }
  login() {
    // const accessToken = this.oktaAuth.getAccessToken();
    console.log("log in")
    this.currentUserSubscription = this.adminService.login(this.LoginForm.value.email, this.LoginForm.value.password)
      .subscribe((user) => {
        if ((user.length > 0)) {
          console.log(user[0]);
          this.islogged = false;
          localStorage.setItem('AdminToken', "admin");
          this.router.navigateByUrl('/')
        } else {
          this.islogged = true;
          console.log(user[0]);
          console.log("no");
        }
      });
  }
  ngOnInit(): void {
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription?.unsubscribe();
  }
}
