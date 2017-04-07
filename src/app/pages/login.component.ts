
import { AuthenticationService } from './../auth/services/authentication.service';
import { Router } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  templateUrl: 'login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit{
  model: any = {};
  constructor(
        private authenticationService: AuthenticationService,
        private router: Router
       ) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate(['/charts']);
                    //this.router.navigate([this.returnUrl]);
                    console.log("Log in Success");
                },
                error => {
                    //this.alertService.error(error);
                    console.log("Log in fail");
                });
    }

}
