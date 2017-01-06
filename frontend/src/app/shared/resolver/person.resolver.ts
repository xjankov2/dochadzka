import {Injectable} from "@angular/core";
import {Resolve} from "@angular/router";
import {PersonService} from "../service/person.service";
import {Observable} from "rxjs";
import {Person} from "../../rest/model/Person";

@Injectable()
export class PersonResolver implements Resolve<Observable<Person[]>> {

  constructor(private personService: PersonService) {}

  resolve() {
    return this.personService.getPersons();
  }
}
