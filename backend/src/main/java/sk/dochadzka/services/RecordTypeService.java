package sk.dochadzka.services;

import sk.dochadzka.model.RecordType;

import java.util.List;

/**
 * Created by jankovicovci on 30.12.2016.
 */
public interface RecordTypeService {

    List<RecordType> searchRecordTypes();

    RecordType getRecordType(String code);

}
