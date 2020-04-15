import {Component, EventEmitter, OnInit, Output, ViewContainerRef} from '@angular/core';
import {AuthenticationService} from "./services/authentication.service";
import {ToastrService} from "./services/toastr.service";
import SimpleScrollbar from 'simple-scrollbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user = [];
  authenticated = false;
  @Output() userChange = new EventEmitter();
  public token: any;

  constructor(protected userService: AuthenticationService) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  ngOnInit() {
    // get users from secure api end point
    this.getUser();
    this.userChanged();
    SimpleScrollbar.initAll();
  }

  userChanged(): void {
    this.userService.userChange.subscribe((data) => {
      if (data) {
        this.user = data;
        this.authenticated = true;
        const dataStore = {
          user: this.user,
          authenticated: this.authenticated
        };
        this.userChange.emit(dataStore);
      } else {
        this.user = null;
        this.authenticated = false;
        this.userChange.emit(null);
      }
    });
  }

  // get users from secure api end point
  getUser(): void {
    if (this.userService.token) {
      this.user = this.userService.getUser();
      this.authenticated = true;
      const dataStore = {
        user: this.user,
        authenticated: this.authenticated
      };
      this.userChange.emit(dataStore);
    } else {
      this.authenticated = false;
      this.userChange.emit(null);
    }
  }

}
