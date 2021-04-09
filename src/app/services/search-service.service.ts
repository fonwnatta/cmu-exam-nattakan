
import { SearchInfo } from '../entities/search-info';
// import { AuthenticationService } from './authentication.service';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Information } from '../entities/information';
import { RequestOptions, Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { AppConfigService } from 'app/app.config.service';


@Injectable()
export class SearchService {
  criteria: SearchInfo;
  constructor(
    private config: AppConfigService,
    private http: Http,
    // private authenticationService: AuthenticationService
  ) {}

  getSearchCriteria(): SearchInfo {
    return this.criteria;
  }

  private getSearchResultPage(api: string, page: number, size: number): Observable<Information[]> {
    const headers = this.config.getMultiPartHeaders();
    const body = new FormData();
    body.append('page', page + '');
    body.append('size', size + '');
    return this.http.post(api, body ).pipe(map(res => res.json()));
  }

  // getResultPage(page: number, size: number): Observable<any> {
  //   return this.getSearchResultPage(this.config.searchResultByInputPage, page, size);
  // }

  search(criteria: SearchInfo): Observable<Information[]> {
    this.criteria = criteria;
    const headers = this.config.getHeaders();
    const options = new RequestOptions({ headers: headers });
    const body = JSON.stringify(criteria);
    console.log(body);
    const api = this.config.searchByInputAPI;
    return this.http.post(api, body, options).pipe(map(res => res.json()));

  }


  // searchByJson(criteriaJson: SearchCriteria): Observable<Scene[]>{
  //   this.criteria = criteriaJson;
  //   const headers = this.config.getHeaders();
  //   const options = new RequestOptions({ headers: headers });
  //   const body = JSON.stringify(criteriaJson);
  //   console.log(body);
  //   const api = this.config.searchByInputAPI;
  //   return this.http.post(api, body, options).pipe(map(res => res.json()));

  // }

  
}
