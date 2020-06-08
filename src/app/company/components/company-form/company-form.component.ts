import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SaveCompanyModel, Company } from '../../models';


@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent implements OnInit {
  rfCompany: FormGroup;
  @Input() butonOperation: string;
  @Input() company: Company;

  @Output() save = new EventEmitter();

  constructor(private router: Router, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    if (!this.company) {
      this.company = new SaveCompanyModel();
    }
    this.rfCompany = this.fb.group({
      no: ['', Validators.required],
      name: ['', Validators.required],
      established: ['', Validators.required],
      email: [''],
      website: [''],
      address: [''],
      companyPhoneNumbers: this.fb.array([
        this.fb.control(''),
      ])
    });
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
    this.companyPhoneNumbers.push(new FormControl());
  }

  removeTel(index: number) {
    this.companyPhoneNumbers.removeAt(index);
  }
}
