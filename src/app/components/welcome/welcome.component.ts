import {Component, OnInit} from '@angular/core';
import {app} from "../../../config/app";

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss']
})

export class WelcomeComponent implements OnInit {
    title = app.app_name;

    constructor() {
    }

    ngOnInit() {
    }

}
