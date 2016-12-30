import {Component, Input} from "@angular/core";
import {Month} from "../shared/enum/Month";
import {DayItem} from "../rest/model/DayItem";
import {Person} from "../rest/model/Person";

@Component({
  selector: 'emp-attendance-table',
  templateUrl: './attendance.table.component.html',
})
export class AttendanceTableComponent {

  days:Array<number>;

  _month:Month;
  _year:number;
  _dayItems:Array<DayItem>;

  @Input() persons:Array<Person>;

  @Input() set month(month: Month) {
    this._month = month;
    this.updateTable();
  }
  @Input() set year(year:number) {
    this._year = year;
    this.updateTable();
  }

  @Input() set dayItems(dayItems:Array<DayItem>) {
    this._dayItems = dayItems;
  }

  updateTable(): void {
    if (this._year && this._month) {
      this.days =  Array(new Date(this._year, this._month, 0).getDate());
    }
  }

  isWeekend(day:Date): boolean {
    // return true;
    return day.getDay() == 6 || day.getDay() == 7;
  }

  findDayItem(person : Person, day:number):DayItem {
    return this._dayItems.find(dayItem => {
      return person.id === dayItem.person.id &&
            dayItem.date.getDate() === day &&
             (dayItem.date.getMonth() + 1) === this._month &&
              dayItem.date.getFullYear() === this._year;
    });
  }

}
