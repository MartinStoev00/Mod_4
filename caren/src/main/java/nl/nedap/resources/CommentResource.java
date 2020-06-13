package nl.nedap.resources;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.xml.bind.JAXBElement;

import model.Comment;
import nl.nedap.utility.DatabaseManager;

@Path("comment/{id}")
public class CommentResource {
	@POST
	@Consumes({MediaType.APPLICATION_JSON})
	public void addComment(@Context HttpServletRequest request, @PathParam("id") int recordid, Comment comment) {
		//comment: {rid, visibility, text, date_added, parentid}.
		
		if (request.getSession().getAttribute("pid") == null) {
			return;
		}
		
		int pid = (int)request.getSession().getAttribute("pid");
		
		String q = "INSERT INTO comments(rid, pid, visibility, text, date_added, parentid)" + "\n"
				+ "VALUES(?, ?, ?, ?, ?, ?)";
		
		DatabaseManager.updateQuery(q, ""+comment.getRid(), ""+pid, comment.getVisibility(), comment.getText(), comment.getDate_added(), ""+comment.getParentid());
	}
	
	@DELETE
	public void removeComment(@Context HttpServletRequest request, @PathParam("id") int cid) {

		if (request.getSession().getAttribute("pid") == null) {
			return;
		}
		
		int pid = (int)request.getSession().getAttribute("pid");
		
		String q = "DELETE FROM comments" + "\n"
				+ "WHERE pid = ?" + "\n"
				+ "AND cid = ?";
		
		DatabaseManager.updateQuery(q, ""+pid, ""+cid);
	}
}
