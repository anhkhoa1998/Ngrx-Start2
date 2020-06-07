import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PaginationModule } from '@app/shared';
import { EffectsModule} from '@ngrx/effects';
import { CompanyEffects} from '@app/company/effect/company.effect';

import { CompanyRoutingModule } from './company-routing.module';
import { COMPONENTS } from './components';
import { CompanyService } from './services';
import { StoreModule } from '@ngrx/store';
import { companyReducer } from '@app/company/reducer/company.reducer';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    COMPONENTS,
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    FormsModule,
    PaginationModule,
    StoreModule.forFeature('company', companyReducer),
    EffectsModule.forFeature([CompanyEffects]),
    FontAwesomeModule,
  ],
  providers: [
    CompanyService,
  ]
})
export class CompanyModule {
}
