package nl.nedap.resources;

import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import nl.nedap.utility.DatabaseManager;

@Path("getassociations")
public class AssociationsResource {
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public String showTime(
	    @Context HttpServletRequest request
	) {
		if (request.getSession().getAttribute("aid") != null) {
			int aid = (int)request.getSession().getAttribute("aid");
			
			String query = "SELECT CONCAT(p2.first_name, \" \", p2.last_name), r.type" + "\n"
					+ "FROM people p1, people p2, relationships r" + "\n"
					+ "WHERE r.person_id = p1.pid" + "\n"
					+ "AND r.related_person_id = p2.pid" + "\n"
					+ "AND p1.aid = ?";
			
			ResultSet records = DatabaseManager.ReadQuery(query, ""+aid);
			String result = "[";
			try {
				
				boolean firstRecord = true;
				
				while (records.next()) {
					//ResultSetMetaData metadata = records.getMetaData();
					String name = records.getString(1);
					String type = records.getString(2);
					
					if (firstRecord) {
						firstRecord = false;
					} else {
						result = result + ", "; 
					}
					
					result = result + "{"
							+ "\"name\": \""+ name + "\", "
							+ "\"description\": \""+ type
							+ "\"}";
				}
				
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
			result = result + "]";
			while (result.contains("\n")) {
				result = result.substring(0, result.indexOf("\n")) + result.substring(result.indexOf("\n")+2, result.length());
			}
			return result;
			
		} else {
			return "[]";
		}
	}
}
