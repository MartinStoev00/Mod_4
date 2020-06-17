package nl.nedap.core;

import java.io.IOException;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import nl.nedap.utility.DatabaseManager;

public class ChangeProfileSettings extends HttpServlet {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String first_name_input = request.getParameter("first_name");
		String last_name_input = request.getParameter("last_name");
		String email_input = request.getParameter("email");
		String password_input = request.getParameter("password");
		String old_password_input = request.getParameter("old_password");
		String dark_mode_input = request.getParameter("dark_mode");
		String rpl_input = request.getParameter("rpl");
		
		if (request.getSession().getAttribute("aid") == null) {
			return;
		}
		int loggedaid = (int)request.getSession().getAttribute("aid");
		
		String passwordQ = "SELECT a.password" + "\n"
		+ "FROM caren.people p, caren.accounts a" + "\n"
		+ "WHERE a.aid = p.aid" + "\n"
		+ "AND a.aid = CAST(? AS int)";
		
		ResultSet passwordR = DatabaseManager.ReadQuery(passwordQ, ""+loggedaid);
		String pass;
		try {
			passwordR.next();
			pass = passwordR.getString(1);
		} catch (SQLException e) {
			e.printStackTrace();
			return;
		}
		
		//firstname
		if (!first_name_input.equals("")) {
			if (old_password_input.equals(pass)) {
				String q = "UPDATE caren.people" + "\n"
				+ "SET first_name = ?" + "\n"
				+ "WHERE aid = CAST(? AS int)" + "\n";
				
				DatabaseManager.updateQuery(q, first_name_input, ""+loggedaid);
			} else {
				response.sendRedirect("http://localhost:8080/caren/settings/failure.html");
				return;
			}
		}
		
		//lastname
		if (!last_name_input.equals("")) {
			if (old_password_input.equals(pass)) {
				String q = "UPDATE caren.people" + "\n"
				+ "SET last_name = ?" + "\n"
				+ "WHERE aid = CAST(? AS int)" + "\n";
				
				DatabaseManager.updateQuery(q, last_name_input, ""+loggedaid);
			} else {
				response.sendRedirect("http://localhost:8080/caren/settings/failure.html");
				return;
			}
		}
		
		//email
		if (!email_input.equals("")) {
			if (old_password_input.equals(pass)) {
				String q = "UPDATE caren.accounts" + "\n"
				+ "SET email = ?" + "\n"
				+ "WHERE aid = CAST(? AS int)" + "\n";
				
				DatabaseManager.updateQuery(q, email_input, ""+loggedaid);
			} else {
				response.sendRedirect("http://localhost:8080/caren/settings/failure.html");
				return;
			}
		}
		
		//password
		if (!password_input.equals("")) {
			if (old_password_input.equals(pass)) {
				String q = "UPDATE caren.accounts" + "\n"
				+ "SET password = ?" + "\n"
				+ "WHERE aid = CAST(? AS int)" + "\n";
				
				DatabaseManager.updateQuery(q, password_input, ""+loggedaid);
			} else {
				response.sendRedirect("http://localhost:8080/caren/settings/failure.html");
				return;
			}
		}

		//dark_mode & rpl
		if (old_password_input.equals(pass)) {
			int dark_mode_value = 0;
			if (dark_mode_input == null) {
				dark_mode_value = 0;
			} else {
				dark_mode_value = 1;
			}
			
			String q = "UPDATE caren.accounts" + "\n"
			+ "SET dark_mode = CAST(? AS int)" + "\n"
			+ "WHERE aid = CAST(? AS int)" + "\n";
			
			DatabaseManager.updateQuery(q, ""+dark_mode_value, ""+loggedaid);
			
			String q2 = "UPDATE caren.accounts" + "\n"
			+ "SET rpl = CAST(? AS int)" + "\n"
			+ "WHERE aid = CAST(? AS int)" + "\n";
			
			DatabaseManager.updateQuery(q2, rpl_input, ""+loggedaid);
		}
		
		response.sendRedirect("http://localhost:8080/caren/settings/success.html");
	}
	
}
