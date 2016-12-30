import {Component, Input} from "@angular/core";
import {DayItem} from "../rest/model/DayItem";

@Component({
  selector: 'emp-attendance-table-item',
  templateUrl: './attendance.table.item.component.html',
})
export class AttendanceTableItemComponent {

  @Input() dayItem:DayItem;

}
