
import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import { ConversationService } from './services/conversation.service';
import { Conversation } from './conversation' 

import { Rating } from './../shared/rating.component';


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

    // DEBUG
    console.log('this.selectedConversation: ');
    console.log(this.selectedConversation);
  }

  // Allow the user to save/delete a `recipe or cancel the
  // operation. Flow events up from here.
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  constructor() {

  }
  onUpdateRating(value) {

    // Set the value of the selected recipe's rating to the
    // value passed up from the `rating` component
    this.selectedConversation.rating = value;
  }

  onUpdateFeeling(value){
    this.selectedConversation.feeling = value;
  }

}
