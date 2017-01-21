import {Component, ViewChild, Input} from "@angular/core";
import {Modal} from "ng2-modal";
import {Person} from "../../rest/model/Person";

@Component({
  selector: 'emp-holiday',
  templateUrl: './holiday.component.html',
})
export class HolidayComponent{

  @Input('persons') persons:Array<Person>;

  @ViewChild('holiday') holiday:Modal;

  person:Person;

  dateFrom:Date;

  dateTo:Date;

  dateFormat:string = "DD.MM.YYYY";

  constructor() {

  }

  open() {
    this.person = null;
    this.holiday.open();
  }

  close() {
    this.holiday.close();
  }

  saveHoliday() {

  }

}
