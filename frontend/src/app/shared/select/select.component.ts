import {Component, Input, OnInit, Output, EventEmitter} from "@angular/core";
import {EnumService} from "../service/enum.service";
import {RecordType} from "../../rest/model/RecordType";
import {Observable} from "rxjs";

@Component({
  selector: 'sbb-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.less'],
})
export class SelectComponent implements OnInit {
  @Input() set model(model: RecordType) {
    this.initialValue = model ? [{id: model.code, text: model.description}] : [];
  }
  @Input() readonly: boolean;
  @Output() modelChange = new EventEmitter();
  private initialValue = [];
  private items: Observable<Array<RecordType>>;

  constructor(private enumApi: EnumService) { }

  ngOnInit() {
    this.enumApi.getRecordTypes().subscribe(response => {
      this.items = Observable.of(response);
    });
  }

  public selected(value: any): void {
    this.modelChange.emit({code: value.id, description: value.text});
  }

  public removed(value: any): void {
    this.modelChange.emit(null);
  }

  public typed(value: any): void {
    // this.enumApi.enumNameSearchGet(this.enumName, 50, value).subscribe(data => {
    //   this.items = Observable.from([data.result.map(d => this.getSelectItem(d))]);
    // });
  }

  public refreshValue(value: any): void {
  }

/*
  private getSelectItem(enumItem: EnumerationItem) {
    return {
      id: enumItem.code,
      text: enumItem.description,
    };
  }
*/

}
