import { Component, OnInit, Output, EventEmitter } from '@angular/core';


enum SubMenu {
  dashboard = 'Dashboard',
  eCommerce = 'E-Commerce',
}

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: [ './side-nav.component.scss' ]
})
export class SideNavComponent implements OnInit {

  @Output() statusSideNav = new EventEmitter();

  subMenu = SubMenu;
  activeSubMenu: SubMenu = null;

  statusToggle = true;
  statusUnToggle = false;
  isCollapse = false;

  constructor() {
  }

  ngOnInit(): void {

  }

  toggleSubMenu(subMenu: SubMenu) {
    if (this.activeSubMenu === subMenu) {
      this.activeSubMenu = null;
    } else {
      this.activeSubMenu = subMenu;
    }
  }

  toggleSideNav() {
    this.statusToggle = !this.statusToggle;
    this.statusSideNav.emit(this.statusToggle);
    this.isCollapse = !this.isCollapse;
  }

}
