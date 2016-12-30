package sk.dochadzka.services.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import sk.dochadzka.model.Person;
import sk.dochadzka.services.PersonService;
import sk.dochadzka.services.repository.RecordTypeRepository;

import javax.ws.rs.*;
import javax.ws.rs.core.Response;

/**
 * Created by jankovicovci on 17.12.2016.
 */
@Component
@Path("/person")
public class PersonResource {

    @Autowired
    private PersonService personService;

    @GET
    @Produces("application/json")
    public Response searchPersons() {
        return Response.ok().entity(personService.searchPersons()).build();
    }

    @GET
    @Path("/{id}")
    @Produces("application/json")
    public Response getPerson(@PathParam("id") Long id) {
        return Response.ok().entity(personService.getPerson(id)).build();
    }

    @PUT
    @Consumes("application/json")
    @Produces("application/json")
    public Response savePerson(Person person) {
        return Response.ok().entity(personService.savePerson(person)).build();
    }

    @DELETE
    @Consumes("application/json")
    public Response deletePerson(Person person) {
        personService.deletePerson(person);
        return Response.ok().build();
    }

}
