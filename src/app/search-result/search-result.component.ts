import { SearchInfo } from "../entities/search-info";
import { SearchService } from "../services/search-service.service";
import { SearchResultsService } from "../services/search-results.service";
import { Component, OnInit, Input, IterableDiffers } from "@angular/core";
import { Router } from "@angular/router";
import { Information } from "../entities/information";

import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";
import { Location } from "@angular/common";
import { Layer } from "leaflet";
import { SortLogsPipe } from "app/pipes/sort-logs.pipe";
import { SceneEnityServiceService } from "app/services/scene-enity-service.service";

@Component({
  selector: "app-search-result",
  templateUrl: "./search-result.component.html",
  styleUrls: ["./search-result.component.css"],
  animations: [
    trigger("criteriaSlideAnimation", [
      state(
        "inactiveCriteria",
        style({
          transform: "translateX(0)"
        })
      ),
      state(
        "activeCriteria",
        style({
          transform: "translateX(-88%)"
        })
      ),
      transition("inactiveCriteria => activeCriteria", animate("500ms")),
      transition("activeCriteria => inactiveCriteria", animate("500ms"))
    ]),
    trigger("searchListSlideAnimation", [
      state(
        "inactiveSearchList",
        style({
          transform: "translateX(0)"
        })
      ),
      state(
        "activeSearchList",
        style({
          transform: "translateX(-104.5%)"
        })
      ),
      transition("inactiveSearchList => activeSearchList", animate("500ms")),
      transition("activeSearchList => inactiveSearchList", animate("500ms"))
    ])
  ]
})
export class SearchResultComponent implements OnInit {
  @Input() layers: Layer[] = [];

  public results: Array<Information> = null;
  private differ: IterableDiffers;


  public isSortedByDate: boolean = false;
  public isSortedByMode: boolean = false;

  production: boolean;
  selectedIds: string[];
  totalItem: number;
  perPage: number;
  criteriaSlideState = "inactiveCriteria";
  searchListSlideState = "inactiveSearchList";
  isCriteriaSlided = false;
  isSearchListSlided = false;

  //  @Output private pageChange = new EventEmitter<number>();
  criteria: SearchInfo;



  constructor(
    private searchResults: SearchResultsService,
    private tempData: SearchService,
    private sceneEntityService: SceneEnityServiceService,
    private router: Router,
    private readonly location: Location,
    private sortLogsPipe: SortLogsPipe,
    private differs: IterableDiffers
  ) {
    this.selectedIds = [];

    // this.results = [this.buildScene(1, '2011/01/01:12:40:10', 40),
    //   this.buildScene(2, '2011/01/01:12:40:10', 0),
    //   this.buildScene(3, '2011/01/01:12:40:10', 100)];
  }

  private splitStringDateTime(date: string): string[] {
    const splitStrings = [];

    const yearText = date.substring(0, 4);
    const monthText = date.substring(4, 6);
    const dateText = date.substring(6, 8);
    // const hoursText = date.substring(8, 10);
    // const minutesText = date.substring(10, 12);
    // const secondsText = date.substring(12, 14);

    splitStrings.push(dateText + "-" + monthText + "-" + yearText);
    // splitStrings.push(hoursText + ":" + minutesText + ":" + secondsText);

    return splitStrings;
  }

  ngOnInit() {
    this.perPage = 10 ;
    this.differ = this.differs;
    this.selectedIds = [];

    this.results = this.sceneEntityService.infomation;
    this.criteria = this.tempData.getSearchCriteria();
    
  }

  toSearch() {
    this.router.navigate(["/search"], { skipLocationChange: true });
  }
}
