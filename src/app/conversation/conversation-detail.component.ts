import { AuthenticationService } from './../auth/services/authentication.service';

import { Component, Input, Output, EventEmitter, Directive } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import { ConversationService } from './services/conversation.service';
import { Conversation } from './conversation' 

@Component({
    selector: 'conversation-detail',
    templateUrl: './conversation-detail.html'
})

export class ConversationDetail {
  originalTitle: string;
  selectedConversation: Conversation;

  relationships = [{"name" : "Co-Worker" }, {"name" : "Friend" },{"name" : "Brother-Sister" },{"name" : "Other" }]
  conversationtypes = [{"name" : "Work" }, {"name" : "General" },{"name" : "Gossip" },{"name" : "Other" }]

  @Input('conversation') set _conversation(value: Conversation) {

    if (value) this.originalTitle = value.topic;
    this.selectedConversation = Object.assign({}, value);

    this.selectedConversation.creator = this.authService.getUserName();
    this.selectedConversation.date = new Date();
    // DEBUG
    console.log('this.selectedConversation: ');
    console.log(this.selectedConversation);
  }

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  constructor(private authService: AuthenticationService) {

  }
  onUpdateRating(value) {
    this.selectedConversation.rating = value;
  }

  onUpdateFeeling(value){
    this.selectedConversation.feeling = value;
  }

}
