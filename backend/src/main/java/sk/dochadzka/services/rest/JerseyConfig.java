package sk.dochadzka.services.rest;

import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.context.annotation.Configuration;

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
    }
}