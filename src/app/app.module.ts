import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {AppRouterModule} from "./modules/router/approuter.module";
import {HttpModule} from "@angular/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthGuard} from "./guards/auth.guard";
import {AuthenticationService} from "./services/authentication.service";
import {NavigationComponent} from './components/navigation/navigation.component';
import {UserComponent} from './components/user/user.component';
import {ToastModule, ToastOptions} from "ng2-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrService} from "./services/toastr.service";
import {CustomToastr} from "./support/CustomToastr";
import {ChatComponent} from './components/chat/chat.component';
import {MessageComponent} from './components/message/message.component';
import {UserInfoComponent} from './components/user-info/user-info.component';
import {ChatSidebarComponent} from './components/chat-sidebar/chat-sidebar.component';
import {ChatContentComponent} from './components/chat-content/chat-content.component';
import {RedirectIfLoggedInGuard} from "./guards/redirect-if-logged-in.guard";
import {CreateMessageComponent} from './components/create-message/create-message.component';
import {ThreadsComponent} from './components/threads/threads.component';
import {CompanyService} from "./services/company.service";
import {ThreadService} from "./services/thread.service";
import {CompanyThreadComponent} from './components/company-thread/company-thread.component';
import {ThreadComponent} from './components/thread/thread.component';
import {ChatInnerComponent} from './components/chat-inner/chat-inner.component';
import {PipeThreadsPipe} from './pipes/pipe-threads.pipe';
import {ThreadMessagesComponent} from './components/thread-messages/thread-messages.component';
import {ThreadMessageInputComponent} from './components/thread-message-input/thread-message-input.component';
import {MessagesService} from "./services/messages.service";
import {ControlMessagesComponent} from './components/control-messages/control-messages.component';
import {ValidationService} from "./services/validation.service";
import {AngularFontAwesomeModule} from "angular-font-awesome";
import {BypassSecurityComponent} from './components/bypass-security/bypass-security.component';
import {SafePipePipe} from './pipes/safe-pipe.pipe';
import {EmojisComponent} from './components/emojis/emojis.component';
import {Autosize} from 'angular2-autosize';
import {ProfileService} from "./services/profile.service";

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
    CreateMessageComponent,
    ThreadsComponent,
    CompanyThreadComponent,
    ThreadComponent,
    ChatInnerComponent,
    PipeThreadsPipe,
    ThreadMessagesComponent,
    ThreadMessageInputComponent,
    ControlMessagesComponent,
    BypassSecurityComponent,
    SafePipePipe,
    EmojisComponent,
    Autosize
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    ToastModule.forRoot()
  ],
  providers: [
    AuthenticationService,
    ProfileService,
    AuthGuard,
    ToastrService,
    RedirectIfLoggedInGuard,
    CompanyService,
    ThreadService,
    MessagesService,
    ValidationService,
    {provide: ToastOptions, useClass: CustomToastr},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
