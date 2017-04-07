import {Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy} from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Conversation } from './conversation';
import { ConversationService } from './services/conversation.service';
import { ConversationDetail } from './conversation-detail.component';
import { ConversationList } from './conversation-list.component';


@Component({
    selector: 'conversation',
    providers: [],
    templateUrl: './Conversation.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class Conversations {

  conversations: Observable<Array<Conversation>>;

  selectedConversation: Observable<Conversation>;

  constructor(private conversationService: ConversationService) 
  {
    this.conversations = conversationService.conversations;

    // DEBUG
    this.selectedConversation.subscribe(v => console.log(v));

    conversationService.loadConversations();
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
