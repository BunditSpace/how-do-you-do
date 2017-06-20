import { AuthenticationService } from './../auth/services/authentication.service';

import { Component, Input, Output, EventEmitter, Directive, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ConversationService } from './services/conversation.service';
import { Conversation } from './conversation' 
import { NgForm } from '@angular/forms';

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
  }

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  coversationDetailForm: NgForm;
  @ViewChild('coversationDetailForm') currentForm: NgForm;

  constructor(private authService: AuthenticationService) {

  }
  onUpdateRating(value) {
    this.selectedConversation.rating = value;
  }

  onUpdateFeeling(value){
    this.selectedConversation.feeling = value;
  }

  ngAfterViewChecked() {
    this.formChanged();
  }

  formChanged() {
    if (this.currentForm === this.coversationDetailForm) { return; }
    this.coversationDetailForm = this.currentForm;
    if (this.coversationDetailForm) {
      this.coversationDetailForm.valueChanges
        .subscribe(data => this.onValueChanged(data));
    }
  }

  onValueChanged(data?: any) {
    if (!this.coversationDetailForm) { return; }
    const form = this.coversationDetailForm.form;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  formErrors = {
    'talkwith': '',
    'relationship': '',
    'topic': '',
    'conversationtype': '',
    'question': '',
    'answer': ''
  };

  validationMessages = {
    'talkwith': {
      'required': 'Talkwith is required.'
    },
    'relationship': {
      'required': 'Relationship is required.'
    },
    'topic': {
      'required': 'Topic is required.'
    },
    'conversationtype': {
      'required': 'Conversation Type is required.'
    },
    'question': {
      'required': 'Question is required.'
    },
    'answer': {
      'required': 'Answer is required.'
    }
  };

}
