package nl.nedap.resources;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.xml.bind.JAXBElement;

import model.Comment;

@Path("comments/{recordid}")
public class CommentResource {
	@PUT
	@Consumes({MediaType.APPLICATION_JSON})
	public void addComment(@Context HttpServletRequest request, @PathParam("recordid") int recordid, JAXBElement<Comment> commentR) {
		//comment: {rid, visibility, text, date_added, parentid}.
		Comment comment = commentR.getValue();
		
		String q = "INSERT INTO "
				+ "";
	}
}
