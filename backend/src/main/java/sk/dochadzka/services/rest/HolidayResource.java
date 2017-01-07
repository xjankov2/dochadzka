package sk.dochadzka.services.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import sk.dochadzka.model.Holiday;
import sk.dochadzka.services.HolidayService;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;
import java.util.List;

/**
 * Created by jankovicovci on 7.1.2017.
 */
@Component
@Path("/holiday")
public class HolidayResource {

    @Autowired
    private HolidayService holidayService;

    @GET
    @Produces("application/json")
    public Response searchHolidays() {
        List<Holiday> holidays = holidayService.getAllHolidays();
        return Response.ok().entity(holidays).build();
    }

}
