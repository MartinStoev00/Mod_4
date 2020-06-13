package nl.nedap.resources;

import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import nl.nedap.utility.DatabaseManager;

@Path("getrecords/{id}")
public class RecordsResource {
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public String showTime(
	    @Context HttpServletRequest request, @PathParam("id") int id
	) {
		if (request.getSession().getAttribute("aid") != null) {
			int aid = (int)request.getSession().getAttribute("aid");
			
			if (id == 0) {
				id = aid;
			} else if (!DatabaseManager.IsAssociate(aid, id)) {
				return "[]";
			}
			
			
			
			String query = "SELECT r.type, r.data, r.timestamp, cp.name, r.id, p.pid" + "\n"
					+ "FROM reports r, people p, care_providers cp" + "\n"
					+ "WHERE r.person_id = p.pid" + "\n"
					+ "AND p.aid = ?" + "\n"
					+ "AND r.care_provider_id = cp.id;";
			
			ResultSet records = DatabaseManager.ReadQuery(query, ""+id);
			
			
			
			String result = "[";
			try {
				
				boolean firstRecord = true;
				
				while (records.next()) {
					//ResultSetMetaData metadata = records.getMetaData();
					String type = records.getString(1);
					String data = records.getString(2);
					String timestamp = records.getString(3);
					String care_provider = records.getString(4);
					String rid = records.getString(5);
					String pid = records.getString(6);
					
					if (firstRecord) {
						firstRecord = false;
					} else {
						result = result + ", "; 
					}
					
					result = result + "{"
							+ "\"rid\": \""+ rid + "\", "
							+ "\"title\": \""+ type + "\", "
							+ "\"text\": "+ data + ", "
							+ "\"date\": \""+ timestamp + "\", "
							+ "\"pid\": \""+ pid + "\", "
							+ "\"name\": \""+ care_provider
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
