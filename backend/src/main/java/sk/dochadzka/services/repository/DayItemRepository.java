package sk.dochadzka.services.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sk.dochadzka.model.DayItem;
import sk.dochadzka.model.Person;

import java.time.LocalDate;
import java.util.List;

/**
 * Created by jankovicovci on 30.12.2016.
 */
@Repository
public interface DayItemRepository extends JpaRepository<DayItem, Long> {

    List<DayItem> findByPersonAndDate(Person person, LocalDate date);

}
