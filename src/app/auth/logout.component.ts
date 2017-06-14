import { Router } from '@angular/router';

import { Component } from '@angular/core';
import { AuthenticationService } from "./services/authentication.service";

@Component({
  template: '',
  providers: [AuthenticationService],
})
export class LogoutComponent  {

    constructor(private authService: AuthenticationService, private router: Router)
    {
        this.authService.logout();
        this.router.navigate(['/pages/login']);
    }
}