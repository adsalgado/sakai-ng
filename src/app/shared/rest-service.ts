import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AppConfig } from './app-config';
import { catchError, Observable, throwError } from 'rxjs';

export interface RestParameter {[param: string]: any | any[];}

export abstract class RestService {

  public url = '';
  public server !: string;
  protected jsonHeaders: HttpHeaders = AppConfig.JSON_HEADER;
  protected csvHeaders: HttpHeaders = AppConfig.CSV_HEADER;
  protected fileHeaders: HttpHeaders = AppConfig.FILE_HEADER;
  protected multipartHeaders: HttpHeaders = AppConfig.MULTIPART_HEADER;
  protected jsonResponseType = 'json';
  protected csvResponseType = 'blob';
  protected multiPartResponseType = {responseType: 'json', observe: 'events', reportProgress: true};

  constructor(protected httpClient: HttpClient) {

  }
  
  get serverUrl() {
    return this.server;
  }

  set serverUrl(serverUrl: string) {
    this.server = serverUrl;
  }

  request(method: string, url: string, headers?: HttpHeaders, responseType?: any, params?: RestParameter, body?: any): any {
    this.url = url;
    return this.httpClient.request(method, url, {
      body: body,
      headers: headers,
      observe: responseType?.observe ?? 'body',
      params: params,
      responseType: responseType?.responseType ?? responseType,
      reportProgress: responseType?.reportProgress,
    })
      .pipe(catchError(this.handleError));
  }

  get(url: string = '', params?: RestParameter): Observable<any> {
    return this.request('GET', url, this.jsonHeaders, this.jsonResponseType, params)
      .pipe(catchError(this.handleError));
  }

  post(url: string = '', params?: RestParameter, body?: any): Observable<any> {
    return this.request('POST', url, this.jsonHeaders, this.jsonResponseType, params, body)
      .pipe(catchError(this.handleError));
  }

  put(url: string = '', params?: RestParameter, body?: any): Observable<any> {
    return this.request('PUT', url, this.jsonHeaders, this.jsonResponseType, params, body)
      .pipe(catchError(this.handleError));
  }

  delete(url: string = '', params?: RestParameter): Observable<any> {
    return this.request('DELETE', url, this.jsonHeaders, this.jsonResponseType, params)
      .pipe(catchError(this.handleError));
  }

  deleteWithBody(url: string = '', params?: RestParameter, body?: any): Observable<any> {
    return this.request('DELETE', url, this.jsonHeaders, this.jsonResponseType, params, body)
      .pipe(catchError(this.handleError));
  }

  getCsv(url: string = '', params?: RestParameter, body?: any): Observable<any> {
    return this.request('GET', url, this.csvHeaders, this.csvResponseType, params, body)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    // Handle the HTTP error here
    return throwError(() => {
      console.warn('Error response', error.status, error);
      return error;
    });
  }

  buildHttpErrorResponse(errorObject: any): HttpErrorResponse {
    return errorObject as HttpErrorResponse;
  }

}
