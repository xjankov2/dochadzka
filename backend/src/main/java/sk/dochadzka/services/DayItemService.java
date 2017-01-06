package sk.dochadzka.services;

import sk.dochadzka.model.DayItem;
import sk.dochadzka.services.dto.DayItemsContainer;

import java.time.LocalDate;
import java.util.List;

/**
 * Created by jankovicovci on 30.12.2016.
 */
public interface DayItemService {

    List<DayItem> getAllDayItems();

    DayItemsContainer getDayItems(Integer month, Integer year);

    DayItem saveDayItem(DayItem dayItem);

    void prefillDayItems(LocalDate date);

}
