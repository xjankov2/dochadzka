import {Injectable} from '@angular/core';
import {Person} from '../../rest/model/Person';
import {DayItem} from '../../rest/model/DayItem';

@Injectable()
export class AttendanceService {

  findDayItem(dayItems: Array<DayItem>, person: Person, day: number, month: number, year: number): DayItem {
    if (!dayItems) {
      return null;
    } else {
      return dayItems.find(dayItem => {
        return person.id === dayItem.person.id &&
          dayItem.day === day &&
          dayItem.month === month &&
          dayItem.yearValue === year;
      });
    }
  }

  getWorkedDaysCount(dayItems: Array<DayItem>, person: Person): number {
    if (!dayItems) {
      return 0;
    }

    let workedDays = 0;
    dayItems
      .filter(dayItem => person.id === dayItem.person.id)
      .forEach(dayItem => {
        dayItem.recordSet
          .filter(dayItemRecord => dayItemRecord.type.code === 'PRESENT' || dayItemRecord.type.code === 'COMPENSATORY')
          .forEach(presentDayItemRecord => {
            workedDays ++;
          });
      });
    return workedDays;
  }

  getHolidayCount(dayItems: Array<DayItem>, person: Person): number {
    if (!dayItems) {
      return 0;
    }

    let holidayCount = 0;
    dayItems
      .filter(dayItem => person.id === dayItem.person.id)
      .forEach(dayItem => {
        dayItem.recordSet
          .filter(dayItemRecord => dayItemRecord.type.code === 'VACATION')
          .forEach(presentDayItemRecord => holidayCount ++);
      });
    return holidayCount;
  }


}
