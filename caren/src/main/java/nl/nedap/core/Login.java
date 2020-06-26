package nl.nedap.core;

import java.io.IOException;
import java.io.PrintWriter;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import nl.nedap.utility.DatabaseManager;
import nl.nedap.utility.ForeignCharactersChecker;
import nl.nedap.utility.Hasher;

/**
 * Servlet implementation class Login
 */
public class Login extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Login() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String email = request.getParameter("email");
		String password = request.getParameter("password");
		
		String hashedPassword = Hasher.hash(password);
		
		try {
			if (ForeignCharactersChecker.basicHasForeignCharacters(password)) {//sanitisation for password field
				String error = "Password input fields can only contain the following characters: a->z, A->Z, 0->9.";
				response.sendRedirect("http://localhost:8080/caren/login/error.html?error=" + error);
				return;
			}
			if (ForeignCharactersChecker.emailHasForeignCharacters(email)) {//sanitisation for email field
				String error = "Email input fields can only contain the following characters: a->z, A->Z, 0->9, '@', '.', '-', '_'";
				response.sendRedirect("http://localhost:8080/caren/login/error.html?error=" + error);
				return;
			}
			//TODO check if account already exists
			//The query
			String q = "SELECT caren.accountExists(?);";
			
			ResultSet resultset = DatabaseManager.ReadQuery(q, email);
			
			
			if (resultset.next()) { // has an account
				System.out.println("Account with email: " + email + "; exists.");
				
				String accInfo = "SELECT * FROM caren.accountInfo(?);";
				
				//Result set of statement execution
				ResultSet passResultset = DatabaseManager.ReadQuery(accInfo, email);
				passResultset.next();
				int aid = passResultset.getInt(1);
				String pass = passResultset.getString(2);
				int pid = passResultset.getInt(3);
				String name = passResultset.getString(4);
				int verified = passResultset.getInt(5);
				String type = passResultset.getString(6);
				
				//if account is not verified
				if (verified != 1) {
					String resendVerificationLink = "http://localhost:8080/caren/rest/resendEmail/" + email;
					response.sendRedirect("http://localhost:8080/caren/login/nverification.html?resend="+resendVerificationLink);
					return;
				}
				
				
				//if password matches and account is verified
				if (pass.equals(hashedPassword)) {
					//Make session
					HttpSession session = request.getSession();
					session.setAttribute("aid", aid);
					session.setAttribute("pid", pid);
					
					if (type.equals("client")) {
						session.setAttribute("aidType", "client");
					} else {
						session.setAttribute("aidType", "provider");
					}
					
					session.setAttribute("name", name);
					
					//Redirect to posts page
					response.sendRedirect("http://localhost:8080/caren/posts/");
					
					System.out.println("Login successful: " + email);
				} else {
					//No accounts with given credentials.
					response.sendRedirect("http://localhost:8080/caren/login/failure.html");
				}
			} else {
				//No accounts with given credentials.
				response.sendRedirect("http://localhost:8080/caren/login/failure.html");
			}
		
		}catch(Exception e) {
			e.printStackTrace();
		}
	}

}
