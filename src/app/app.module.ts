

import { AppConfigService } from './app.config.service';
import { SelectModule } from 'ng2-select';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SearchResultComponent } from './search-result/search-result.component';
import { SearchService } from './services/search-service.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchResultsService } from './services/search-results.service';
import { NgxPaginationModule } from 'ngx-pagination';

import { DropdownModule ,MultiSelectModule,SliderModule,ChipsModule,
    AutoCompleteModule,FileUploadModule,CalendarModule,TreeModule,CheckboxModule} from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ChecklistDirective } from '../../node_modules/ng2-checklist';
import { SortLogsPipe } from './pipes/sort-logs.pipe';

import { Routes, RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { NextProcessPipe } from './pipes/next-process.pipe';
import { SearchInfoPageComponent } from './search-info-page/search-info-page.component';

const appRoutes: Routes = [
  ];


@NgModule({
    declarations: [
        AppComponent,
        SearchResultComponent,
        ChecklistDirective,
        SearchInfoPageComponent,
       
    ],


    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        SelectModule,
        AppRoutingModule,
        FileUploadModule,
        NgbModule.forRoot(),
        NgxPaginationModule,
        DropdownModule,
        MultiSelectModule,
        SliderModule,
        MultiSelectModule,
        ChipsModule,
        AutoCompleteModule,
        TreeModule,
        CheckboxModule,
        BrowserAnimationsModule,
        CalendarModule,
        LeafletModule.forRoot(),
        HttpClientModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        AppConfigService,
        SearchService,
        SearchResultsService,
        SortLogsPipe,
        
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
