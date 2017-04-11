

// # Conversation Service
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
export class ConversationService {

  _baseUrl: string;

  constructor(private http: Http, private config: ConfigService) {
      this._baseUrl = config.getApiURI();
  }

  loadConversations(): Observable<Conversation[]>  {
      return this.http.get(this._baseUrl + '/api/conversation')
           .map(res => <Conversation[]>res.json()).do(data => console.log('All: ' +  JSON.stringify(data))).catch(this.handleError);
  }

  saveConversation(conversation: Conversation) {
      (conversation._id) ? this.updateConversation(conversation) : this.createConversation(conversation);
  }

  createConversation(conversation: Conversation) {
      this.http.post(this._baseUrl + '/api/conversation', JSON.stringify(conversation), HEADER)
          .map(res => <Conversation>res.json()).catch(this.handleError).subscribe(data => console.log(data));
  }

  updateConversation(conversation: Conversation) {
      this.http.put(this._baseUrl + '/api/conversation/'+ `${conversation._id}`, JSON.stringify(conversation), HEADER)
         .map(res => res.json()).catch(this.handleError).subscribe();
  }

  deleteConversation(conversation: Conversation) {
      this.http.delete(this._baseUrl + `/api/conversation/${conversation._id}`)
        .map(res => <Conversation>res.json()).catch(this.handleError).subscribe(data => console.log(data));;
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
