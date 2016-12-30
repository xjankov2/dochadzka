package sk.dochadzka.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * Created by jankovicovci on 21.12.2016.
 */
@Entity
public class RecordType {

    @Id
    private String code;

    @Column
    private String description;

    @Column
    private boolean hoursType;

    @Column
    private boolean attendType;

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isHoursType() {
        return hoursType;
    }

    public void setHoursType(boolean hoursType) {
        this.hoursType = hoursType;
    }

    public boolean isAttendType() {
        return attendType;
    }

    public void setAttendType(boolean attendType) {
        this.attendType = attendType;
    }
}
