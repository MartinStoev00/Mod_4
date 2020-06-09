package nl.nedap.resources;

import java.net.http.HttpRequest;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import model.Comment;
import nl.nedap.utility.CommentVisibility;
import nl.nedap.utility.DatabaseManager;

@Path("comments/{recordid}")
public class CommentsResource {
	@GET
	@Produces({MediaType.APPLICATION_JSON})
	public List<Comment> getComments(@Context HttpServletRequest request, @PathParam("recordid") int recordid) {
		int aid = (int)request.getAttribute("aid");
		String aidType = (String)request.getAttribute("aidType");
		
		
		//The list of comments to be returned at the end.
		List<Comment> comments = new ArrayList<>();
		
		//The query to get all the comments belonging to a post.
		String query = "SELECT c.cid, c.rid, c.pid, c.visibility, c.date_added, c.text"
				+ "FROM commends c, records r"
				+ "WHERE c.rid = r.rid"
				+ "AND r.rid = ?";
		
		//Resultset.
		ResultSet result = DatabaseManager.ReadQuery(query, ""+recordid);
		
		try {
			while (result.next()) {
				int cid, rid, pid; String visibility, date_added, text;
				cid = result.getInt(1);
				rid = result.getInt(2);
				pid = result.getInt(3);
				visibility = result.getString(4);
				date_added = result.getString(5);
				text = result.getString(6);
				
				boolean addComment = false;
				
				// Handling visibility.
				if (aidType.equals("care_provider") && (visibility == CommentVisibility.PUBLIC || visibility == CommentVisibility.PRIVATE)) {
					if (DatabaseManager.IsClient(aid, pid)) {
						addComment = true;
					}
				} else if (aid == pid) {
					addComment = true;
				} else if (DatabaseManager.IsAssociate(aid, pid) && (visibility == CommentVisibility.PUBLIC)) {
					addComment = true;
				}
				
				if (addComment) {
					Comment comment = new Comment(cid, rid, pid, visibility, date_added, text);
					comments.add(comment);
				}
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return comments;
	}
}
