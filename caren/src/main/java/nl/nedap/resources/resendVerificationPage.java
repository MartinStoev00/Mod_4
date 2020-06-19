package nl.nedap.resources;

import java.sql.ResultSet;
import java.sql.SQLException;

import javax.mail.MessagingException;
import javax.mail.internet.AddressException;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import nl.nedap.utility.DatabaseManager;
import nl.nedap.utility.EmailVerification;

@Path("resendEmail/{email}")
public class resendVerificationPage {

	@GET
	@Produces({MediaType.TEXT_PLAIN})
	public String Verify(@Context HttpServletRequest request, @PathParam("email") String email) throws SQLException, AddressException, MessagingException {
		
		String checkUnverifiedQuery = "SELECT a.verified FROM caren.accounts a WHERE a.email = ?";
		ResultSet isUnverifiedSet = DatabaseManager.ReadQuery(checkUnverifiedQuery, email);
		
		if (isUnverifiedSet.next()) {
			int isUnverified = isUnverifiedSet.getInt(1);
			
			if (isUnverified == 0) {
				EmailVerification verifying = new EmailVerification(email);
				String token = verifying.tokenGenerator(25);
				
				String insertToken = "UPDATE caren.accounts SET verification_token = ? WHERE email = ?";
				
				DatabaseManager.updateQuery(insertToken, token, email);
				EmailVerification.sendEmail(verifying);
				
				return "Check your email for a new verification email";
				
			}else {
				return "Email is already verified";
			}
			
		}
		return "Email doesn't exist";
	}
}
