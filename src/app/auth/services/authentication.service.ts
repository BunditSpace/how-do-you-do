import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

const HEADER = {
  headers: new Headers({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    login(username: string, password: string) {
        let user = { username: username, password: password };
        return this.http.post('/api/auth/login', JSON.stringify(user), HEADER)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user) {
                // if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

    isLoggedIn(){
        let user = localStorage.getItem('currentUser');
        if(user)
            return true;
        else
            return false;
    }
}