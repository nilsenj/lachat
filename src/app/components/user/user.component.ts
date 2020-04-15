import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {User} from "../../models/User";
import {AuthenticationService} from "../../services/authentication.service";
import {ProfileService} from "../../services/profile.service";
import {Profile} from "../../models/Profile";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit, OnChanges {
  public user: User;
  public profile: Profile;
  public editing = false;
  @Input() entity: any;

  @Input() set field(entityField: string) {

    this.entityField = entityField;
    this.setOriginValue();
  }

  @Input() className: string;
  @Input() style: any;
  @Output() entityUpdated = new EventEmitter();

  isActiveInput = false;

  public entityField: string;

  public originEntityValue: any;

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

  ngOnChanges() {
    this.setOriginValue();
    this.isActiveInput = false;
  }

  updateEntity() {
    const entityValue = this.entity[this.entityField];

    if (entityValue !== this.originEntityValue) {
      this.entityUpdated.emit({[this.entityField]: this.entity[this.entityField]});
      this.setOriginValue();
    }

    this.isActiveInput = false;
  }

  cancelUpdate() {
    this.isActiveInput = false;
    this.entity[this.entityField] = this.originEntityValue;
  }

  setOriginValue() {
    this.originEntityValue = this.entity[this.entityField];
  }

  handleImageUpload(imageUrl: string) {
    if (this.entityField) {
      this.entity[this.entityField] = imageUrl;
    }
    // this.updateEntity();
  }


  handleImageError() {
    this.cancelUpdate();
  }

  handleImageLoad() {
    this.isActiveInput = true;
  }

  editProfile() {
    this.editing = true;
  }

  cancel() {
    this.editing = false;
  }

  updated(event: { user: User }) {
    this.profile = event.user.profile;
    this.user = event.user;
    this.editing = false;
    console.log("hello");
    this.authService.userNeedsChange.emit(true);
  }

}
