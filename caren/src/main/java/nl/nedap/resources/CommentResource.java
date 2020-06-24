package nl.nedap.resources;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.POST;
import javax.ws.rs.PATCH;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import model.Comment;
import nl.nedap.utility.DatabaseManager;
import nl.nedap.utility.ForeignCharactersChecker;

@Path("comment/{id}")
public class CommentResource {
	@POST
	@Consumes({MediaType.APPLICATION_JSON})
	public void addComment(@Context HttpServletRequest request, @PathParam("id") int recordid, Comment comment) {
		//comment: {rid, visibility, text, date_added, parentid}.
		
		if (request.getSession().getAttribute("pid") == null) {
			return;
		}
		
		int pid;
		try {
			pid = (int)request.getSession().getAttribute("pid");
		} catch(Exception e) {
			return;
		}
		
		String q = "SELECT caren.makecomment(?, ?, ?, ?, ?, ?)";
		
		if (ForeignCharactersChecker.basicHasForeignCharacters(""+comment.getRid()) || ForeignCharactersChecker.basicHasForeignCharacters(""+pid)
				|| ForeignCharactersChecker.basicHasForeignCharacters(comment.getVisibility()) || ForeignCharactersChecker.basicHasForeignCharacters(comment.getText())
				|| ForeignCharactersChecker.basicHasForeignCharacters(comment.getDate_added()) || ForeignCharactersChecker.basicHasForeignCharacters(""+comment.getParentid()))
		{
			return;
		}
		
		DatabaseManager.updateQuery(q, ""+comment.getRid(), ""+pid, comment.getVisibility(), comment.getText(), comment.getDate_added(), ""+comment.getParentid());
	}
	
	@PATCH
	public void seenComment(@Context HttpServletRequest request, @PathParam("id") int cid) {
		if (request.getSession().getAttribute("pid") == null) {
			return;
		}
		int aid = (int)request.getSession().getAttribute("aid");
		int pid = (int)request.getSession().getAttribute("pid");
		
		String q = "SELECT caren.seencomment(?);";
		
		DatabaseManager.updateQuery(q, ""+cid);
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
