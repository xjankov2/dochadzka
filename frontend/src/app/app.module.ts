import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./layout/header/header.component";
import {MenuComponent} from "./layout/menu/menu.component";
import {AttendanceComponent} from "./attendance/attendance.component";
import {AttendanceTableComponent} from "./attendance/attendance.table.component";
import {AttendanceTableItemComponent} from "./attendance/attendance.table.item.component";
import {ModalModule} from "ng2-modal";
import {PersonResolver} from "./shared/resolver/person.resolver";
import {PersonService} from "./shared/service/person.service";
import {PersonApi} from "./rest/api/PersonApi";
import {DayItemApi} from "./rest/api/DayItemApi";
import {EnumService} from "./shared/service/enum.service";
import {RecordTypeApi} from "./rest/api/RecordTypeApi";
import {SelectModule} from "./shared/ng2-select/select.module";
import {SelectComponent} from "./shared/select/select.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    SelectComponent,
    AttendanceComponent,
    AttendanceTableComponent,
    AttendanceTableItemComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    SelectModule,
    FormsModule,
    HttpModule,
    ModalModule
  ],
  providers: [
    PersonApi,
    DayItemApi,
    RecordTypeApi,
    PersonService,
    EnumService,
    PersonResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
