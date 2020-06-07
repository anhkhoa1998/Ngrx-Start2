import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit {

  status = false;
  statusItem = false;
  headerIcon = true;
  headerItem = true;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  choseMenu() {
    this.status = !this.status;
  }

  choseItem() {
    this.statusItem = !this.statusItem;
  }

  logOut() {
    Swal.fire({
      text: 'Do you want to log-out right now?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, right now!',
      cancelButtonText: 'No, not now!'
    }).then((result) => {
      if (result.value) {
        localStorage.removeItem('token');
        this.router.navigate([ '/auth/sign-in' ]);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          showConfirmButton: false,
          timer: 900
        });
      } else {
        return;
      }
    });

  }
}

