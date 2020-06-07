import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: [ './default-layout.component.scss' ]
})
export class DefaultLayoutComponent implements OnInit {

  statusSideNav = true;

  getStatusSideNav(status) {
    this.statusSideNav = status;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
