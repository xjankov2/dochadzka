import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HolidayApi} from '../../rest/api/HolidayApi';
import {Holiday} from '../../rest/model/Holiday';

@Injectable()
export class HolidayService {

  holidays: Array<Holiday>;

  holidaysObservable: Observable<Array<Holiday>>;

  constructor (private holidayApi: HolidayApi) {

  }

  getHolidays(): Observable<Array<Holiday>> {
    if (this.holidays) {
      return Observable.of(this.holidays);
    } else if (this.holidaysObservable) {
      return this.holidaysObservable;
    } else {
      this.holidaysObservable = this.holidayApi.holidayGet()
        .map(response =>  {
          this.holidaysObservable = null;

          this.holidays = response;
          return this.holidays;
        })
        .share();
      return this.holidaysObservable;
    }
  }

}
