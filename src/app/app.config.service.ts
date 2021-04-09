import { browser } from 'protractor';

import { IAppConfig } from './i-app-config-interface';

import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class AppConfigService implements IAppConfig {


  searchByInputAPI: string = environment.apiHost  + '/' + environment.searchByInput ;
  // searchResultByInputPage: string= environment.apiHost + '/' + environment.getSearchResultByInputPage;
  
  
  

  getHeaders(): Headers {
    const token = this.getToken();
    let headers: Headers;
    if (token) {
      headers = new Headers({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + token
      });
    } else {
      headers = new Headers({ 'Content-Type': 'application/json' });
    }
    return headers;
  }
  getMultiPartHeaders(): Headers {
    const token = this.getToken();
    let headers: Headers;
    if (token) {
      headers = new Headers({
        'Content-type': 'multipart/form-data',
        'Authorization': 'Bearer ' + token
      });
    } else {
      headers = new Headers({ 'Content-Type': 'multipart/form-data' });
    }
    return headers;
  }
  getToken(): string {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser && currentUser.token;
    return token ? token : "";
  }

}
