import { CommonModule } from '@angular/common';
import { RegisterService } from './services/register.service';

import { HttpModule } from '@angular/http';
import { AuthenticationService } from './../auth/services/authentication.service';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { P404Component } from './404.component';
import { P500Component } from './500.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';

import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfigService } from './../shared/services/config.service';

@NgModule({
  imports: [ PagesRoutingModule, HttpModule, FormsModule, CommonModule ,ReactiveFormsModule ],
  declarations: [
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers:[AuthenticationService, ConfigService, RegisterService]
})
export class PagesModule { }
