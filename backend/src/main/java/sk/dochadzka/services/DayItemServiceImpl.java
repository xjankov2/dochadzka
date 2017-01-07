package sk.dochadzka.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import sk.dochadzka.model.DayItem;
import sk.dochadzka.model.DayItemRecord;
import sk.dochadzka.model.Person;
import sk.dochadzka.services.dto.DayItemsContainer;
import sk.dochadzka.services.dto.DayItemsContainerRow;
import sk.dochadzka.services.repository.DayItemRecordRepository;
import sk.dochadzka.services.repository.DayItemRepository;
import sk.dochadzka.services.repository.PersonRepository;
import sk.dochadzka.services.repository.RecordTypeRepository;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

/**
 * Created by jankovicovci on 30.12.2016.
 */
@Component
@Transactional
public class DayItemServiceImpl implements DayItemService {

    private final static Logger LOG = LoggerFactory.getLogger(DayItemServiceImpl.class);

    @Autowired
    private DayItemRepository dayItemRepository;

    @Autowired
    private PersonRepository personRepository;

    @Autowired
    private DayItemRecordRepository dayItemRecordRepository;

    @Autowired
    private RecordTypeRepository recordTypeRepository;

    @Autowired
    private HolidayService holidayService;

    @Override
    public List<DayItem> getAllDayItems() {
        return dayItemRepository.findAll();
    }

    @Override
    public DayItemsContainer getDayItems(Integer month, Integer year) {
        List<DayItemsContainerRow> dayItems = new ArrayList<>();

        List<Person> allPersons = personRepository.findAll();
        for (Person person : allPersons) {
            List<DayItem> personDayItems = dayItemRepository.findByPersonAndMonthAndYearValue(person, month, year);

            DayItemsContainerRow row = new DayItemsContainerRow();
            row.setPerson(person);
            row.setDayItems(personDayItems);
            dayItems.add(row);
        }
        return new DayItemsContainer(dayItems);
    }

    @Override
    public DayItem saveDayItem(DayItem dayItem) {
        List<Long> dayItemRecordIds = new ArrayList<>();

        for (DayItemRecord dayItemRecord : dayItem.getRecordSet()) {
            if (dayItemRecord.getId() != null) dayItemRecordIds.add(dayItemRecord.getId());
            dayItemRecord.setDayItem(dayItem);
        }

        if (dayItem.getId() != null) {
            DayItem dayItemFromDB = dayItemRepository.findOne(dayItem.getId());

            Iterator<DayItemRecord> iter = dayItemFromDB.getRecordSet().iterator();
            while (iter.hasNext()) {
                DayItemRecord dayItemRecordFromDB = iter.next();
                if (!dayItemRecordIds.contains(dayItemRecordFromDB.getId())) {
                    dayItemRecordFromDB.setDayItem(null);
                    dayItemRecordRepository.delete(dayItemRecordFromDB);
                }
            }
        }

        return dayItemRepository.save(dayItem);
    }

    @Override
    public void prefillDayItems(LocalDate date) {
        for (int day=1; day<=date.lengthOfMonth();day++) {
            LocalDate dayInEnteredMonthAndYear = LocalDate.of(date.getYear(), date.getMonth(), day);

            LOG.debug("Processing day {}", date);

            if (dayInEnteredMonthAndYear.getDayOfWeek() == DayOfWeek.SATURDAY ||
                dayInEnteredMonthAndYear.getDayOfWeek() == DayOfWeek.SUNDAY) continue;

            if (!holidayService.searchHoliday(day, date.getMonthValue(), date.getYear()).isEmpty()) continue;

            for (Person person : personRepository.findAll()) {
                DayItem existingDate = dayItemRepository.findByPersonAndDayAndMonthAndYearValue(person, day, date.getMonthValue(), date.getYear());

                LOG.debug("Person {} has dayItem in {} : {}", new Object[]{person, dayInEnteredMonthAndYear, existingDate != null});

                if (existingDate != null && !existingDate.getRecordSet().isEmpty()) continue;;

                if (existingDate == null) {
                    existingDate = new DayItem();
                    existingDate.setDay(dayInEnteredMonthAndYear.getDayOfMonth());
                    existingDate.setMonth(dayInEnteredMonthAndYear.getMonthValue());
                    existingDate.setYearValue(dayInEnteredMonthAndYear.getYear());
                    existingDate.setPerson(person);
                }

                DayItemRecord dayItemRecord = new DayItemRecord();
                dayItemRecord.setDayItem(existingDate);
                dayItemRecord.setHoursCount(8d);
                dayItemRecord.setType(recordTypeRepository.findOne("PRESENT"));

                existingDate.getRecordSet().add(dayItemRecord);

                dayItemRepository.save(existingDate);
            }

        }
    }


}
