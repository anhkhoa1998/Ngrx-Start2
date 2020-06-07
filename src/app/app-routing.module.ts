import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultLayoutComponent } from '@app/layout/default-layout/default-layout.component';

import { AuthGuard } from './auth/guards';


const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    canActivate: [ AuthGuard ],
    children: [
      {
        path: 'companies',
        loadChildren: () => import('./company/company.module').then(m => m.CompanyModule),
      },
    ]
  },
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
