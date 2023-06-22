// system wide configuration settings
import {HttpHeaders} from '@angular/common/http';
import { environment } from '@environments/environment';

export class AppConfig {

  private static instance: AppConfig = new AppConfig();
  public static readonly JSON_HEADER =
    new HttpHeaders({'Content-Type': 'application/json', 'Accept': 'application/json', 'Cache-Control': 'no-cache,no-store'});

  public static readonly CSV_HEADER =
    new HttpHeaders({'Content-Type': 'application/json', 'Accept': 'text/tab-separated-values', 'Cache-Control': 'no-cache'});

  public static readonly MULTIPART_HEADER =
    new HttpHeaders({'Has-Multi-Part': 'true', 'Accept': 'application/json', 'Cache-Control': 'no-cache'});


  public static readonly FILE_HEADER =
    new HttpHeaders({'Accept': '*/*', 'Cache-Control': 'no-cache'});

  // ui default
  public static PAGE_ITEM_COUNT = 20;
  public static AUTH = null;
  public appInfo = null;
  public serviceInfo = null;
  public static baseHostUrl = '';
  public static redirectUrl = '/ui/dashboard';

  public static noAccessUrl = '/noAccess';
  public static loginUrl = '/auth/login';
  public static logoutUrl = '/home/content/pdf/houseamp-removal-sro';
  public static landingUrl = '/home/content/pdf/houseamp-removal-sro';
  public static appInfoUrl = '/epic/info';
  public static signupUrl = '/epic/signup';

  public static configApiUrl = '/portal/ui/config';

  public static pageSizeOptions = [5, 10, 20, 50, 100, 200];

  public static getInstance() {
    return AppConfig.instance;
  }

  public getAuth(): any {
    const {userInfo} = JSON.parse(localStorage.getItem("auth")!);
    return userInfo ? userInfo : 0;
  }

  public setAuth(AUTH: any) {
    localStorage.setItem("auth", JSON.stringify(AUTH));
  }

  public getAppInfo(): any {
    if (!this.appInfo) {
      return JSON.parse(localStorage.getItem("appInfo")!);
    }
    return this.appInfo;
  }

  public setAppInfo(appInfo: any) {
    localStorage.setItem("appInfo", JSON.stringify(appInfo));
  }

  public getServiceInfo(): any {
    if (!this.serviceInfo) {
      return JSON.parse(localStorage.getItem('serviceInfo') ?? '');
    }
  }

  public setServiceInfo(serviceInfo: any) {
    localStorage.setItem("serviceInfo", JSON.stringify(serviceInfo));
  }

  public static buildBaseUrl(path: string): string {
    return `${environment.apiUrl}/api/${path}`;
  }

}
