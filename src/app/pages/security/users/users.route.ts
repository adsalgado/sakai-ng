import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { IUser } from "@app/models";
import { UserManagmentService } from "@app/services/user-managment.service";
import { Observable, of } from "rxjs";

@Injectable({ providedIn: 'root' })
export class UserManagementResolve implements Resolve<IUser | null> {
  constructor(private service: UserManagmentService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IUser | null> {
    const id = route.params['login'];
    if (id) {
      return this.service.findByLogin(id);
    }
    return of(null);
  }
}
