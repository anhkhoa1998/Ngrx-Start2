import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthInterceptor } from './interceptors';
import { AuthService } from './services';
import { AuthGuard } from './guards';
import { COMPONENTS } from './components';

@NgModule({
  declarations: [
    COMPONENTS,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthService,
    AuthGuard,
  ]
})
export class AuthModule {
}
