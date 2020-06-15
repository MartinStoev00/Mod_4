package nl.nedap.resources;

import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import model.Associate;
import nl.nedap.utility.DatabaseManager;

@Path("getassociations")
public class AssociationsResource {
	@GET
	@Produces({MediaType.APPLICATION_JSON})
	public List<Associate> getAssociations(@Context HttpServletRequest request) {
		
		if (request.getSession().getAttribute("aid") != null) {
			int aid = (int)request.getSession().getAttribute("aid");
			
			String query = "SELECT * FROM caren.getassociations(?)";
			
			ResultSet records = DatabaseManager.ReadQuery(query, ""+aid);
			List<Associate> as = new ArrayList<>();
			try {
				boolean firstRecord = true;
				
				while (records.next()) {
					//ResultSetMetaData metadata = records.getMetaData();
					String name = records.getString(1);
					String type = records.getString(2);
					String aaid = records.getString(3);
					String pid = records.getString(4);
					
					Associate associate = new Associate(name, type, aaid, pid);
					as.add(associate);
				}
				
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

			return as;
			
		} else {
			return null;
		}
	}
}
