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
		if (request.getSession().getAttribute("aid") != null) {
			int aid = (int)request.getSession().getAttribute("aid");
			return aid + " is logged in";
		} else {
			return "No logins";
		}
	}
}
