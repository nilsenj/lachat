import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from "../../components/login/login.component";
import {RouterModule, Routes} from "@angular/router";
import {RegisterComponent} from "../../components/register/register.component";
import {WelcomeComponent} from "../../components/welcome/welcome.component";
import {AuthGuard} from "../../guards/auth.guard";
import {UserComponent} from "../../components/user/user.component";
import {ChatComponent} from "../../components/chat/chat.component";
import {RedirectIfLoggedInGuard} from "../../guards/redirect-if-logged-in.guard";
import {ThreadComponent} from "../../components/thread/thread.component";
import {CompanyComponent} from "../../components/company/company.component";
import {CompanyBlockComponent} from "../../components/company-block/company-block.component";

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', component: WelcomeComponent, canActivate: [RedirectIfLoggedInGuard]},
  {
    path: 'chat', component: ChatComponent, canActivate: [AuthGuard],
    children: [
      {path: 'company/:id', component: ChatComponent, canActivate: [AuthGuard],
      children: [
        {path: 'threads/:id', component: ThreadComponent, canActivate: [AuthGuard]},
      ]},
    ]
  },
  {path: 'user', component: UserComponent, canActivate: [AuthGuard]},

  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

let base = document.querySelector('#base');
let useHash = false;
if (base) {
  useHash = true;
}

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: useHash})
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRouterModule {
}
