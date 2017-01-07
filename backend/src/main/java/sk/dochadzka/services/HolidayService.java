package sk.dochadzka.services;

import sk.dochadzka.model.Holiday;

import java.util.List;

/**
 * Created by jankovicovci on 7.1.2017.
 */
public interface HolidayService {

    List<Holiday> getAllHolidays();

    List<Holiday> searchHoliday(Integer day, Integer month, Integer year);

}
