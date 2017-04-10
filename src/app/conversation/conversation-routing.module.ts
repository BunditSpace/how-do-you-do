
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
    // ,children: [
    //   {
    //     path: 'con',
    //     component: Conversations,
    //     data: {
    //       title: 'Page 404'
    //     }
    //   }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConversationRoutingModule {}
