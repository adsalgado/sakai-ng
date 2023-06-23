import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITipoEstatus } from '@app/models';
import { AppConfig } from '@app/shared/app-config';
import { RestService } from '@app/shared/rest-service';

@Injectable({
  providedIn: 'root'
})
export class TipoEstatusService extends RestService {

  constructor(public override httpClient: HttpClient) {
    super(httpClient);
  }

  getAll() {
    const url = AppConfig.buildBaseUrl("tipo-estatuses");
    return this.get(url, {});
  }

  create(registro: ITipoEstatus) {
    const url = AppConfig.buildBaseUrl(`tipo-estatuses`);
    return this.post(url, {}, registro);
  }

  update(registro: ITipoEstatus) {
    const url = AppConfig.buildBaseUrl(`tipo-estatuses/${registro.id}`);
    return this.put(url, {}, registro);
  }

  deleteById(id: number | any) {
    const url = AppConfig.buildBaseUrl(`tipo-estatuses/${id}`);
    return this.delete(url, {});
  }

  deleteAllByIds(registros: ITipoEstatus[]) {

    let ids: any[] = registros.map(s => s.id);
    let params = new HttpParams();
    params = params.append('ids', ids.join(', '));
    const url = AppConfig.buildBaseUrl(`tipo-estatuses/deleteByIds`);
    return this.delete(url, { ids });

  }
  
}
