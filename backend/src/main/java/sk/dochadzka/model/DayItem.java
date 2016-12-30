package sk.dochadzka.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.time.LocalDate;
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
    private LocalDate date;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "dayItem")
    private Set<DayItemRecord> recordSet;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "PERSON_ID")
    @JsonIgnore
    private Person person;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
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
