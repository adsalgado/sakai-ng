import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEstatus } from '@app/models';
import { AppConfig } from '@app/shared/app-config';
import { RestService } from '@app/shared/rest-service';

@Injectable({
  providedIn: 'root'
})
export class EstatusService extends RestService {

  constructor(public override httpClient: HttpClient) {
    super(httpClient);
  }

  getAll() {
    const url = AppConfig.buildBaseUrl("estatuses");
    return this.get(url, {});
  }

  create(registro: IEstatus) {
    const url = AppConfig.buildBaseUrl(`estatuses`);
    return this.post(url, {}, registro);
  }

  update(registro: IEstatus) {
    const url = AppConfig.buildBaseUrl(`estatuses/${registro.id}`);
    return this.put(url, {}, registro);
  }

  deleteById(id: number | any) {
    const url = AppConfig.buildBaseUrl(`estatuses/${id}`);
    return this.delete(url, {});
  }

  deleteAllByIds(registros: IEstatus[]) {

    let ids: any[] = registros.map(s => s.id);
    let params = new HttpParams();
    params = params.append('ids', ids.join(', '));
    const url = AppConfig.buildBaseUrl(`estatuses/deleteByIds`);
    return this.delete(url, { ids });

  }
  
}
