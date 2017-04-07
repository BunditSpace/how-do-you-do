
import { HttpModule } from '@angular/http';
import { AuthenticationService } from './../auth/services/authentication.service';
import { NgModule } from '@angular/core';

import { P404Component } from './404.component';
import { P500Component } from './500.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';

import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule } from '@angular/forms';
import { ConfigService } from './../shared/services/config.service';

@NgModule({
  imports: [ PagesRoutingModule, HttpModule, FormsModule ],
  declarations: [
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent
  ],
  providers:[AuthenticationService, ConfigService]
})
export class PagesModule { }
