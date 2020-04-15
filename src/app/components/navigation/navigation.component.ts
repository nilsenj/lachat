import {AfterViewInit, Component, Inject, Input, OnInit} from '@angular/core';
import {User} from "../../models/User";
import {AuthenticationService} from "../../services/authentication.service";
import {app} from "../../../config/app";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {
    @Input() userChange: any;
    @Input() user: User[] = [];
    authenticated: boolean = false;
    app = {};

  public authService;

  constructor(authService: AuthenticationService) {
    this.authService = authService;
  }

  ngOnInit() {
    this.app = app;
    this.getUser();
    this.userChange.subscribe(data => {
      if (data) {
        this.user = data.user;
        console.log(this.user);
        this.authenticated = true;
      } else {
        this.user = null;
        this.authenticated = false;
      }
    });
    this.authService.userNeedsChange.subscribe(data => {
      console.log('userNeedsChange');
      this.getUser();
    });
  }

  getUser() {
    // get users from secure api end point
    if (this.authService.token) {
      this.user = this.authService.getUser();
      this.authenticated = true;

    } else {
      this.authenticated = false;
    }
  }

}
