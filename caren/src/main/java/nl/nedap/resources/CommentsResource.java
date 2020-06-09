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

@Path("getcomments")
public class CommentsResource {
	@GET
	@Produces({MediaType.APPLICATION_JSON})
	public List<Comment> getComments(@Context HttpServletRequest request) {
		//The list of comments to be returned at the end.
		List<Comment> comments = new ArrayList<>();
				
				
		if (request.getSession().getAttribute("aid") == null) {
			return comments;
		}
		
		
		int aid = (int)request.getSession().getAttribute("aid");
		String aidType = (String)request.getSession().getAttribute("aidType");
		
		
		
		
		//The query to get all the comments belonging to a post.
		String query = "SELECT c.cid, c.rid, c.pid, CONCAT(p.first_name, \" \", p.last_name), c.visibility, c.text, c.date_added, c.parentid" + "\n"
				+ "FROM comments c, reports r, people p" + "\n"
				+ "WHERE r.person_id = ?"  + "\n"
				+ "AND c.rid = r.id"  + "\n"
				+ "AND c.pid = p.pid;";
		
		//Resultset
		ResultSet result = DatabaseManager.ReadQuery(query, ""+aid);

		try {
			while (result.next()) {
				int cid, rid, pid; String visibility, date_added, text, name;
				int parent;
				cid = result.getInt(1);
				rid = result.getInt(2);
				pid = result.getInt(3);
				name = result.getString(4);
				visibility = result.getString(5);
				text = result.getString(6);
				date_added = result.getString(7);
				parent = result.getInt(8);
				
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
					Comment comment = new Comment(cid, rid, pid, name, visibility, text, date_added, parent);
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
