package sk.dochadzka.services.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import sk.dochadzka.model.DayItem;
import sk.dochadzka.services.DayItemService;

import javax.ws.rs.*;
import javax.ws.rs.core.Response;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

/**
 * Created by jankovicovci on 30.12.2016.
 */
@Component
@Path("/dayItem")
public class DayItemResource {

    @Autowired
    private DayItemService dayItemService;

    @GET
    @Path("/{date}")
    @Produces("application/json")
    public Response searchDayItems(@PathParam("date") String date) {
        LocalDate localDate = LocalDate.parse(date, DateTimeFormatter.ofPattern("mm.YYYY"));
        return Response.ok().entity(dayItemService.getDayItems(localDate)).build();
    }

    @PUT
    @Consumes("application/json")
    @Produces("application/json")
    public Response saveDayItem(DayItem dayItem) {
        return Response.ok().entity(dayItemService.saveDayItem(dayItem)).build();
    }

}
