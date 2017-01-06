import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {PersonApi} from "../../rest/api/PersonApi";
import {Person} from "../../rest/model/Person";
import {DayItem} from "../../rest/model/DayItem";
import {Month} from "../enum/Month";
import {DayItemApi} from "../../rest/api/DayItemApi";
import {DayItemsContainer} from "../../rest/model/DayItemsContainer";

@Injectable()
export class PersonService {

  constructor (private personApi: PersonApi, private dayItemApi: DayItemApi) {

  }

  getPersons (): Observable<Person[]> {
    return this.personApi.personGet();
  }

  getDayItems(month:Month, yearValue:number): Observable<DayItemsContainer> {
    return this.dayItemApi.dayItemMonthYearGet(String(month), String(yearValue));
  }

  refillPerson(month:Month, yearValue:number):Observable<DayItemsContainer> {
    return this.dayItemApi.dayItemMonthYearRefillPut(String(month), String(yearValue));
  }

}
