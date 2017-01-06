package sk.dochadzka.services.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import sk.dochadzka.model.DayItem;
import sk.dochadzka.services.DayItemService;

import javax.ws.rs.*;
import javax.ws.rs.core.Response;
import java.math.BigDecimal;
import java.time.LocalDate;

/**
 * Created by jankovicovci on 30.12.2016.
 */
@Component
@Path("/dayItem")
public class DayItemResource {

    @Autowired
    private DayItemService dayItemService;

    @GET
    @Produces("application/json")
    public Response getAllDayItems() {
        return Response.ok().entity(dayItemService.getAllDayItems()).build();
    }

    @GET
    @Path("/{month}/{year}")
    @Produces("application/json")
    public Response searchDayItems(@PathParam("month") BigDecimal month, @PathParam("year") BigDecimal year) {
        if (month == null || year == null) {
            return Response.status(Response.Status.BAD_REQUEST).build();
        }
        return Response.ok().entity(dayItemService.getDayItems(month.intValue(), year.intValue())).build();
    }

    @PUT
    @Consumes("application/json")
    @Produces("application/json")
    public Response saveDayItem(DayItem dayItem) {
        return Response.ok().entity(dayItemService.saveDayItem(dayItem)).build();
    }

    @PUT
    @Path("/{month}/{year}/refill")
    @Produces("application/json")
    public Response refill(@PathParam("month") BigDecimal month, @PathParam("year") BigDecimal year) {
        if (month == null || year == null) {
            return Response.status(Response.Status.BAD_REQUEST).build();
        }
        LocalDate localDate = LocalDate.of(year.intValue(), month.intValue(), 1);
        return Response.ok().entity(dayItemService.prefillDayItems(localDate)).build();
    }

}
