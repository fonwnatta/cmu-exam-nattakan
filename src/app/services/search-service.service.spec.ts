import {TestBed, inject} from '@angular/core/testing';
import {SearchService} from './search-service.service';
import {APP_CONFIG, AppConfig} from '../app.config';
import {Http, HttpModule} from '@angular/http';
import {SearchInfo} from '../entities/search-info';
import {ReactiveFormsModule} from '@angular/forms';
import {Information} from '../entities/information';

describe('SearchService', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ReactiveFormsModule, HttpModule],
        providers: [SearchService, {provide: APP_CONFIG, useValue: AppConfig}],
      });
    });

    it('should ...', inject([SearchService], (service: SearchService) => {
      expect(service).toBeTruthy();
    }));

   
  }
);
