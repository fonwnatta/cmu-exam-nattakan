import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInfoPageComponent } from './search-info-page.component';

describe('SearchInfoPageComponent', () => {
  let component: SearchInfoPageComponent;
  let fixture: ComponentFixture<SearchInfoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchInfoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
