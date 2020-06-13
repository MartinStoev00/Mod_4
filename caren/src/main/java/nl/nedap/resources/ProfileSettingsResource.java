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
		
		int aid = (int)request.getSession().getAttribute("aid");
		
		String q = "SELECT p.first_name, p.last_name, a.email, a.password, a.dark_mode, a.rpl" + "\n"
		+ "FROM people p, accounts a" + "\n"
		+ "WHERE p.pid = a.aid" + "\n"
		+ "AND a.aid = ?";
		
		ResultSet result = DatabaseManager.ReadQuery(q, ""+aid);
		
		try {
			while (result.next()) {
				String first_name = result.getString(1);
				String last_name = result.getString(2);
				String email = result.getString(3);
				String password = result.getString(4);
				int dark_mode = result.getInt(5);
				int rpl = result.getShort(6);
				
				ps = new ProfileSettings(first_name, last_name, email, password, dark_mode, rpl);
				
				return ps;
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		return null;
	}
}
