import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { SaveCompanyModel, Company } from '../../models';


@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: [ './company-form.component.scss' ]
})
export class CompanyFormComponent implements OnInit {

  @Input() butonOperation: string;
  @Input() company: Company;

  @Output() save = new EventEmitter();

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    if (!this.company) {
      this.company = new SaveCompanyModel();
    }
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.router.navigate([ '/companies' ]);
    this.save.emit(this.company);
  }

}
