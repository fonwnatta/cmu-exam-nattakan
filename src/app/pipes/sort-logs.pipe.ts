import { Pipe, PipeTransform, Injectable } from "@angular/core";

@Pipe({
  name: "sortLogs"
})
@Injectable()
export class SortLogsPipe implements PipeTransform {
  transform(value: any, criteria: any, isAscending: boolean): any {
    let transformedValue = value;

    if (value !== null) {
      if (criteria === "id") {
        transformedValue = this.sortById(value, isAscending);
      } else if (criteria === "productName") {
        transformedValue = this.sortProductName(value, isAscending);
      }
      else if (criteria === "satellite") {
        transformedValue = this.sortSatellite(value, isAscending);
      }
      else if (criteria === "firstName") {
        transformedValue = this.sortFirstName(value, isAscending);
      }
      else if (criteria === "inProgress") {
        transformedValue = this.sortById(value, isAscending);
      }
      else if (criteria === "processName") {
        transformedValue = this.sortByProcessName(value, isAscending);
      }
      else if (criteria === "centerViewingDate") {
       transformedValue = this.sortByCenterDate(value, isAscending);
      }
      else if (criteria === "parentSegment.spectralMode") {
       transformedValue = this.sortByCouplingMode(value, isAscending);
      }
    }
    return transformedValue;
  }

  private sortById(array: any, isAscending: boolean) {
    if (isAscending) {
      return array.sort((a, b) => (+a.id < +b.id ? -1 : +a.id > +b.id ? 1 : 0));
    } else {
      return array.sort((a, b) => (+a.id > +b.id ? -1 : +a.id < +b.id ? 1 : 0));
    }
  }

  private sortProductName(array: any, isAscending: boolean) {
    if (isAscending) {
      return array.sort(
        (a, b) =>
          a.productName < b.productName
            ? -1
            : a.productName > b.productName
              ? 1
              : 0
      );
    } else {
      return array.sort(
        (a, b) =>
          a.productName > b.productName
            ? -1
            : a.productName < b.productName
              ? 1
              : 0
      );
    }
  }
  private sortSatellite(array: any, isAscending: boolean) {
    if (isAscending) {
      return array.sort(
        (a, b) =>
          a.satellite < b.satellite
            ? -1
            : a.satellite > b.satellite
              ? 1
              : 0
      );
    } else {
      return array.sort(
        (a, b) =>
          a.satellite > b.satellite
            ? -1
            : a.satellite < b.satellite
              ? 1
              : 0
      );
    }
  }
  private sortFirstName(array: any, isAscending: boolean) {
    if (isAscending) {
      return array.sort(
        (a, b) =>
          a.firstName < b.firstName
            ? -1
            : a.firstName > b.firstName
              ? 1
              : 0
      );
    } else {
      return array.sort(
        (a, b) =>
          a.firstName > b.firstName
            ? -1
            : a.firstName < b.firstName
              ? 1
              : 0
      );
    }
  }

  private sortByProcessName(array: any, isAscending: boolean) {
    if (isAscending) {
      return array.sort(
        (a, b) =>
          a.processName < b.processName
            ? -1
            : a.processName > b.processName
              ? 1
              : 0
      );
    } else {
      return array.sort(
        (a, b) =>
          a.processName > b.processName
            ? -1
            : a.processName < b.processName
              ? 1
              : 0
      );
    }
  }
  //[search-result: centerViwingDate]
  private sortByCenterDate(array: any, isAscending: boolean) {
    if (isAscending) {
      return array.sort(
        (a, b) =>
          a.centerViewingDate < b.centerViewingDate
            ? -1
            : a.centerViewingDate > b.centerViewingDate
              ? 1
              : 0
      );
    } else {
      return array.sort(
        (a, b) =>
          a.centerViewingDate > b.centerViewingDate
            ? -1
            : a.centerViewingDate < b.centerViewingDate
              ? 1
              : 0
      );
    }
  }
  //[search-result: couplingMode]
  private sortByCouplingMode(array: any, isAscending: boolean) {
    if (isAscending) {
      return array.sort(
        (a, b) =>
          a.parentSegment.spectralMode < b.parentSegment.spectralMode
            ? -1
            : a.parentSegment.spectralMode > b.parentSegment.spectralMode
              ? 1
              : 0
      );
    } else {
      return array.sort(
        (a, b) =>
          a.parentSegment.spectralMode > b.parentSegment.spectralMode
            ? -1
            : a.parentSegment.spectralMode < b.parentSegment.spectralMode
              ? 1
              : 0
      );
    }
  }
}
