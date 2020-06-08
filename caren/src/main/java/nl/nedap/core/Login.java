package nl.nedap.core;

import java.io.IOException;
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

/**
 * Servlet implementation class Login
 */
public class Login extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	private static String URL = "jdbc:mysql://localhost:3369/caren";
	private static String DBUSERNAME = "root";
	private static String DBPASS = "kze3jBXt7oW4";
       
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
		
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection conn = DriverManager.getConnection(URL, DBUSERNAME, DBPASS);
			
			//TODO check if account already exists
			//The query
			String q = "SELECT a.email" + "\n"
					+ "FROM accounts a" + "\n"
					+ "WHERE a.email = ?;";
			
			ResultSet resultset = DatabaseManager.ReadQuery(q, email);
			System.out.println("Attempted login by: email: " + email + "; password: " + password + ";");
			
			if (resultset.next()) { // has an account
				System.out.println("Account with email: " + email + "; exists.");
				
				String accInfo = "SELECT a.aid, a.password" + "\n"
						+ "FROM accounts a" + "\n"
						+ "WHERE a.email = ?;";
				
				//Result set of statement execution
				ResultSet passResultset = DatabaseManager.ReadQuery(accInfo, email);
				passResultset.next();
				
				int aid = passResultset.getInt(1);
				String pass = passResultset.getString(2);
				
				if (pass.equals(password)) {
					//Make session
					HttpSession session = request.getSession();
					session.setAttribute("aid", aid);
					
					//Redirect to posts page
					response.sendRedirect("http://localhost:8080/caren/posts/");
					
					System.out.println("Login successful: " + email);
				} else {
					response.sendRedirect("http://localhost:8080/caren/login/");
				}
			}
		
		}catch(Exception e) {
			e.printStackTrace();
		}
	}

}
