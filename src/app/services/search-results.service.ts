// import {SearchInfo} from '../entities/search-info';
import { Injectable } from '@angular/core';
import { Information} from '../entities/information';


@Injectable()
export class SearchResultsService {
  infomation: Array<Information>;
  
  constructor() { }

}
