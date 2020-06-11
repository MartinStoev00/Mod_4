package nl.nedap.resources;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.xml.bind.JAXBElement;

import model.Comment;

@Path("comment/{recordid}")
public class CommentResource {
	@POST
	@Consumes({MediaType.APPLICATION_JSON})
	public void addComment(@Context HttpServletRequest request, @PathParam("recordid") int recordid, String x) {
		//comment: {rid, visibility, text, date_added, parentid}.
//		System.out.println(commentR.toString());
//		Comment comment = commentR.getValue();
		
		System.out.println(x);
		
		String q = "INSERT INTO comments(rid, pid, visibility, text, date_added)"
				+ "";
	}
}
