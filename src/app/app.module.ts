import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {AppRouterModule} from "./modules/router/approuter.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthGuard} from "./guards/auth.guard";
import {AuthenticationService} from "./services/authentication.service";
import {NavigationComponent} from './components/navigation/navigation.component';
import {UserComponent} from './components/user/user.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrService} from "./services/toastr.service";
import {ChatComponent} from './components/chat/chat.component';
import {MessageComponent} from './components/message/message.component';
import {UserInfoComponent} from './components/user-info/user-info.component';
import {ChatSidebarComponent} from './components/chat-sidebar/chat-sidebar.component';
import {ChatContentComponent} from './components/chat-content/chat-content.component';
import {RedirectIfLoggedInGuard} from "./guards/redirect-if-logged-in.guard";
import {CreateMessageComponent} from './components/create-message/create-message.component';
import {ThreadsComponent} from './components/threads/threads.component';
import {ThreadService} from "./services/thread.service";
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
import {ProfileService} from "./services/profile.service";
import {ImageUploadService} from "./services/image-upload.service";
import {ImageUploadComponent} from "./components/image-upload/image-upload.component";
import {ImageCropperModule} from "ngx-image-cropper";
import {UserEditComponent} from "./components/user-edit/user-edit.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {JwtInterceptor} from "./helpers/jwt.interceptor";
import {ErrorInterceptor} from "./helpers/error.interceptor";
import {ToastrModule} from "ngx-toastr";
import {Autosize} from "./directives/autosize.directive";
import {TrendsService} from "./services/trends.service";
import {SelectDropDownModule} from "./support/ngx-select-dropdown";

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
    ThreadComponent,
    ChatInnerComponent,
    PipeThreadsPipe,
    ThreadMessagesComponent,
    ThreadMessageInputComponent,
    ControlMessagesComponent,
    BypassSecurityComponent,
    SafePipePipe,
    EmojisComponent,
    ImageUploadComponent,
    UserEditComponent,
    Autosize
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRouterModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    ImageCropperModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    SelectDropDownModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    AuthenticationService,
    ProfileService,
    AuthGuard,
    ToastrService,
    RedirectIfLoggedInGuard,
    ThreadService,
    MessagesService,
    ValidationService,
    ImageUploadService,
    TrendsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
