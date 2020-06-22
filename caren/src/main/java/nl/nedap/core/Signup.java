package nl.nedap.core;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.stream.Collectors;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import nl.nedap.utility.DatabaseManager;
import nl.nedap.utility.EmailVerification;
import nl.nedap.utility.ForeignCharactersChecker;

import java.sql.Date;


/**
 * Servlet implementation class Signup
 */
public class Signup extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		// response.getWriter().append("Served at: ").append(request.getContextPath());
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		String docType = "<!DOCTYPE HTML>\n";
		String firstname = request.getParameter("firstname");
		String lastname = request.getParameter("lastname");
		String email = request.getParameter("email");
		String birthdate = request.getParameter("birthdate");
		String gender = request.getParameter("gender");
		String password = request.getParameter("password");
		String passwordagn = request.getParameter("passwordagn");
		
		try {
			//TODO check if account already exists
			//The query
			String q = "SELECT a.email" + "\n"
					+ "FROM caren.accounts a" + "\n"
					+ "WHERE a.email = ?;";
			
			//Result set of statement execution
			ResultSet resultset = DatabaseManager.ReadQuery(q, email);
			
			if (email == "" || firstname == "" || lastname == ""  || birthdate == "" || gender == "" || password == "" || passwordagn == "") {
				String error = "Please make sure all field are filled.";
				response.sendRedirect("http://localhost:8080/caren/signup/error.html?error=" + error);
				return;
			} else if (!(email.contains("@") && email.contains("."))) {
				String error = "Invalid email format: "+email;
				response.sendRedirect("http://localhost:8080/caren/signup/error.html?error=" + error);
				return;
			}else if (ForeignCharactersChecker.emailHasForeignCharacters(email)) { //sanitisation of email field
				String error = "Email input fields can only contain the following characters: a->z, A->Z, 0->9, '@', '.', '-', '_' ";
				response.sendRedirect("http://localhost:8080/caren/signup/error.html?error=" + error);
				return;
			}
			else if (ForeignCharactersChecker.basicHasForeignCharacters(password)) {//sanitisation of password field
				String error = "Password can only contain the following characters: a->z, A->Z, 0->9";
				response.sendRedirect("http://localhost:8080/caren/signup/error.html?error=" + error);
				return;
			}else if (ForeignCharactersChecker.basicHasForeignCharacters(firstname) || ForeignCharactersChecker.basicHasForeignCharacters(lastname) || 
					ForeignCharactersChecker.basicHasForeignCharacters(passwordagn)) {//sanitisation of the rest of the fields
				String error = "All (non email) input fields can only contain the following characters: a->z, A->Z, 0->9 ";
				response.sendRedirect("http://localhost:8080/caren/signup/error.html?error=" + error);
				return;
			}else if (password.length() < 8) {
				String error = "Password must at least be 8 characters long";
				response.sendRedirect("http://localhost:8080/caren/signup/error.html?error=" + error);
				return;
			} else  if (!passwordagn.equals(password)) {
				String error = "Passwords do not match";
				response.sendRedirect("http://localhost:8080/caren/signup/error.html?error=" + error);
				return;
			}
			
			if (!resultset.next()) { // can create acc
				//get max p_key for accounts and for people
				String pKeyGet = "SELECT MAX(a.aid) FROM caren.accounts a";
				ResultSet pkeySet = DatabaseManager.ReadQuery(pKeyGet);
				pkeySet.next();
				int maxpKeyAccounts = pkeySet.getInt(1);
				pKeyGet = "SELECT MAX(p.pid) FROM caren.people p";
				pkeySet = DatabaseManager.ReadQuery(pKeyGet);
				pkeySet.next();
				int maxpKeyPeople = pkeySet.getInt(1);
				
				Date birthDateFormatted = Date.valueOf(birthdate);
				
				//Making call to database to make account.
				String createAccQ = "INSERT INTO caren.accounts (aid, email, password) VALUES (CAST(? AS int),?, ?)"; // email, password.
				//fix
				DatabaseManager.updateQuery(createAccQ, ""+maxpKeyAccounts + 1, email, password);
				//Retrieving the new account's aid.
				String aidQ = "SELECT a.aid FROM caren.accounts a WHERE a.email = ?"; // email.
				ResultSet aidResultSet = DatabaseManager.ReadQuery(aidQ, email);
				aidResultSet.next();
				int aid = aidResultSet.getInt(1);
				System.out.println(aid);
				//Making call to database to make person in people.
				String createPersQ = "INSERT INTO caren.people (pid,aid, first_name, last_name, date_of_birth, gender) VALUES (CAST(? AS int), CAST(? AS int), ?, ?, CAST(? AS date), ?)";
				DatabaseManager.updateQuery(createPersQ, ""+ (maxpKeyPeople + 1), ""+aid, firstname, lastname, ""+birthDateFormatted.toString(), gender);
				
				
				
				EmailVerification verifying = new EmailVerification(email);
				String token = verifying.tokenGenerator(25);
				
				String insertToken = "UPDATE caren.accounts SET verification_token = ? WHERE aid = CAST(? AS int)";
				
				DatabaseManager.updateQuery(insertToken, token, ""+aid);
				
				EmailVerification.sendEmail(verifying);
				String resendVerificationLink = "http://localhost:8080/caren/rest/resendEmail/" + email;
				
				response.sendRedirect("http://localhost:8080/caren/signup/success.html");
				
			} else { // cannot create acc
				String error = " Email: "+ email +" already in use. Please go back and try another one.";
				response.sendRedirect("http://localhost:8080/caren/signup/error.html?error=" + error);
			}
			
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			out.println(docType + "<HTML> <body> Unexpected error has occured. </body> </HTML>");
		}
	}

}
