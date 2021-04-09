import {Headers} from '@angular/http';

export interface IAppConfig {
  searchByInputAPI: string;
  
  getHeaders(): Headers;

};
