import { RatingComponent } from './../shared/rating.component';
import {Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  OnInit
} from '@angular/core';

import {Observable} from 'rxjs/Observable';

import { ConversationService } from './services/conversation.service';
import { Conversation } from './conversation';


@Component({
  selector: 'conversation-list',
  templateUrl: './conversation-list.html'
})
export class ConversationList implements OnInit{
  ngOnInit(): void {
    //let con : Conversation = { topic:'', question:'', talkwith: '', _id : '123', answer : 'asasasasa', conversationtype :'aaaa', creator : 'sdd',  date: '2017-01-01', feeling : 'asas', rating:1, relationship : 'goo'};
    //this.conversations = [con,con,con,con];
    console.log('on intit list'+this.conversations);
  }

  // The `recipe` component hands off `recipes` and `selectedrecipe`
  // via property bindings to its child components
  // Here we pick up the `recipes` collection by annotating our local
  // `recipes` property with `@Input()`
   @Input() conversations: Conversation[];
  // Two event outputs for when a recipe is selected or deleted
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
  //conversations : Conversation[];

  constructor() 
  {

  }

  // InitData(converstions : any[])
  // {
  //   this.conversations = converstions;
  //   console.log(this.conversations);
  // }


  public selecteditem: Conversation;

  showModal(item:Conversation, dangerModal:any) {
    this.selecteditem = item;
    dangerModal.show();
  }
}
