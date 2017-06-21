import { ConversationSearchComponent } from './conversation-search.component';
import { ConversationChart } from './conversation-chart.component';

import { LoggedInGuard } from './../auth/services/loggedin.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConversationDisplay } from './conversation-display.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Conversation'
    },
    children: [
      {
        path: 'create',
        component: ConversationDisplay,
        data: {
          title: 'Conversation'
        }
      },
      {
        path: 'chart',
        component: ConversationChart,
        data: {
          title: 'Conversation Chart'
        }
      },
      {
        path: 'search',
        component: ConversationSearchComponent,
        data: {
          title: 'Conversation Search'
        }

      }
    ]
    , canActivate:[LoggedInGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConversationRoutingModule {}
