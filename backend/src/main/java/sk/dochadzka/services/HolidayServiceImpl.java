package sk.dochadzka.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import sk.dochadzka.model.Holiday;
import sk.dochadzka.services.repository.HolidayRepository;

import java.util.List;

/**
 * Created by jankovicovci on 7.1.2017.
 */
@Component
@Transactional
public class HolidayServiceImpl implements HolidayService {

    @Autowired
    private HolidayRepository holidayRepository;

    @Override
    public List<Holiday> getAllHolidays() {
        return holidayRepository.findAll();
    }

    @Override
    public List<Holiday> searchHoliday(Integer day, Integer month, Integer year) {
        return holidayRepository.findByDayAndMonthAndYearValue(day, month, year);
    }
}
