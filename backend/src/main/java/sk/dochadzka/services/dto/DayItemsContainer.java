package sk.dochadzka.services.dto;

import sk.dochadzka.model.DayItem;
import sk.dochadzka.model.Person;

import java.util.List;
import java.util.Map;

/**
 * Created by jankovicovci on 30.12.2016.
 */
public class DayItemsContainer {

    private Map<Person, List<DayItem>> dayItems;

    public DayItemsContainer() {

    }

    public DayItemsContainer(Map<Person, List<DayItem>> dayItems) {
        this.dayItems = dayItems;
    }

    public Map<Person, List<DayItem>> getDayItems() {
        return dayItems;
    }

    public void setDayItems(Map<Person, List<DayItem>> dayItems) {
        this.dayItems = dayItems;
    }
}
