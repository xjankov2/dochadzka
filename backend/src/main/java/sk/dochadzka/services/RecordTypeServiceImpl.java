package sk.dochadzka.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import sk.dochadzka.model.RecordType;
import sk.dochadzka.services.repository.RecordTypeRepository;

import java.util.List;

/**
 * Created by jankovicovci on 30.12.2016.
 */
@Component
@Transactional
public class RecordTypeServiceImpl implements RecordTypeService {

    @Autowired
    private RecordTypeRepository recordTypeRepository;

    @Override
    public List<RecordType> searchRecordTypes() {
        return recordTypeRepository.findAll();
    }

    @Override
    public RecordType getRecordType(String code) {
        return recordTypeRepository.findOne(code);
    }
}
