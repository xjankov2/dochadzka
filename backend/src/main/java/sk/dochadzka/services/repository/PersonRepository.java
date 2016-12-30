package sk.dochadzka.services.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sk.dochadzka.model.Person;

/**
 * Created by jankovicovci on 18.12.2016.
 */
@Repository
public interface PersonRepository extends JpaRepository<Person, Long> {
}
