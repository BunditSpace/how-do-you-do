
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot }    from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class LoggedInGuard implements CanActivate {

    constructor(private user: AuthenticationService, private router: Router) {
    }

  canActivate() {
      if(!this.user.isLoggedIn())
      {
            //this.router.navigate(['/charts']);
            console.log(' not loggin');
            this.router.navigate(['/pages/login']);
            return false;
      }
      // else
      // {
      //     this.router.navigate(['/pages/login']);
      // }
    return true;
  }

}