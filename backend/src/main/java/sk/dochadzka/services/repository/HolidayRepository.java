package sk.dochadzka.services.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sk.dochadzka.model.Holiday;

import java.util.List;

/**
 * Created by jankovicovci on 7.1.2017.
 */
@Repository
public interface HolidayRepository extends JpaRepository<Holiday, Long> {

    List<Holiday> findByDayAndMonthAndYearValue(Integer day, Integer month, Integer yearValue);

}
