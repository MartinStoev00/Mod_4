package nl.nedap.resources;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

@Path("verify")
public class VerifyMessagePage {
	
		@GET
		@Produces({MediaType.TEXT_PLAIN})
		public String getTrail(@Context HttpServletRequest request) {
			return "please check your email for a verification link to verify your account";
	
		}

	}
