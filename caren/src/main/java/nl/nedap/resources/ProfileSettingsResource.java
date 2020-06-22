package nl.nedap.resources;

import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import model.ProfileSettings;
import nl.nedap.utility.DatabaseManager;

@Path("getprofilesettings")
public class ProfileSettingsResource {
	
	@GET
	@Produces({MediaType.APPLICATION_JSON})
	public ProfileSettings getProfileSettings(@Context HttpServletRequest request) {
		ProfileSettings ps;
		
		if (request.getSession().getAttribute("aid") == null) {
			return null;
		}
		
		int aid;
		try {
			aid = (int)request.getSession().getAttribute("aid");
		} catch(Exception e) {
			return null;
		}
		
		String q = "SELECT * FROM caren.getprofilesettings(?);";
		
		ResultSet result = DatabaseManager.ReadQuery(q, ""+aid);
		
		try {
			while (result.next()) {
				int pid = result.getShort(1);
				String first_name = result.getString(2);
				String last_name = result.getString(3);
				String email = result.getString(4);
				String password = result.getString(5);
				int dark_mode = result.getInt(6);
				int rpl = result.getShort(7);
				
				ps = new ProfileSettings(pid, first_name, last_name, email, null, dark_mode, rpl);
				
				return ps;
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		return null;
	}
}
