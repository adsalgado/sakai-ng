import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICatalogo } from '@app/models/catalogo.model';
import { AppConfig } from '@app/shared/app-config';
import { RestService } from '@app/shared/rest-service';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService extends RestService {

  constructor(public override httpClient: HttpClient) {
    super(httpClient);
  }

  getAll() {
    const url = AppConfig.buildBaseUrl("catalogos");
    return this.get(url, {});
  }

  create(registro: ICatalogo) {
    const url = AppConfig.buildBaseUrl(`catalogos`);
    return this.post(url, {}, registro);
  }

  update(registro: ICatalogo) {
    const url = AppConfig.buildBaseUrl(`catalogos/${registro.id}`);
    return this.put(url, {}, registro);
  }

  deleteById(id: number | any) {
    const url = AppConfig.buildBaseUrl(`catalogos/${id}`);
    return this.delete(url, {});
  }

  deleteAllByIds(registros: ICatalogo[]) {
    let ids: any[] = registros.map(s => s.id);
    let params = new HttpParams();
    params = params.append('ids', ids.join(', '));
    const url = AppConfig.buildBaseUrl(`catalogos/deleteByIds`);
    return this.delete(url, { ids });
  }

}
