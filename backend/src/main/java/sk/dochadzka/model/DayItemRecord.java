package sk.dochadzka.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

/**
 * Created by jankovicovci on 21.12.2016.
 */
@Entity
public class DayItemRecord {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private Double hoursCount;

    @Column
    private String otherText;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "DAY_ITEM_ID")
    @JsonIgnore
    private DayItem dayItem;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "TYPE")
    private RecordType type;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Double getHoursCount() {
        return hoursCount;
    }

    public void setHoursCount(Double hoursCount) {
        this.hoursCount = hoursCount;
    }

    public String getOtherText() {
        return otherText;
    }

    public void setOtherText(String otherText) {
        this.otherText = otherText;
    }

    public DayItem getDayItem() {
        return dayItem;
    }

    public void setDayItem(DayItem dayItem) {
        this.dayItem = dayItem;
    }

    public RecordType getType() {
        return type;
    }

    public void setType(RecordType type) {
        this.type = type;
    }
}
