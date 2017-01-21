import {Component, OnInit, ViewChild} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Month} from "../shared/enum/Month";
import {DayItem} from "../rest/model/DayItem";
import {Person} from "../rest/model/Person";
import {ActivatedRoute} from "@angular/router";
import {PersonService} from "../shared/service/person.service";
import {DayItemsContainer} from "../rest/model/DayItemsContainer";
import * as json2csv from "json2csv";
import {AttendanceService} from "../shared/service/attendance.service";
import {HolidayComponent} from "./holiday/holiday.component";

@Component({
  selector: 'emp-attendance',
  templateUrl: './attendance.component.html',
  providers: []
})
export class AttendanceComponent implements OnInit {

  selectedMonth:Month;
  selectedYear:number;
  persons:Array<Person>;
  dayItems:Array<DayItem>;

  @ViewChild('holiday') holiday:HolidayComponent;

  constructor(private personService: PersonService, private attendanceService:AttendanceService, private route:ActivatedRoute) {
    let now:Date = new Date();

    this.selectedMonth = now.getMonth() + 1;
    this.selectedYear = now.getFullYear();
  }

  ngOnInit(): void {
    this.personService.getPersons().subscribe(persons => {
      this.persons = persons;
      this._loadActualDayItems();
    });
  }

  increaseMonth() {
    if (this.selectedMonth == 12) {
      this.selectedMonth = 1;
      this.increaseYear();
    } else {
      this.selectedMonth++;
      this._loadActualDayItems();
    }
  }

  decreaseMonth() {
    if (this.selectedMonth == 1) {
      this.selectedMonth = 12;
      this.decreaseYear();
    } else {
      this.selectedMonth--;
      this._loadActualDayItems();
    }
  }

  increaseYear() {
    this.selectedYear++;
    this._loadActualDayItems();
  }

  decreaseYear() {
    this.selectedYear--;
    this._loadActualDayItems();
  }

  prefill() {
    this._parseDayItemsObservable(this.personService.refillPerson(this.selectedMonth, this.selectedYear))
  }

  openHoliday() {
    this.holiday.open();
  }

  exportIntoCsv() {
    let exportData = this._prepareExportData();

    let blob = new Blob([exportData], {type: 'application/csv'});

    let a = window.document.createElement("a");
    a.href = window.URL.createObjectURL(blob);
    a.download = 'export_' + this.selectedMonth + '_' + this.selectedYear + '.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a)
  }

  _prepareExportData() {
    let fieldNames = ['Dátum'];
    this.persons.forEach(person => {
      fieldNames.push(
        person.firstName + ' ' + person.lastName +
          ',Odpracované dní: ' + this.attendanceService.getWorkedDaysCount(this.dayItems, person) +
          ',Dovolenky: ' + this.attendanceService.getHolidayCount(this.dayItems, person));
    });

    let fields = ['date'];
    for (var _i = 0; _i < this.persons.length; _i++) {
      fields.push('data' + _i);
    }

    let data = [];
    let totalDays:number =  new Date(this.selectedYear, this.selectedMonth, 0).getDate();
    for (var dayIndex = 1; dayIndex <= totalDays; dayIndex++) {
      let dataRow:Object = {'date': dayIndex + '.' + this.selectedMonth + '.'};
      for (var personIndex = 0; personIndex < this.persons.length; personIndex++) {
        let person:Person = this.persons[personIndex];
        let dayItem:DayItem = this.attendanceService.findDayItem(this.dayItems, person, dayIndex, this.selectedMonth, this.selectedYear);

        let dayItemValue:string = "";
        if (dayItem && dayItem.recordSet && dayItem.recordSet.length > 0) {
          dayItem.recordSet.forEach(dayItemRecord => {
            dayItemValue += dayItemRecord.type.description;
            if (dayItemRecord.type.hoursType) {
              dayItemValue += '(' + dayItemRecord.hoursCount + ')'
            }
            dayItemValue += ',';
          });
        }
        dataRow['data' + personIndex] = dayItemValue;
      }
      data.push(dataRow);
    }
    return json2csv({ data: data, fields: fields, fieldNames: fieldNames });
  }

  _loadActualDayItems() {
    this._parseDayItemsObservable(this.personService.getDayItems(this.selectedMonth, this.selectedYear));
  }

  _parseDayItemsObservable(dayItemsContainer:Observable<DayItemsContainer>) {
    dayItemsContainer
      .subscribe(response => {
        this.dayItems = new Array();

        for (let dayItemsRow of response.dayItems) {
          for (let dayItem of dayItemsRow.dayItems) {
            dayItem.person = dayItemsRow.person;
            this.dayItems.push(dayItem);
          }
        }
      });
  }

}
