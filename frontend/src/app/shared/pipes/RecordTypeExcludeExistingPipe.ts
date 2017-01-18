import {Pipe, PipeTransform} from "@angular/core";
import {RecordType} from "../../rest/model/RecordType";
import {DayItem} from "../../rest/model/DayItem";
import {DayItemRecord} from "../../rest/model/DayItemRecord";

@Pipe({name: 'excludeExisting'})
export class RecordTypeExcludeExistingPipe implements PipeTransform {
  transform(recordTypes:Array<RecordType>, existing:DayItem, recordItem:DayItemRecord): Array<RecordType> {
    if (!recordTypes) return [];

    return recordTypes
      .filter(recordType => {
        if (!existing) {
          return true;
        }
        let existingRecordItem:DayItemRecord = existing.recordSet.find(existing => existing.type.code == recordType.code);
        return existingRecordItem == null || existingRecordItem.id == recordItem.id;
      });
  }
}
