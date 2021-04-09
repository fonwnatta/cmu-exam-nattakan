
import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchInfo } from '../entities/search-info';
import { SearchService } from '../services/search-service.service';
import { Router } from '@angular/router';
import { SearchResultsService } from '../services/search-results.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-search-info-page',
  templateUrl: './search-info-page.component.html',
  styleUrls: ['./search-info-page.component.css']
})
export class SearchInfoPageComponent implements OnInit {

  perPage: number;
  pageNumber: number;
  total: number;

  constructor(
    private searchService: SearchService,
    private router: Router,
    private searchResultService: SearchResultsService,

    private readonly location: Location
  ) {}

  ngOnInit() {
    this.perPage = 50;
    this.pageNumber = 0;
    this.total = 1000;
    // this.searchResultService.scenes = null;
  }

  onSearchClicked(criteria: SearchInfo) {
    this.searchService.search(criteria).subscribe((result) => {
      if (result != null) {
        // console.log(result.length);
        this.router.navigate(["/searchResult"], {
          skipLocationChange: true,
        });
      }
    });
  
  }
  openMenu(event, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    event.currentTarget.className += " active";
  }


  onShoppingCartClicked(event) {
    this.router.navigate(["/cart"], { skipLocationChange: true });
  }
}


