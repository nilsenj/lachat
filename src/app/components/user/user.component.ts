import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models/User";
import {AuthenticationService} from "../../services/authentication.service";
import {ProfileService} from "../../services/profile.service";
import {Profile} from "../../models/Profile";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {
  public user = User;
  public profile: Profile;

  constructor(private authService: AuthenticationService, private profileService: ProfileService) {
    this.authService = authService;
  }

  ngOnInit() {
    this.user = this.authService.user;
    this.authService.userChange.subscribe(data => {
      this.user = data;
    });
    this.profileService.getProfile().subscribe((profile: Profile) => {
      this.profile = profile;
      this.profile.experience = Number(this.profile.experience).toFixed(0);
    });
  }

}
