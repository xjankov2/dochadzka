package sk.dochadzka.services.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sk.dochadzka.model.Person;
import sk.dochadzka.model.RecordType;

/**
 * Created by jankovicovci on 29.12.2016.
 */
@Repository
public interface RecordTypeRepository extends JpaRepository<RecordType, String> {
}
