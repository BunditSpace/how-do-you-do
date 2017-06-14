
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogoutComponent } from "./logout.component";
import { LoggedInGuard } from './services/loggedin.guard';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'logout'
    },
    children: [
      {
        path: 'logout',
        component: LogoutComponent,
        data: {
          title: 'Conversation'
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
export class AuthenRoutingModule { }
