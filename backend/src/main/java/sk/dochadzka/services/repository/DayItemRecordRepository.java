package sk.dochadzka.services.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sk.dochadzka.model.DayItemRecord;

/**
 * Created by jankovicovci on 6.1.2017.
 */
@Repository
public interface DayItemRecordRepository extends JpaRepository<DayItemRecord, Long> {
}
