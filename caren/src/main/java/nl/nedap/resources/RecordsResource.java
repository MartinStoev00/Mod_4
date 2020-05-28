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

@Path("getrecords")
public class RecordsResource {
	@GET
	@Produces(MediaType.TEXT_PLAIN)
	public String showTime(
	    @Context HttpServletRequest request
	) {
		if (request.getSession().getAttribute("aid") != null) {
			int aid = (int)request.getSession().getAttribute("aid");
			
			String query = "SELECT r.type, r.data, r.timestamp, cp.name" + "\n"
					+ "FROM reports r, people p, care_providers cp" + "\n"
					+ "WHERE r.person_id = p.pid" + "\n"
					+ "AND p.aid = ?" + "\n"
					+ "AND r.care_provider_id = cp.id;";
			
			ResultSet records = DatabaseManager.ReadQuery(query, ""+aid);
			String result = "[";
			try {
				
				boolean firstRecord = true;
				
				while (records.next()) {
					//ResultSetMetaData metadata = records.getMetaData();
					String type = records.getString(1);
					String data = records.getString(2);
					String timestamp = records.getString(3);
					String care_provider = records.getString(4);
					
					if (firstRecord) {
						firstRecord = false;
					} else {
						result = result + ", "; 
					}
					
					result = result + "{"
							+ "\"title\": "+ type + ", "
							+ "\"text\": "+ data + ", "
							+ "\"date\": "+ timestamp + ", "
							+ "\"name\": "+ care_provider
							+ "}";
				}
				
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
			result = result + "]";
			return result;
			
		} else {
			return "No logins";
		}
	}
}
