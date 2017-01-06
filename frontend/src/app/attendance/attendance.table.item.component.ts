import {Component, Input, ViewChild, OnInit} from "@angular/core";
import {DayItem} from "../rest/model/DayItem";
import {Person} from "../rest/model/Person";
import {Month} from "../shared/enum/Month";
import {DayItemRecord} from "../rest/model/DayItemRecord";
import {EnumService} from "../shared/service/enum.service";
import {RecordType} from "../rest/model/RecordType";
import {Modal} from "ng2-modal";
import {DayItemApi} from "../rest/api/DayItemApi";
import {Headers} from "@angular/http";

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

  @ViewChild('dayItemModal') dayItemModal:Modal;

  editedDayItem:DayItem;

  recordItemHours:number;

  recordItemRecordTypeCode: string;

  recordTypes:Array<RecordType>;

  constructor(private enumService:EnumService, private dayItemApi:DayItemApi) {

  }

  ngOnInit(): void {
    this.enumService.getRecordTypes().subscribe(response => {
      this.recordTypes = response;
    });
  }

  editDayItem() {
    this.recordItemRecordTypeCode = null;
    this.recordItemHours = null;
    if (!this.dayItem) {
      this.editedDayItem = this._createNewDayItem();
    } else {
      this.editedDayItem = JSON.parse(JSON.stringify(this.dayItem));
    }
    this.editedDayItem.person = this.person;
    this.dayItemModal.open();
  }

  addRecordItem() {
    let recordItem:DayItemRecord = {
      hoursCount: this.recordItemHours,
      type: this.getRecordTypeByCode(this.recordItemRecordTypeCode),
    };
    this.editedDayItem.recordSet.push(recordItem);
  }

  removeRecordItem(recordItem:DayItemRecord) {
    this.editedDayItem.recordSet.splice(this.editedDayItem.recordSet.indexOf(recordItem), 1);
  }

  saveDayItem() {
    this.dayItemApi.defaultHeaders = new Headers({'Content-Type': 'application/json'});
    this.dayItemApi.dayItemPut(this.editedDayItem).subscribe(response => {
      this.dayItem = response;
      this.close();
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
