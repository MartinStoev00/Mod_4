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
		String birthday = request.getParameter("birthday");
		String password = request.getParameter("password");
		String passwordagn = request.getParameter("passwordagn");
		
		
		try {
			Connection conn = DriverManager.getConnection(URL, DBUSERNAME, DBPASS);
			
			//TODO check if account already exists
			//The query
			String q = "SELECT a.email"
					+ "FROM accounts a"
					+ "WHERE a.email = '?'";
			
			//Create prepared statement object
			PreparedStatement statement = conn.prepareStatement(q);
			
			//Add values to prepared statement
			statement.setString(1, email);
			
			//Result set of statement execution
			ResultSet resultset = statement.executeQuery("");
			
			//TODO What to do with result of check
			System.out.println(resultset.getMetaData().getColumnCount());
			
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		out.println(docType + "<HTML> <body> result html </body> </HTML>");
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
