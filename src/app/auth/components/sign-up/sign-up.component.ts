import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

import { SignUp } from '../../models';
import { AuthService } from '../../services';


@Component({
  selector: 'app-register',
  templateUrl: './sign-up.component.html',
  styleUrls: [ './sign-up.component.scss' ]
})
export class RegisterComponent implements OnInit {

  user: SignUp;
  confirmPassword: string;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    if (this.user === undefined) {
      this.user = new SignUp();
    }
  }

  onSubmit(formAuth: NgForm) {
    if (formAuth.invalid) {
      return;
    }

    this.authService.signUp(this.user).subscribe((res: any) => {
      Swal.fire({
        position: 'top-end',
        title: 'CREATE AN ACCOUNT SUCCESS!',
        icon: 'success',
        animation: true,
        showConfirmButton: false,
        timer: 900
      });

      this.router.navigate([ 'auth/sign-in' ]);
    }, (err) => {
      Swal.fire({
        title: err.message,
        icon: 'error',
        animation: false,
      });
    });
  }
}
