import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';
import {AppComponent} from './app.component';
import {HeaderComponent} from './layout/header/header.component';
import {MenuComponent} from './layout/menu/menu.component';
import {AttendanceComponent} from './attendance/attendance.component';
import {AttendanceTableComponent} from './attendance/table/attendance.table.component';
import {AttendanceTableItemComponent} from './attendance/table/attendance.table.item.component';
import {ModalModule} from 'ng2-modal';
import {PersonService} from './shared/service/person.service';
import {PersonApi} from './rest/api/PersonApi';
import {DayItemApi} from './rest/api/DayItemApi';
import {EnumService} from './shared/service/enum.service';
import {RecordTypeApi} from './rest/api/RecordTypeApi';
import {SelectModule} from './shared/ng2-select/select.module';
import {SelectComponent} from './shared/select/select.component';
import {HolidayApi} from './rest/api/HolidayApi';
import {HolidayService} from './shared/service/holiday.service';
import {AttendanceService} from './shared/service/attendance.service';
import {RecordTypeExcludeExistingPipe} from './shared/pipes/RecordTypeExcludeExistingPipe';
import {HolidayComponent} from './attendance/holiday/holiday.component';
import { DatepickerModule as MaterialDatepickerModule } from 'angular2-material-datepicker';
import {TooltipModule} from 'ngx-tooltip';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BusyModule} from 'angular2-busy';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    SelectComponent,
    AttendanceComponent,
    AttendanceTableComponent,
    AttendanceTableItemComponent,
    HolidayComponent,

    RecordTypeExcludeExistingPipe
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    TooltipModule,
    MaterialDatepickerModule,
    BrowserModule,
    SelectModule,
    FormsModule,
    HttpModule,
    ModalModule,
    BrowserAnimationsModule,
    BusyModule
  ],
  providers: [
    PersonApi,
    DayItemApi,
    RecordTypeApi,
    HolidayApi,
    PersonService,
    AttendanceService,
    EnumService,
    HolidayService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
