package sk.dochadzka.services.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sk.dochadzka.model.DayItem;
import sk.dochadzka.model.Person;

import java.util.List;

/**
 * Created by jankovicovci on 30.12.2016.
 */
@Repository
public interface DayItemRepository extends JpaRepository<DayItem, Long> {

    DayItem findByPersonAndDayAndMonthAndYearValue(Person person, Integer day, Integer month, Integer yearValue);

    List<DayItem> findByPersonAndMonthAndYearValue(Person person, Integer month, Integer yearValue);

}
