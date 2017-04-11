import { AuthenticationService } from './../auth/services/authentication.service';
import {Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy, OnInit
} from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { Conversation } from './conversation';
import { ConversationService } from './services/conversation.service';
import { ConversationDetail } from './conversation-detail.component';
import { ConversationList } from './conversation-list.component';


@Component({
    selector: 'conversation',
    providers: [ConversationService],
    templateUrl: './Conversation.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class Conversations implements OnInit {

  conversations: Conversation[];
  errorMessage: string;

  selectedConversation: Conversation;

  ngOnInit(){
      this.loadConversations();
  }

  constructor(private conversationService: ConversationService, private authService: AuthenticationService) 
  {
      
  }

  loadConversations()
  {
     this.conversationService.loadConversations()
          .subscribe(conversation => this.conversations = conversation
                     ,error => this.errorMessage = <any>error);
  }

  selectConversation(conversation: Conversation) {
    this.selectedConversation = conversation;
  }

  deleteConversation(conversation: Conversation) {
    this.conversationService.deleteConversation(conversation);
  }

  resetConversation() {
    console.log('reset value');
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
    console.log('save value');
    console.log(conversation);
    this.conversationService.saveConversation(conversation);
    this.resetConversation();
  }
}
