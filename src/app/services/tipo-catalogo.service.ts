import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ITipoCatalogo } from '@app/models';
import { AppConfig } from '@app/shared/app-config';
import { RestService } from '@app/shared/rest-service';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TipoCatalogoService extends RestService implements OnInit {

  constructor(public override httpClient: HttpClient) {
    super(httpClient);
  }

  ngOnInit(): void {
    
  }

  getAll() {
    const url = AppConfig.buildBaseUrl("tipo-catalogos");
    return this.get(url, {});
  }

  create(registro: ITipoCatalogo) {
    const url = AppConfig.buildBaseUrl(`tipo-catalogos`);
    return this.post(url, {}, registro);
  }

  update(registro: ITipoCatalogo) {
//    const url = AppConfig.buildBaseUrl(`tipo-catalogos/${registro.id}`);
    const url = AppConfig.buildBaseUrl(`tipo-catalogos/9999`);
    return this.put(url, {}, registro);
  }

  deleteById(id: number | any) {
    const url = AppConfig.buildBaseUrl(`tipo-catalogos/${id}`);
    return this.delete(url, {});
  }

  deleteAllByIds(registros: ITipoCatalogo[]) {

    let ids: any[] = registros.map(s => s.id);
    let params = new HttpParams();
    params = params.append('ids', ids.join(', '));
    const url = AppConfig.buildBaseUrl(`tipo-catalogos/deleteByIds`);
    return this.delete(url, { ids });

  }
  
}
