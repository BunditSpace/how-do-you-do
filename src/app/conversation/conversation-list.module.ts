import { ModalModule } from 'ng2-bootstrap/modal';
import { ConversationList } from './conversation-list.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports :[CommonModule, ModalModule.forRoot()],
    declarations : [ConversationList],
    exports : [ConversationList]
})
export class ConversationListModule{

}