import { AuthenticationService } from './../auth/services/authentication.service';
import { ConversationService } from './services/conversation.service';
import { Component, OnInit, Directive } from '@angular/core';
import { Conversation } from "app/conversation/conversation";

@Component({
  templateUrl: './conversation-search.html'
})
 
export class ConversationSearchComponent implements OnInit  {

   errorMessage: string;

    public data:Array<Conversation> = [];
    public filterQuery = "";
    public sortBy = "date";
    public sortOrder = "desc";

    constructor(private conversationService: ConversationService, private authService: AuthenticationService)
    {
        
    }

    ngOnInit(): void {
        this.conversationService.loadConversationsByUser(this.authService.getUserName())
           .subscribe(conversation =>
            { 
               this.data = conversation;
            }
                      ,error => this.errorMessage = <any>error);
                        console.log("data" + this.data);
    }
}