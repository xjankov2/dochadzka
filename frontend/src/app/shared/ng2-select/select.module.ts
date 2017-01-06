import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelect } from './select/ng-select';
import { HighlightPipe } from './select/select-pipes';
import { OffClickDirective } from './select/off-click';

@NgModule({
  imports: [CommonModule],
  declarations: [NgSelect, HighlightPipe, OffClickDirective],
  exports: [NgSelect, HighlightPipe, OffClickDirective]
})
export class SelectModule {
}
