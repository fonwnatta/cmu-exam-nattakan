import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "nextProcess"
})
export class NextProcessPipe implements PipeTransform {
  transform(value: any): any {
    let transformedValue = value;
    switch (value) {
      case "readJson":
        transformedValue = "getCpfFile";
        break;
      case "getCpfFile":
        transformedValue = "retrieveGerald";
        break;
      case "retrieveGerald":
        transformedValue = "retrieveExtraction";
        break;
      case "retrieveExtraction":
        transformedValue = "prepareBuildingProduct";
        break;
      case "prepareBuildingProduct":
        transformedValue = "callProcessingSystem";
        break;
      case "callProcessingSystem":
        transformedValue = "clearServerPath";
        break;
      case "clearServerPath":
        transformedValue = "qualityProduct";
        break;
        case "qualityProduct":
        transformedValue = "finish";
        break;
      default:
    }
    return transformedValue;
  }
}
