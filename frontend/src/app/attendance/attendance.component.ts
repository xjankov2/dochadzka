import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Month} from "../shared/enum/Month";
import {DayItem} from "../rest/model/DayItem";
import {Person} from "../rest/model/Person";
import {ActivatedRoute} from "@angular/router";
import {PersonService} from "../shared/service/person.service";
import {DayItemsContainer} from "../rest/model/DayItemsContainer";

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

  constructor(private personService: PersonService, private route:ActivatedRoute) {
    let now:Date = new Date();

    this.selectedMonth = now.getMonth() + 1;
    this.selectedYear = now.getFullYear();
  }

  ngOnInit(): void {
    this.persons = this.route.snapshot.data['persons'];

    this._loadActualDayItems();
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
