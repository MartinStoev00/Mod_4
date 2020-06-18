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
	
	private static final String HOST = "bronto.ewi.utwente.nl";
	private static final String DBNAME = "dab_di19202b_340";
	private static final String DBUSERNAME = "dab_di19202b_340";
	private static final String DBPASS = "pYMCMcw6zBx7xaxH";
	private static final String URL = "jdbc:postgresql://" + HOST + ":5432/" + DBNAME;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public Signup() {
		super();
		// TODO Auto-generated constructor stub
	}


	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
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
			Class.forName("org.postgresql.Driver");
			Connection conn = DriverManager.getConnection(URL, DBUSERNAME, DBPASS);
			
			
			//TODO check if account already exists
			//The query
			String q = "SELECT a.email" + "\n"
					+ "FROM caren.accounts a" + "\n"
					+ "WHERE a.email = ?;";
			
			//Create prepared statement object
			PreparedStatement statement = conn.prepareStatement(q);
			
			//Add values to prepared statement
			statement.setString(1, email);
			
			//Result set of statement execution
			ResultSet resultset = statement.executeQuery();
			
			if (email == "" || firstname == "" || lastname == ""  || birthdate == "" || gender == "" || password == "" || passwordagn == "") {
				out.println(docType + "<HTML> <body>Please make sure all fields are filled. </body> </HTML>");
				return;
			} else if (!(email.contains("@") && email.contains("."))) {
				out.println(docType + "<HTML> <body>Invalid email format: "+email+"</body> </HTML>");
				return;
			}else if (ForeignCharactersChecker.emailHasForeignCharacters(email)) { //sanitisation of email field
				out.println(docType + "<HTML> <body>Email input fields can only contain the following characters: a->z, A->Z, 0->9, '@', '.', '-', '_' </body> </HTML>");
				return;
			}
			else if (ForeignCharactersChecker.basicHasForeignCharacters(password)) {//sanitisation of password field
				out.println(docType + "<HTML> <body>Password can only contain the following characters: a->z, A->Z, 0->9 </body> </HTML>");
				return;
			}else if (ForeignCharactersChecker.basicHasForeignCharacters(firstname) || ForeignCharactersChecker.basicHasForeignCharacters(lastname) || 
					ForeignCharactersChecker.basicHasForeignCharacters(passwordagn)) {//sanitisation of the rest of the fields
				out.println(docType + "<HTML> <body>All (non email) input fields can only contain the following characters: a->z, A->Z, 0->9 </body> </HTML>");
				return;
			}else if (password.length() < 8) {
				out.println(docType + "<HTML> <body>Password must at least be 8 characters long</HTML>");
				return;
			} else  if (!passwordagn.equals(password)) {
				out.println(docType + "<HTML> <body>Passwords do not match</body> </HTML>");
				return;
			}
			
			if (!resultset.next()) { // can create acc
				//get max p_key for accounts and for people
				String pKeyGet = "SELECT MAX(a.aid) FROM caren.accounts a";
				PreparedStatement pKeyStat = conn.prepareStatement(pKeyGet);
				ResultSet pkeySet = pKeyStat.executeQuery();
				pkeySet.next();
				int maxpKeyAccounts = pkeySet.getInt(1);
				pKeyGet = "SELECT MAX(p.pid) FROM caren.people p";
				pKeyStat = conn.prepareStatement(pKeyGet);
				pkeySet = pKeyStat.executeQuery();
				pkeySet.next();
				int maxpKeyPeople = pkeySet.getInt(1);
				
				Date birthDateFormatted = Date.valueOf(birthdate);
				
				out.println(docType + "<HTML> <body>Creating account..</body> </HTML>");
				
				//Making call to database to make account.
				String createAccQ = "INSERT INTO caren.accounts (aid, email, password) VALUES (?,?, ?)"; // email, password.
				PreparedStatement accCreationSt = conn.prepareStatement(createAccQ);
				accCreationSt.setInt(1, maxpKeyAccounts + 1); accCreationSt.setString(2, email); accCreationSt.setString(3, password);
				//fix
				accCreationSt.executeUpdate();
				out.println(docType + "<HTML> <body>Creating account..</body> </HTML>");
				//Retrieving the new account's aid.
				String aidQ = "SELECT a.aid FROM caren.accounts a WHERE a.email = ?"; // email.
				PreparedStatement aidSt = conn.prepareStatement(aidQ);
				aidSt.setString(1, email);
				ResultSet aidResultSet = aidSt.executeQuery();
				aidResultSet.next();
				int aid = aidResultSet.getInt(1);
				System.out.println(aid);
				//Making call to database to make person in people.
				String createPersQ = "INSERT INTO caren.people (pid,aid, first_name, last_name, date_of_birth, gender) VALUES (?,?, ?, ?, ?, ?)";
				PreparedStatement persCreationSt = conn.prepareStatement(createPersQ);
				persCreationSt.setInt(1, maxpKeyPeople +1); persCreationSt.setInt(2, aid); persCreationSt.setString(3, firstname); persCreationSt.setString(4,lastname); persCreationSt.setDate(5, birthDateFormatted);
				persCreationSt.setString(6, gender);
				persCreationSt.executeUpdate();
				
				
				out.println(docType + "<HTML> <body>Account created. Check your email to verify your account</body> </HTML>");
				
				EmailVerification verifying = new EmailVerification(email);
				String token = verifying.tokenGenerator(25);
				
				String insertToken = "UPDATE caren.accounts SET verification_token = ? WHERE aid = CAST(? AS int)";
				
				DatabaseManager.updateQuery(insertToken, token, ""+aid);
				
				EmailVerification.sendEmail(verifying);
				
				
				
				//mohammad shall decide the fate of that, I think it should be deleted, no need for it anymore
				/*
				//Make session
				String pidQ = "SELECT p.pid"
						+ "FROM people p, accounts a"
						+ "WHERE p.aid = a.aid"
						+ "AND p.aid = ?";
				
				ResultSet rsForpid = DatabaseManager.ReadQuery(pidQ, ""+aid);
				rsForpid.next();
				int pid = rsForpid.getInt(1);
				
				HttpSession session = request.getSession();
				session.setAttribute("aid", aid);
				session.setAttribute("aidType", "client");
				session.setAttribute("aid", pid);
				session.setAttribute("name", firstname + " " + lastname);
				
				//Redirect to posts page
				response.sendRedirect("http://localhost:8080/caren/posts/"); */
				
			} else { // cannot create acc
				out.println(docType + "<HTML> <body> Email: "+ email +" already in use. Please go back and try another one. </body> </HTML>");
			}
			
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			out.println(docType + "<HTML> <body> Unexpected error has occured. </body> </HTML>");
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		/*
		 * // TODO Auto-generated method stub System.out.println("BOOP");
		 * 
		 * BufferedReader reader = request.getReader(); String body = ""; String line;
		 * while ((line = reader.readLine()) != null) { body = body + line + "\n";
		 * System.out.println("WHAT"); } System.out.println(body);
		 */
	}

}
