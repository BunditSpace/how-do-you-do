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

  selectedConversation: Observable<Conversation>;

  ngOnInit(){
      this.loadConversations();
      console.log('init '+this.conversations);
  }

  constructor(private conversationService: ConversationService) 
  {

  }

  loadConversations()
  {
     this.conversationService.loadConversations()
          .subscribe(conversation => this.conversations = conversation
                     ,error => this.errorMessage = <any>error);
                      console.log('loadddd '+this.conversations);
  }

  selectConversation(conversation: Conversation) {

  }

  deleteConversation(conversation: Conversation) {
    this.conversationService.deleteConversation(conversation);
  }

  resetConversation() {
    let emptyConversation: Conversation = {
      _id: null,
      creator: '',
      date: '',
      talkwith: '',
      relationship: '',
      topic: '',
      question: '',
      answer: '',
      conversationtype: '',
      rating: null,
      feeling: null
    };

  }

  saveConversation(conversation: Conversation) {
    this.conversationService.saveConversation(conversation);
    this.resetConversation();
  }
}
