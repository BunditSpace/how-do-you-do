import { AuthenticationService } from './../auth/services/authentication.service';
import {Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy, OnInit, ViewChild
} from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { Conversation } from './conversation';
import { ConversationService } from './services/conversation.service';
import { ConversationDetail } from './conversation-detail.component';
import { ConversationList } from './conversation-list.component';


@Component({
    selector: 'conversation',
    templateUrl: './conversation-display.html'
})

export class ConversationDisplay implements OnInit {

  conversations: Conversation[];
  errorMessage: string;

  selectedConversation: Conversation;
  @ViewChild(ConversationList) conList : ConversationList;

  ngOnInit(){
     
      this.loadConversations();
  }

  constructor(private conversationService: ConversationService, private authService: AuthenticationService) 
  {
      
  }

  public loadConversations()
  {
    setTimeout(() => {this.conversationService.loadConversationsByUser(this.authService.getUserName())
           .subscribe(conversation => {
           this.conversations = conversation;
          } ,error => this.errorMessage = <any>error);});
      
  }

  selectConversation(conversation: Conversation) {
    this.selectedConversation = conversation;
  }

  deleteConversation(conversation: Conversation) {
    this.conversationService.deleteConversation(conversation);
  }

  resetConversation() {
    let emptyConversation: Conversation = {
      _id: null,
      creator: this.authService.getUserName(),
      date: '',
      talkwith: '',
      relationship: '',
      topic: '',
      question: '',
      answer: '',
      conversationtype: '',
      rating: 0,
      feeling: 0
    };
    this.selectedConversation = emptyConversation;
  }

  saveConversation(conversation: Conversation) {
    this.conversationService.saveConversation(conversation);
    this.resetConversation();
  }
}
