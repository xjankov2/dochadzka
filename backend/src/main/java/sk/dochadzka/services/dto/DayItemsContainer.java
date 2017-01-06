package sk.dochadzka.services.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import sk.dochadzka.model.DayItem;
import sk.dochadzka.model.Person;

import java.util.List;
import java.util.Map;

/**
 * Created by jankovicovci on 30.12.2016.
 */
public class DayItemsContainer {

    private List<DayItemsContainerRow> dayItems;

    public DayItemsContainer() {

    }

    public DayItemsContainer(List<DayItemsContainerRow> dayItems) {
        this.dayItems = dayItems;
    }

    public List<DayItemsContainerRow> getDayItems() {
        return dayItems;
    }

    public void setDayItems(List<DayItemsContainerRow> dayItems) {
        this.dayItems = dayItems;
    }
}

