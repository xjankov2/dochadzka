package sk.dochadzka.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import sk.dochadzka.model.DayItem;
import sk.dochadzka.model.Person;
import sk.dochadzka.services.dto.DayItemsContainer;
import sk.dochadzka.services.repository.DayItemRepository;
import sk.dochadzka.services.repository.PersonRepository;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by jankovicovci on 30.12.2016.
 */
@Component
@Transactional
public class DayItemServiceImpl implements DayItemService {

    @Autowired
    private DayItemRepository dayItemRepository;

    @Autowired
    private PersonRepository personRepository;

    @Override
    public DayItemsContainer getDayItems(LocalDate date) {
        Map<Person, List<DayItem>> dayItems = new HashMap<>();

        List<Person> allPersons = personRepository.findAll();
        for (Person person : allPersons) {
            List<DayItem> personDayItems = dayItemRepository.findByPersonAndDate(person, date);
            dayItems.put(person, personDayItems);
        }
        return new DayItemsContainer(dayItems);
    }

    @Override
    public DayItem saveDayItem(DayItem dayItem) {
        return dayItemRepository.save(dayItem);
    }

    @Override
    public DayItemsContainer prefillDayItems(LocalDate date) {


        return getDayItems(date);
    }


}
