package sk.dochadzka.services.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import sk.dochadzka.services.RecordTypeService;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

/**
 * Created by jankovicovci on 30.12.2016.
 */
@Component
@Path("/recordType")
public class RecordTypeResource {

    @Autowired
    private RecordTypeService recordTypeService;

    @GET
    @Produces("application/json")
    public Response searchRecordTypes() {
        return Response.ok().entity(recordTypeService.searchRecordTypes()).build();
    }

    @GET
    @Path("/{id}")
    @Produces("application/json")
    public Response getRecordType(@PathParam("code") String code) {
        return Response.ok().entity(recordTypeService.getRecordType(code)).build();
    }

}
