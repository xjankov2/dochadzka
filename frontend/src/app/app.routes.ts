import { Routes } from '@angular/router';
import { AttendanceComponent } from './attendance/attendance.component';
import {PersonResolver} from "./shared/resolver/person.resolver";

export const appRoutes: Routes = [
  { path: 'attendance', component: AttendanceComponent, resolve: {persons:PersonResolver}},
  { path: '', pathMatch: 'full', redirectTo: 'attendance' },
  { path: '**', pathMatch: 'full', redirectTo: 'attendance' }
];
