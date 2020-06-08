import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { CompanyService } from '../../services';
import { Company, SaveCompanyModel } from '../../models';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  companyId: number;
  infoCompany: SaveCompanyModel;
  company: Company;

  constructor(
    private activateRoute: ActivatedRoute,
    private companyService: CompanyService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.companyId = parseInt(this.activateRoute.snapshot.params.id, 10);
  }

  updateCompany(company: Company) {
    this.companyService.saveCompany(company, company.id).subscribe((res: any) => {
      this.router.navigate(['/companies']);
    });
  }
}
