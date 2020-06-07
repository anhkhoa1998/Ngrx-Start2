import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

import { HttpError } from '../../../core/http-error.model';
import { SignIn } from '../../models';
import { AuthService } from '../../services';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: [ './sign-in.component.scss' ]
})
export class SignInComponent implements OnInit {

  user: SignIn;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    if (this.user === undefined) {
      this.user = new SignIn();
    }
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.authService.signIn(this.user).subscribe((res: any) => {
      this.authService.setToken(res.tokenString);

      Swal.fire({
        position: 'top-end',
        title: 'LogIn success!',
        icon: 'success',
        animation: true,
        showConfirmButton: false,
        timer: 900
      });

      this.router.navigate([ '/companies' ]);
    }, (err: HttpError) => {
      Swal.fire({
        title: err.message,
        icon: 'error',
        animation: false,
      });
    });
  }

}
