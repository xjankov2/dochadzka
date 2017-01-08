import {Component, Input, OnInit} from "@angular/core";
import {Month} from "../shared/enum/Month";
import {DayItem} from "../rest/model/DayItem";
import {Person} from "../rest/model/Person";
import {HolidayApi} from "../rest/api/HolidayApi";
import {HolidayService} from "../shared/service/holiday.service";
import {Observable} from "rxjs";

@Component({
  selector: 'emp-attendance-table',
  templateUrl: './attendance.table.component.html',
})
export class AttendanceTableComponent {

  days:Array<number>;

  _month:Month;
  _year:number;

  @Input() dayItems:Array<DayItem>;

  @Input() persons:Array<Person>;

  @Input() set month(month: Month) {
    this._month = month;
    this.updateTable();
  }
  @Input() set yearValue(yearValue:number) {
    this._year = yearValue;
    this.updateTable();
  }

  constructor(private holidayService:HolidayService) {}

  updateTable(): void {
    if (this._year && this._month) {
      this.days =  Array(new Date(this._year, this._month, 0).getDate());
    }
  }

  getWorkedDaysCount(person:Person):number {
    if (!this.dayItems) return 0;

    let workedCount:number = 0;
    this.dayItems
      .filter(dayItem => person.id === dayItem.person.id)
      .forEach(dayItem => {
        dayItem.recordSet
          .filter(dayItemRecord => dayItemRecord.type.code == 'PRESENT' || dayItemRecord.type.code == 'COMPENSATORY')
          .forEach(presentDayItemRecord => workedCount += presentDayItemRecord.hoursCount);
      });
    return workedCount / 8;
  }

  getTableItemClass(person:Person, day:number, month:number, year:number):Observable<Object> {
    return this.holidayService.getHolidays()
      .map(holidays => {
        let weekend:boolean = false;
        let holiday:boolean = false;
        let emptyDayItem:boolean = false;
        let setDayItem:boolean = false;

        let date:Date = new Date();
        date.setFullYear(year, month - 1, day);

        if (holidays.filter(holiday => holiday.day == day && holiday.month == month && holiday.yearValue == year).length > 0) {
          holiday = true;
        } else {
          if (date.getDay() == 6 || date.getDay() == 0) {
            weekend = true;
          } else {
            let dayItem:DayItem = this.findDayItem(person, day);
            if (!dayItem || !dayItem.recordSet || dayItem.recordSet.length == 0) {
              emptyDayItem = true;
            } else {
              setDayItem = true;
            }
          }
        }
        return {
          'empty-day-item': emptyDayItem,
          'bg-success': setDayItem,
          'bg-danger': weekend || holiday,
        }
      });
  }

  findDayItem(person : Person, day:number):DayItem {
    if (!this.dayItems) {
      return null;
    } else {
      return this.dayItems.find(dayItem => {
        return person.id === dayItem.person.id &&
          dayItem.day === day &&
          dayItem.month === this._month &&
          dayItem.yearValue === this._year;
      });

    }
  }

  handleDayItemUpdate(updatedDayItem:DayItem) {
    let filteredDayItem:Array<DayItem> = this.dayItems.filter(dayItem => {
      return dayItem.day == updatedDayItem.day &&
             dayItem.month == updatedDayItem.month &&
             dayItem.yearValue == updatedDayItem.yearValue &&
             dayItem.person.id == updatedDayItem.person.id;
    });
    if (filteredDayItem.length == 0) {
      this.dayItems.push(updatedDayItem);
    } else {
      filteredDayItem.forEach(dayItem => dayItem.recordSet = updatedDayItem.recordSet);
    }
  }

}
