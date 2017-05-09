
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { ConfigService } from './../../shared/services/config.service';
import { User } from "app/pages/model/user";

const HEADER = {
  headers: new Headers({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class RegisterService {

    _baseUrl: string = '';
    constructor(private http: Http, private config: ConfigService) 
    {
        this._baseUrl = config.getApiURI();
    }

    registerUser(user: User) {
        console.log(JSON.stringify(user));
        this.http.post(this._baseUrl + '/api/auth/signup', JSON.stringify(user), HEADER).map(res => <User>res.json()).catch(this.handleError).subscribe(data => console.log(data));
    }

    private handleError(error: any) {
      var applicationError = error.headers.get('Application-Error');
      var serverError = error.json();
      var modelStateErrors: string = '';

      if (!serverError.type) {
          console.log(serverError);
          for (var key in serverError) {
              if (serverError[key])
                  modelStateErrors += serverError[key] + '\n';
          }
      }

      modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;

      return Observable.throw(applicationError || modelStateErrors || 'Server error');
  }
}