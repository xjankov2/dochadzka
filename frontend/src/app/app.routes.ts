import { Routes } from '@angular/router';
import { AttendanceComponent } from './attendance/attendance.component';

export const appRoutes: Routes = [
  { path: 'attendance', component: AttendanceComponent },
  { path: '', pathMatch: 'full', redirectTo: 'attendance' },
  { path: '**', pathMatch: 'full', redirectTo: 'attendance' }
];
