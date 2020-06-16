package nl.nedap.resources;

import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import model.Record;
import nl.nedap.utility.DatabaseManager;

@Path("getrecord/{rid}")
public class RecordResource {
	@GET
	@Produces({MediaType.APPLICATION_JSON})
	public Record getRecord(@Context HttpServletRequest request, @PathParam("rid") int rid) {
		Record r = null;
		String q = "SELECT * FROM caren.getrecord(?);";
		
		ResultSet result = DatabaseManager.ReadQuery(q, ""+rid);
		try {
			result.next();
			r = new Record(result.getInt(1), result.getInt(2), result.getString(3), result.getInt(4), result.getString(5), result.getString(6), result.getString(7));
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return r;
	}
}
