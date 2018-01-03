import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RedirectIfLoggedInGuard implements CanActivate {

    constructor(private router: Router) {
    }

    canActivate(next: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            this.router.navigateByUrl('/chat');
            return true;
        }
        return true;
    }
}
