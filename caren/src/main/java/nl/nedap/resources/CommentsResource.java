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

@Path("getcomments/{destpid}")
public class CommentsResource {
	@GET
	@Produces({MediaType.APPLICATION_JSON})
	public List<Comment> getComments(@Context HttpServletRequest request, @PathParam("destpid") int destpid) {
		//The list of comments to be returned at the end.
		List<Comment> comments = new ArrayList<>();
				
		if (request.getSession().getAttribute("aid") == null) {
			return null;
		}
		
		int loggedaid;
		int loggedpid;
		String aidType;
		try {
			loggedaid = (int)request.getSession().getAttribute("aid");
			loggedpid = (int)request.getSession().getAttribute("pid");
			aidType = (String)request.getSession().getAttribute("aidType");
		} catch(Exception e) {
			return null;
		} 
		
		if (destpid == 0) {
			destpid = loggedpid;
		}
		
		//The query to get all the comments belonging to a post.
		String query = "SELECT * FROM caren.getcomments(?);";
		
		//Resultset
		ResultSet result = DatabaseManager.ReadQuery(query, ""+destpid);

		try {
			while (result.next()) {
				int cid, rid, pid; String visibility, date_added, text, name;
				int parent, seen;
				cid = result.getInt(1);
				rid = result.getInt(2);
				pid = result.getInt(3);
				name = result.getString(4);
				visibility = result.getString(5);
				text = result.getString(6);
				date_added = result.getString(7);
				parent = result.getInt(8);
				seen = result.getInt(9);
				
				boolean addComment = false;
				
				// Handling visibility.
				if (loggedpid == pid) {
					addComment = true;
				} else if (aidType.equals("provider") && (visibility.equals(CommentVisibility.PUBLIC) || visibility.equals(CommentVisibility.PRIVATE))) {
					System.out.println(DatabaseManager.IsClient(loggedpid, pid));
					if (DatabaseManager.IsClient(loggedpid, pid)) {
						addComment = true;
					}
				} else if ( ( DatabaseManager.IsAssociate(pid, loggedpid) && visibility.equals(CommentVisibility.PUBLIC) )|| ( DatabaseManager.isBeingCaredForBy(loggedpid, pid) && !visibility.equals(CommentVisibility.PERSONAL) && DatabaseManager.recordBelongsToLoggedInUser(loggedpid, rid)) ) {
					addComment = true;
				} else {
					
				}
				
				if (addComment) {
					Comment comment = new Comment(cid, rid, pid, name, visibility, text, date_added, parent, seen);
					comments.add(comment);
				}
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		//System.out.println(comments.size());
		return comments;
	}
}
