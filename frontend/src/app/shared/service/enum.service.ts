import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {RecordTypeApi} from '../../rest/api/RecordTypeApi';
import {RecordType} from '../../rest/model/RecordType';

@Injectable()
export class EnumService {

  recordTypes: Array<RecordType>;

  recordTypesObservable: Observable<Array<RecordType>>;

  constructor (private recordTypeApi: RecordTypeApi) {

  }

  getRecordTypes(): Observable<Array<RecordType>> {
    if (this.recordTypes) {
      return Observable.of(this.recordTypes);
    } else if (this.recordTypesObservable) {
      return this.recordTypesObservable;
    } else {
      this.recordTypesObservable = this.recordTypeApi.recordTypeGet()
        .map(response =>  {
          this.recordTypesObservable = null;

          this.recordTypes = response;
          return this.recordTypes;
        })
        .share();
      return this.recordTypesObservable;
    }
  }

}
