package sk.dochadzka.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Set;

/**
 * Created by jankovicovci on 17.12.2016.
 */
@Entity
public class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private String firstName;

    @Column
    private String lastName;

    @Column
    private String prefixDegree;

    @Column
    private String suffixDegree;

    @Column
    private BigDecimal vacationCount;

    public Long getId() {

        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPrefixDegree() {
        return prefixDegree;
    }

    public void setPrefixDegree(String prefixDegree) {
        this.prefixDegree = prefixDegree;
    }

    public String getSuffixDegree() {
        return suffixDegree;
    }

    public void setSuffixDegree(String suffixDegree) {
        this.suffixDegree = suffixDegree;
    }

    public BigDecimal getVacationCount() {
        return vacationCount;
    }

    public void setVacationCount(BigDecimal vacationCount) {
        this.vacationCount = vacationCount;
    }

}
