import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {User} from "../../models/User";
import {AuthenticationService} from "../../services/authentication.service";
import {ProfileService} from "../../services/profile.service";
import {Profile} from "../../models/Profile";
import {FormControl, FormGroup} from "@angular/forms";
import {TrendsService} from "../../services/trends.service";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-edit-user',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})

export class UserEditComponent implements OnInit {
  @Input() profile: Profile;
  @Input() user: User;
  @Output() cancelEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() updatedEvent: EventEmitter<any> = new EventEmitter<any>();
  trends: any;
  public profileForm: FormGroup;

  selectConfig = {
    limitTo: 10,
    displayKey: "name", // if objects array passed which key to be displayed defaults to description
    search: true, // true/false for the search functionlity defaults to false,
    height: 'auto', // height of the list so that if there are more no of items it can show a scroll defaults to auto. With auto height scroll will never appear
    placeholder: 'Вибрати', // text to be displayed when no item is selected defaults to Select,
    moreText: 'більше', // text to be displayed whenmore than one items are selected like Option 1 + 5 more
    noResultsFound: 'Не найдено жодних напрямків!', // text to be displayed when no items are found while searching
    searchPlaceholder: 'Пошук', // label thats displayed in search input,
    searchOnKey: 'name', // key on which search should be performed this will be selective search. if undefined this will be extensive search on all keys
  };

  constructor(private authService: AuthenticationService, private profileService: ProfileService, private trendsService: TrendsService) {
    this.authService = authService;
  }

  ngOnInit() {
    this.profileForm = this.createFormGroup();
    this.trendsService.getTrends().pipe(take(1)).subscribe((trends: any) => {
      this.trends = trends;
    });
    this.setPrifleForm(this.profile);
  }

  private setPrifleForm(profile: Profile) {
    this.profileForm.setValue({
      user: {
        name: this.user.name,
        email: this.user.email,
      },
      links: {
        website: profile.links.website,
        workprofile: profile.links.workprofile
      },
      selectedTrends: profile.selectedTrends,
      description: profile.description,
      experience: profile.experience,
      hour_rate: profile.hour_rate,
    });
  }

  createFormGroup() {
    return new FormGroup({
      links: new FormGroup({
        website: new FormControl(),
        workprofile: new FormControl()
      }),
      user: new FormGroup({
        name: new FormControl(),
        email: new FormControl()
      }),
      selectedTrends: new FormControl(),
      description: new FormControl(),
      experience: new FormControl(),
      hour_rate: new FormControl(),
    });
  }

  updateProfile(profile: Profile) {
    this.profileService.updateProfile(profile).subscribe((data: {user: User}) => {
      this.profile = data.user.profile;
      this.user = data.user;
      this.profile.experience = Number(this.profile.experience).toFixed(0);
      this.updatedEvent.emit(data);
      this.authService.userNeedsChange.emit(data);
    });
  }

  onSubmit() {
    // Make sure to create a deep copy of the form-model
    const result: Profile = Object.assign({}, this.profileForm.value);
    // Do useful stuff with the gathered data
    result.id = this.profile.id;
    result.user_id = this.profile.user_id;
    result.selectedTrends.forEach((item, index, arr) => {
      if (!!item.id) {
        result['trend' + (index + 1)] = item.id;
      }
    });
    this.updateProfile(result);
  }

  cancel() {
    this.cancelEvent.emit(true);
  }
}
