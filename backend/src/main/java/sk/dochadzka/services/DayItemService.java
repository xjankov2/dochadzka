package sk.dochadzka.services;

import sk.dochadzka.model.DayItem;
import sk.dochadzka.services.dto.DayItemsContainer;

import java.time.LocalDate;

/**
 * Created by jankovicovci on 30.12.2016.
 */
public interface DayItemService {

    DayItemsContainer getDayItems(LocalDate date);

    DayItem saveDayItem(DayItem dayItem);

    DayItemsContainer prefillDayItems(LocalDate date);

}
