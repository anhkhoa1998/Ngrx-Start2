import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { UsersComponent } from './users/users.component';
import { CoreModule } from './core';
import { LayoutModule } from './layout/layout.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    AuthModule,
    CoreModule,
    LayoutModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
