import {Component, Input, ViewChild, OnInit, Output} from "@angular/core";
import {DayItem} from "../rest/model/DayItem";
import {Person} from "../rest/model/Person";
import {Month} from "../shared/enum/Month";
import {DayItemRecord} from "../rest/model/DayItemRecord";
import {EnumService} from "../shared/service/enum.service";
import {RecordType} from "../rest/model/RecordType";
import {Modal} from "ng2-modal";
import {DayItemApi} from "../rest/api/DayItemApi";
import {Headers} from "@angular/http";
import {EventEmitter} from "@angular/common/src/facade/async";

@Component({
  selector: 'emp-attendance-table-item',
  templateUrl: './attendance.table.item.component.html',
  styleUrls: ['./attendance.table.item.component.css']
})
export class AttendanceTableItemComponent implements OnInit {

  @Input() dayItem:DayItem;
  @Input() person:Person;

  @Input() day:number;
  @Input() month:Month;
  @Input() yearValue:number;

  @Output() dayItemUpdated = new EventEmitter<DayItem>();

  @ViewChild('dayItemModal') dayItemModal:Modal;

  editedDayItem:DayItem;

  recordItem:DayItemRecord;

  recordItemRecordTypeCode: string;

  recordTypes:Array<RecordType>;

  constructor(private enumService:EnumService, private dayItemApi:DayItemApi) {

  }

  ngOnInit(): void {
    this.recordItem = {};
    this.enumService.getRecordTypes().subscribe(response => {
      this.recordTypes = response;
    });
  }

  editDayItem() {
    this.recordItemRecordTypeCode = null;
    this.recordItem = {};
    if (!this.dayItem) {
      this.editedDayItem = this._createNewDayItem();
    } else {
      this.editedDayItem = JSON.parse(JSON.stringify(this.dayItem));
    }
    this.editedDayItem.person = this.person;
    this.dayItemModal.open();
  }

  addRecordItem() {
    this.recordItem.type = this.getRecordTypeByCode(this.recordItemRecordTypeCode);
    if (this.recordItem.id == null) {
      this.editedDayItem.recordSet.push(this.recordItem);
    } else {
      let existingRecordItem:DayItemRecord = this.editedDayItem.recordSet.find(recordItem => recordItem.id == this.recordItem.id);
      let existingRecordItemIndex:number = this.editedDayItem.recordSet.indexOf(existingRecordItem);
      this.editedDayItem.recordSet[existingRecordItemIndex] = this.recordItem;
    }

    this.recordItemRecordTypeCode = null;
    this.recordItem = {};
  }

  removeRecordItem(recordItem:DayItemRecord) {
    this.editedDayItem.recordSet.splice(this.editedDayItem.recordSet.indexOf(recordItem), 1);
  }

  editRecordItem(recordItem:DayItemRecord) {
    this.recordItem = JSON.parse(JSON.stringify(recordItem));
    this.recordItemRecordTypeCode = recordItem.type.code;
  }

  saveDayItem() {
    if (this.recordItemRecordTypeCode &&
        this.editedDayItem.recordSet.filter(dayItemRecord => dayItemRecord.type.code == this.recordItemRecordTypeCode).length == 0) {
      this.addRecordItem();
    }
    this.dayItemApi.defaultHeaders = new Headers({'Content-Type': 'application/json'});
    this.dayItemApi.dayItemPut(this.editedDayItem).subscribe(response => {
      this.close();
      this.dayItemUpdated.emit(response);
    });
  }

  close() {
    this.dayItemModal.close();
  }

  getRecordTypeByCode(recordTypeCode):RecordType {
    if (this.recordTypes) {
      return this.recordTypes.find(recordType => recordType.code === recordTypeCode)
    }
    return null;
  }

  _createNewDayItem():DayItem {
    return {
      day:this.day,
      month:this.month,
      yearValue:this.yearValue,
      recordSet:new Array()
    };
  }

}
