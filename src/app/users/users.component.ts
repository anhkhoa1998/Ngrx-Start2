import { Component, OnInit } from '@angular/core';

import { User } from './user.model';
import { UserService } from './user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: Array<User>;

  constructor(
    private userService: UserService,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.userService.getUsers()
    //   .subscribe((res: any) => {
    //     this.users = res;
    //   });


    // this.activateRoute.params.subscribe((params: any) => {
    //   console.log('pa ', params);
    // })

  }


}
