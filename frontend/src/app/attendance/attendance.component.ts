import {Component} from "@angular/core";
import {Month} from "../shared/enum/Month";
import {DayItem} from "../rest/model/DayItem";
import {Person} from "../rest/model/Person";
import {DayItemRecord} from "../rest/model/DayItemRecord";
import {RecordType} from "../rest/model/RecordType";

@Component({
  selector: 'emp-attendance',
  templateUrl: './attendance.component.html',
})
export class AttendanceComponent {

  selectedMonth:Month;
  selectedYear:number;
  dayItems:Array<DayItem>;
  persons:Array<Person>;

  constructor() {
    let now:Date = new Date();

    this.selectedMonth = now.getMonth() + 1;
    this.selectedYear = now.getFullYear();

    this.persons = this.getPersons();

    let dayItem:DayItem = {};
    dayItem.id = 1;
    dayItem.date = new Date(2016, 12, 0);
    dayItem.person = {id:1, firstName:'Person1'};

    let recordType:RecordType = {code:'WORK',description:'Pritomny',attendType:true,hoursType:true};

    let recordItems:Array<DayItemRecord> = new Array();
    recordItems.push({id:1,hoursCount:8,type:recordType});

    dayItem.recordSet = recordItems;

    this.dayItems = new Array();
    this.dayItems.push(dayItem);
  }

  increaseMonth() {
    if (this.selectedMonth == 12) {
      this.selectedMonth = 1;
      this.increaseYear();
    } else {
      this.selectedMonth++;
    }
  }

  decreaseMonth() {
    if (this.selectedMonth == 1) {
      this.selectedMonth = 12;
      this.decreaseYear();
    } else {
      this.selectedMonth--;
    }
  }

  increaseYear() {
    this.selectedYear++;
  }

  decreaseYear() {
    this.selectedYear--;
  }

  getPersons():Array<Person> {
    let persons:Array<Person> = new Array();
    persons.push(
      {id:1, firstName:'Person1'},
      {id:2, firstName:'Person2'},
      {id:3, firstName:'Person3'},
      {id:4, firstName:'Person4'},
      {id:5, firstName:'Person5'}
    );
    return persons;
  }

}
