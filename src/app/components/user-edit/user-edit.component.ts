import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {User} from "../../models/User";
import {AuthenticationService} from "../../services/authentication.service";
import {ProfileService} from "../../services/profile.service";
import {Profile} from "../../models/Profile";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit-user',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})

export class UserEditComponent implements OnInit {
  @Input() profile: Profile;
  @Input() user: User;
  newProfile: Profile;
  public profileForm: FormGroup;

  constructor(private authService: AuthenticationService, private profileService: ProfileService) {
    this.authService = authService;
  }

  ngOnInit() {
    this.profileForm = this.createFormGroup();
    this.profileForm.setValue({
      links: {
        website: this.profile.links.website,
        workprofile: this.profile.links.workprofile
      },
      trend1: this.profile.trend1,
      trend2: this.profile.trend2,
      trend3: this.profile.trend3,
      description: this.profile.description,
      experience: this.profile.experience,
      position: this.profile.position,
      hour_rate: this.profile.hour_rate,
    });
  }

  createFormGroup() {
    return new FormGroup({
      links: new FormGroup({
        website: new FormControl(),
        workprofile: new FormControl()
      }),
      trend1: new FormControl(),
      trend2: new FormControl(),
      trend3: new FormControl(),
      description: new FormControl(),
      experience: new FormControl(),
      position: new FormControl(),
      hour_rate: new FormControl(),
    });
  }

  updateProfile(profile: Profile) {
    this.profileService.updateProfile(profile).subscribe((prof: Profile) => {
      this.profile = prof;
      this.profile.experience = Number(this.profile.experience).toFixed(0);
    });
  }

  onSubmit() {
    // Make sure to create a deep copy of the form-model
    const result: Profile = Object.assign({}, this.profileForm.value);
    // Do useful stuff with the gathered data
    console.log(result);
  }

  revert() {
    // Resets to provided model
    this.profileForm.reset(this.profile);
  }

}
