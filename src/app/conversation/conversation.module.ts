import { ModalModule } from 'ng2-bootstrap/modal';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagesRoutingModule } from './../pages/pages-routing.module';


import { LoggedInGuard } from './../auth/services/loggedin.guard';
import { AuthenticationService } from './../auth/services/authentication.service';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DropdownModule } from 'ng2-bootstrap/dropdown';

import { ConversationDisplay } from './conversation-display.component';
import { ConversationRoutingModule } from './conversation-routing.module';
import { ConversationService } from './services/conversation.service';
import { HttpModule } from "@angular/http";
import { RatingComponent } from './../shared/rating.component';
import { ConversationList } from './conversation-list.component';
import { ConversationDetail } from './conversation-detail.component';
import { ConfigService } from './../shared/services/config.service';
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    ConversationRoutingModule,
    ChartsModule,
    DropdownModule,
    HttpModule, 
    FormsModule, 
    CommonModule ,
    ModalModule.forRoot(),
    ReactiveFormsModule
  ],
  exports: [RatingComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [ ConversationDisplay, ConversationList, ConversationDetail, RatingComponent ],
  providers: [AuthenticationService, LoggedInGuard, ConversationService, ConfigService],
  
})
export class ConversationModule { }
