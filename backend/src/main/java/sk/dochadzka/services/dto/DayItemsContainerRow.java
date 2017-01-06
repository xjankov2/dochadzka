package sk.dochadzka.services.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import sk.dochadzka.model.DayItem;
import sk.dochadzka.model.Person;

import java.util.List;

public class DayItemsContainerRow {

    @JsonProperty
    private Person person;

    @JsonProperty
    private List<DayItem> dayItems;

    public Person getPerson() {
        return person;
    }

    public void setPerson(Person person) {
        this.person = person;
    }

    public List<DayItem> getDayItems() {
        return dayItems;
    }

    public void setDayItems(List<DayItem> dayItems) {
        this.dayItems = dayItems;
    }
}
