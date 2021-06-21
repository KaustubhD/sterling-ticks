import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Injectable({
	providedIn: 'root'
})
export class AdminGuard implements CanActivate {

	constructor(private authService: LoginService) {

	}
	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
			return this.authService.loggedIn && this.authService.isAdmin()
	}

}
