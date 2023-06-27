import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '@app/models/user-managment.model';
import { AppConfig } from '@app/shared/app-config';
import { RestService } from '@app/shared/rest-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserManagmentService extends RestService {

  constructor(public override httpClient: HttpClient) {
    super(httpClient);
  }

  getAll() {
    const url = AppConfig.buildBaseUrl("admin/users");
    return this.get(url, {});
  }

  findByLogin(login : string) {
    const url = AppConfig.buildBaseUrl(`admin/users/${login}`);
    return this.get(url, {});
  }

  create(registro: IUser) {
    const url = AppConfig.buildBaseUrl(`admin/users`);
    return this.post(url, {}, registro);
  }

  update(registro: IUser) {
    const url = AppConfig.buildBaseUrl(`admin/users`);
    return this.put(url, {}, registro);
  }

  deleteById(id: number | any) {
    const url = AppConfig.buildBaseUrl(`admin/users/${id}`);
    return this.delete(url, {});
  }

  deleteAllByIds(registros: IUser[]) {
    let ids: any[] = registros.map(s => s.id);
    let params = new HttpParams();
    params = params.append('ids', ids.join(', '));
    const url = AppConfig.buildBaseUrl(`admin/users/deleteByIds`);
    return this.delete(url, { ids });
  }

  authorities(): Observable<string[]> {
    const url = AppConfig.buildBaseUrl(`authorities`);
    return this.get(url, {});
  }

}
