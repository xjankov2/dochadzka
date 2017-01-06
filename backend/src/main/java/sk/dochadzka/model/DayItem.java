package sk.dochadzka.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

/**
 * Created by jankovicovci on 21.12.2016.
 */
@Entity
public class DayItem {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private Integer day;

    @Column
    private Integer month;

    @Column
    private Integer yearValue;

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "dayItem", cascade = CascadeType.ALL)
    private Set<DayItemRecord> recordSet = new HashSet<>();

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "PERSON_ID")
    private Person person;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getDay() {
        return day;
    }

    public void setDay(Integer day) {
        this.day = day;
    }

    public Integer getMonth() {
        return month;
    }

    public void setMonth(Integer month) {
        this.month = month;
    }

    public Integer getYearValue() {
        return yearValue;
    }

    public void setYearValue(Integer yearValue) {
        this.yearValue = yearValue;
    }

    public Set<DayItemRecord> getRecordSet() {
        return recordSet;
    }

    public void setRecordSet(Set<DayItemRecord> recordSet) {
        this.recordSet = recordSet;
    }

    public Person getPerson() {
        return person;
    }

    public void setPerson(Person person) {
        this.person = person;
    }
}
