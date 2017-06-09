import { ConversationChartModel } from './../converstaionChartModel';
import {Http, Headers} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Conversation } from './../conversation';
import { ConfigService } from './../../shared/services/config.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

const HEADER = {
  headers: new Headers({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class ConversationChartService {

  _baseUrl: string;

  constructor(private http: Http, private config: ConfigService) {
      this._baseUrl = config.getApiURI();
  }

  getConversationChartLabel(creator: string): Observable<ConversationChartModel[]> {
      return this.http.get(this._baseUrl + '/api/conversationChart/'+ `${creator}`)
         .map(res => <ConversationChartModel[]>res.json()).catch(this.handleError);
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