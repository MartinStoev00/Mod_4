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

import nl.nedap.utility.DatabaseManager;


//page to verify your email
@Path("verification/{token}")
public class VerificationPage {
	
	@GET
	@Produces({MediaType.TEXT_PLAIN})
	public String Verify(@Context HttpServletRequest request, @PathParam("token") String token) throws SQLException {
		String queryReadToken = "SELECT a.aid , a.email FROM caren.accounts a WHERE a.verification_token = ?";
		
		ResultSet resultSetToken = DatabaseManager.ReadQuery(queryReadToken, token);
		resultSetToken.next();
		String id = resultSetToken.getString(1);
		String email = resultSetToken.getString(2);
		
		//System.out.println(id);
		
		String insertToken = "UPDATE caren.accounts SET verified = CAST(? AS int) WHERE aid = CAST(? AS int)";
		DatabaseManager.updateQuery(insertToken, ""+1 , ""+id);
		
		
		System.out.println(id);
		return "Email successfully Verified " + email;
	}

}
