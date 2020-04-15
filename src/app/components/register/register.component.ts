import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";
import {ToastrService} from "ngx-toastr";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    model: any = {
      role: true
    };
    loading = false;
    error = '';

    constructor(private router: Router,
                private authenticationService: AuthenticationService,
                private toastrService: ToastrService) {
    }

    ngOnInit() {
        // reset login status
        if (this.authenticationService.token) {
            this.router.navigate(['/']);
            this.toastrService.warning('You are already registered');
        } else {
            // this.authenticationService.logout();
        }
    }

    register() {
        this.loading = true;
        this.authenticationService.register(
            this.model.name,
            this.model.email,
            this.model.password,
            this.model.confirm,
            this.model.role)
            .subscribe(result => {
                if (result === true) {
                    this.router.navigate(['/']);
                } else {
                    this.error = 'Sorry your account isn\'t created';
                    this.loading = false;
                }
            }, (data) => {
                this.error = 'Sorry your account isn\'t created';
                this.loading = false;
            });
    }
}
