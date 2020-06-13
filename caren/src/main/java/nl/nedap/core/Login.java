package nl.nedap.core;

import java.io.IOException;
import java.io.PrintWriter;
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
		PrintWriter out = response.getWriter();
		String docType = "<!DOCTYPE HTML>\n";
		
		try {
			if (ForeignCharactersChecker.hasForeignCharacters(password)) {
				out.println(docType + "<HTML> <body>All input fields can only contain the following characters: a->z, A->Z, 0->9 </body> </HTML>");
				return;
			}
			//TODO check if account already exists
			//The query
			String q = "SELECT a.email" + "\n"
					+ "FROM accounts a" + "\n"
					+ "WHERE a.email = ?;";
			
			ResultSet resultset = DatabaseManager.ReadQuery(q, email);
			System.out.println("Attempted login by: email: " + email + "; password: " + password + ";");
			
			if (resultset.next()) { // has an account
				System.out.println("Account with email: " + email + "; exists.");
				
				String accInfo = "SELECT a.aid, a.password, p.pid, CONCAT(p.first_name, \" \", p.first_name)" + "\n"
						+ "FROM accounts a, people p" + "\n"
						+ "WHERE a.email = ?" + "\n"
						+ "AND a.aid = p.aid;";
				
				//Result set of statement execution
				ResultSet passResultset = DatabaseManager.ReadQuery(accInfo, email);
				passResultset.next();
				
				int aid = passResultset.getInt(1);
				String pass = passResultset.getString(2);
				int pid = passResultset.getInt(3);
				String name = passResultset.getString(4);
				
				if (pass.equals(password)) {
					//Make session
					HttpSession session = request.getSession();
					session.setAttribute("aid", aid);
					session.setAttribute("pid", pid);
					session.setAttribute("aidType", "client");
					session.setAttribute("name", name);
					
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
