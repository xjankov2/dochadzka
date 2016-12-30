import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./layout/header/header.component";
import {MenuComponent} from "./layout/menu/menu.component";
import {AttendanceComponent} from "./attendance/attendance.component";
import {AttendanceTableComponent} from "./attendance/attendance.table.component";
import {AttendanceTableItemComponent} from "./attendance/attendance.table.item.component";
import {ModalModule} from "ng2-modal";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    AttendanceComponent,
    AttendanceTableComponent,
    AttendanceTableItemComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
