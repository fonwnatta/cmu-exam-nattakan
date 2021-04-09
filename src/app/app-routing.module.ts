
import { SearchResultComponent } from './search-result/search-result.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchInfoPageComponent } from './search-info-page/search-info-page.component';

const appRoutes: Routes = [
  { path: 'result', component: SearchResultComponent },
  { path: 'search', component: SearchInfoPageComponent },
  { path: 'searchResult', component: SearchResultComponent },
  { path: '**', component: SearchInfoPageComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {
}
