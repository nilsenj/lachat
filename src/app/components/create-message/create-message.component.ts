import {Component, OnInit} from '@angular/core';
import {app} from "../../../config/app";

@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.scss']
})
export class CreateMessageComponent implements OnInit {
  public storePath: string;

  constructor() {
    this.storePath = app.api_url + '/api/messages/store';
  }

  ngOnInit() {
  }

}
