package sk.dochadzka.services;

import sk.dochadzka.model.Person;

import java.util.List;

/**
 * Created by jankovicovci on 17.12.2016.
 */
public interface PersonService {

    List<Person> searchPersons();

    Person getPerson(Long id);

    Person savePerson(Person person);

    void deletePerson(Person person);

}
