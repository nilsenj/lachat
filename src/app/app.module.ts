import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {AppRouterModule} from "./modules/router/approuter.module";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {AuthGuard} from "./guards/auth.guard";
import {AuthenticationService} from "./services/authentication.service";
import {NavigationComponent} from './components/navigation/navigation.component';
import {UserComponent} from './components/user/user.component';
import {ToastModule, ToastOptions} from "ng2-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrService} from "./services/toastr.service";
import {CustomToastr} from "./support/CustomToastr";
import { ChatComponent } from './components/chat/chat.component';
import { MessageComponent } from './components/message/message.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { ChatSidebarComponent } from './components/chat-sidebar/chat-sidebar.component';
import { ChatContentComponent } from './components/chat-content/chat-content.component';
import {RedirectIfLoggedInGuard} from "./guards/redirect-if-logged-in.guard";
import { CreateMessageComponent } from './components/create-message/create-message.component';

@NgModule({
    declarations: [
        AppComponent,
        RegisterComponent,
        LoginComponent,
        WelcomeComponent,
        NavigationComponent,
        UserComponent,
        ChatComponent,
        MessageComponent,
        UserInfoComponent,
        ChatSidebarComponent,
        ChatContentComponent,
        CreateMessageComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRouterModule,
        BrowserAnimationsModule,
        ToastModule.forRoot()
    ],
    providers: [
        AuthenticationService,
        AuthGuard,
        ToastrService,
        RedirectIfLoggedInGuard,
        {provide: ToastOptions, useClass: CustomToastr},
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
