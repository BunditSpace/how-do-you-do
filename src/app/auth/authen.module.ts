import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { LoggedInGuard } from './services/loggedin.guard';
import { ConfigService } from './../shared/services/config.service';
import { AuthenticationService } from './services/authentication.service';
import { AuthenRoutingModule } from "./authen-routing.module";
import { LogoutComponent } from "./logout.component";

@NgModule({
  imports: [
    AuthenRoutingModule,
    HttpModule
  ],
  declarations: [ LogoutComponent ],
  providers: [AuthenticationService, LoggedInGuard, ConfigService]
})
export class AuthenModule { }
