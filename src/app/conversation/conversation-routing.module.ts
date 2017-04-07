
import { LoggedInGuard } from './../auth/services/loggedin.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Conversations } from './conversation.component';

const routes: Routes = [
  {
    path: '',
    component: Conversations,
    data: {
      title: 'Conversation'
    },
    canActivate:[LoggedInGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConversationRoutingModule {}
