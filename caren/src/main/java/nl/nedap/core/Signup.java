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

/**
 * Servlet implementation class Signup
 */
public class Signup extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	private static String URL = "jdbc:mysql://localhost:3369/caren";
	private static String DBUSERNAME = "root";
	private static String DBPASS = "kze3jBXt7oW4";

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
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection conn = DriverManager.getConnection(URL, DBUSERNAME, DBPASS);
			
			//TODO check if account already exists
			//The query
			String q = "SELECT a.email" + "\n"
					+ "FROM accounts a" + "\n"
					+ "WHERE a.email = ?;";
			
			//Create prepared statement object
			PreparedStatement statement = conn.prepareStatement(q);
			
			//Add values to prepared statement
			statement.setString(1, email);
			
			//Result set of statement execution
			ResultSet resultset = statement.executeQuery();
			
			if (email == "") {
				out.println(docType + "<HTML> <body>No email was provided: "+email+"</body> </HTML>");
				return;
			}
			
			if (!resultset.next()) { // can create acc
				out.println(docType + "<HTML> <body>Creating account..</body> </HTML>");
				
				//Making call to database to make account.
				String createAccQ = "INSERT INTO accounts (`email`, `password`) VALUES (?, ?)"; // email, password.
				PreparedStatement accCreationSt = conn.prepareStatement(createAccQ);
				accCreationSt.setString(1, email); accCreationSt.setString(2, password);
				accCreationSt.executeUpdate();
				//Retrieving the new account's aid.
				String aidQ = "SELECT a.aid FROM accounts a WHERE a.email = ?"; // email.
				PreparedStatement aidSt = conn.prepareStatement(aidQ);
				aidSt.setString(1, email);
				ResultSet aidResultSet = aidSt.executeQuery();
				aidResultSet.next();
				int aid = aidResultSet.getInt(1);
				
				//Making call to database to make person in people.
				String createPersQ = "INSERT INTO people (aid, first_name, last_name, date_of_birth, gender) VALUES (?, ?, ?, ?, ?, ?)";
				PreparedStatement persCreationSt = conn.prepareStatement(createPersQ);
				persCreationSt.setString(1, ""+aid); persCreationSt.setString(2, firstname); persCreationSt.setString(3, lastname); persCreationSt.setString(4, birthdate); persCreationSt.setString(5, gender);
				persCreationSt.executeUpdate();
				
				out.println(docType + "<HTML> <body>Account created.</body> </HTML>");
				
			} else { // cannot create acc
				out.println(docType + "<HTML> <body> You cannot create an acc with that email </body> </HTML>");
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
