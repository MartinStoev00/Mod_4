package nl.nedap.resources;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

@Path("getrecords")
public class RecordsResource {
	@GET
	@Produces(MediaType.TEXT_PLAIN)
	public String showTime(
	    @Context HttpServletRequest request
	) {
		System.out.println("noooo");
		int aid = (int)request.getAttribute("aid");
		System.out.println(aid);
		
		return "100 records!";
	    // The method body
	}
}
