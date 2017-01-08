import {Pipe, PipeTransform} from "@angular/core";
import {RecordType} from "../../rest/model/RecordType";
import {DayItem} from "../../rest/model/DayItem";

@Pipe({name: 'excludeExisting'})
export class RecordTypeExcludeExistingPipe implements PipeTransform {
  transform(recordTypes:Array<RecordType>, existing:DayItem): Array<RecordType> {
    if (!recordTypes) return [];

    return recordTypes
      .filter(recordType => !existing || existing.recordSet.find(existing => existing.type.code == recordType.code) == null);
  }
}
