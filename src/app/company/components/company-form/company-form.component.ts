import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { formatDate } from '@angular/common';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SaveCompanyModel, Company } from '../../models';


@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent implements OnInit {
  @Input() buttonOperation: string;
  @Input() company: Company;
  @Output() save = new EventEmitter();

  rfCompany: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.rfCompany = this.fb.group({
      no: ['', Validators.required],
      name: ['', Validators.required],
      established: ['', Validators.required],
      email: [''],
      website: [''],
      address: [''],
      companyPhoneNumbers: this.fb.array([])
    });

    if (!this.company) {
      this.companyPhoneNumbers.push(new FormControl(''));
    } else {
      this.rfCompany.get('no').setValue(this.company.no);
      this.rfCompany.get('name').setValue(this.company.name);
      this.rfCompany.get('established').setValue(formatDate(new Date(this.company.established), 'yyyy-MM-dd', 'en-US'));
      this.rfCompany.get('email').setValue(this.company.email);
      this.rfCompany.get('website').setValue(this.company.website);
      this.rfCompany.get('address').setValue(this.company.address);
      this.company.companyPhoneNumbers.map(
        value => this.companyPhoneNumbers.push(new FormControl(value.phoneNumber))
      );
    }
  }


  onSubmit() {
    this.company = {
      ...this.rfCompany.value,
      companyPhoneNumbers: this.companyPhoneNumbers.controls.map(control => {
        return {
          phoneNumber: control.value,
        };
      })
    };
    this.save.emit(this.company);
  }

  get companyPhoneNumbers(): FormArray {
    return this.rfCompany.get('companyPhoneNumbers') as FormArray;
  }

  addTel() {
    this.companyPhoneNumbers.push(this.fb.control(''));
  }

  removeTel(index: number) {
    this.companyPhoneNumbers.removeAt(index);
  }
}
