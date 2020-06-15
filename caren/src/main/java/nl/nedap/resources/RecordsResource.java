package nl.nedap.resources;

import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
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

import model.Record;
import model.RecordData;
import nl.nedap.utility.DatabaseManager;

@Path("getrecords/{id}")
public class RecordsResource {
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Record> showTime(@Context HttpServletRequest request, @PathParam("id") int id) {
		List<Record> result = new ArrayList<Record>();

		if (request.getSession().getAttribute("aid") != null) {
			int loggedaid = (int) request.getSession().getAttribute("aid");
			int loggedpid = (int) request.getSession().getAttribute("pid");

			if (id == 0) {
				id = loggedpid;
			} else if (!DatabaseManager.IsAssociate(loggedpid, id)) {
				return result;
			}

			String query = "SELECT r.care_provider_id, r.person_id, CONCAT(cp.first_name, \" \", cp.last_name), r.id, r.type, r.data, r.timestamp"+ "\n"
			+ "FROM reports r, people cp" + "\n"
			+ "WHERE r.care_provider_id = cp.pid"  + "\n"
			+ "AND r.person_id = ?";

			ResultSet records = DatabaseManager.ReadQuery(query, "" + id);

			try {
				while (records.next()) {
					int posted_by_id = records.getInt(1);
					int posted_for_id = records.getInt(2);
					String posted_by_name = records.getString(3);
					int record_id = records.getInt(4);
					String type = records.getString(5);
					String data = records.getString(6);
					String date_added = records.getString(7);
					
					Record record = new Record(posted_by_id, posted_for_id, posted_by_name, record_id, type, data, date_added);
					result.add(record);
				}
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		
		return result;
	}
}
