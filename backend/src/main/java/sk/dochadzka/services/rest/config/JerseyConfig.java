package sk.dochadzka.services.rest.config;

import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.context.annotation.Configuration;
import sk.dochadzka.services.rest.DayItemResource;
import sk.dochadzka.services.rest.HolidayResource;
import sk.dochadzka.services.rest.PersonResource;
import sk.dochadzka.services.rest.RecordTypeResource;

import javax.ws.rs.ApplicationPath;

/**
 * Created by jankovicovci on 17.12.2016.
 */
@Configuration
@ApplicationPath("/api")
public class JerseyConfig extends ResourceConfig {
    public JerseyConfig() {
        register(PersonResource.class);
        register(DayItemResource.class);
        register(RecordTypeResource.class);
        register(HolidayResource.class);
    }
}