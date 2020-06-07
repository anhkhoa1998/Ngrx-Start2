import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { CompanyService } from '../../services';
import { Company, SaveCompanyModel } from '../../models';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: [ './update.component.scss' ]
})
export class UpdateComponent implements OnInit {

  idCompany: number;
  infoCompany: SaveCompanyModel;


  constructor(
    private activateRoute: ActivatedRoute,
    private companyService: CompanyService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.activateRoute.snapshot.params;

    this.activateRoute.params
      .pipe(
        switchMap((params) => this.companyService.getCompanyById(params.id))
      )
      .subscribe((res: any) => {
        this.infoCompany = res;
      });
  }

  updateCompany(company: Company) {
    this.companyService.saveCompany(company, company.id).subscribe((res: any) => {
      this.router.navigate([ '/companies' ]);
    });

  }

}
