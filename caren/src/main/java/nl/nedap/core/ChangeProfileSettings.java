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
		+ "FROM people p, accounts a" + "\n"
		+ "WHERE a.aid = p.aid" + "\n"
		+ "AND a.aid = ?";
		
		ResultSet passwordR = DatabaseManager.ReadQuery(passwordQ, ""+loggedaid);
		String pass;
		try {
			passwordR.next();
			pass = passwordR.getString(1);
		} catch (SQLException e) {
			e.printStackTrace();
			return;
		}
		
		if (!old_password_input.equals(pass)) {
			return;
		}
		
		System.out.println("Old pass: " + old_password_input);
		System.out.println("Current pass: " + pass);
		
		//firstname
		if (!first_name_input.equals("")) {
			if (old_password_input.equals(pass)) {
				String q = "UPDATE people" + "\n"
				+ "SET first_name = ?" + "\n"
				+ "WHERE aid = ?" + "\n";
				
				DatabaseManager.updateQuery(q, first_name_input, ""+loggedaid);
			}
		}
		
		//lastname
		if (!last_name_input.equals("")) {
			if (old_password_input.equals(pass)) {
				String q = "UPDATE people" + "\n"
				+ "SET last_name = ?" + "\n"
				+ "WHERE aid = ?" + "\n";
				
				DatabaseManager.updateQuery(q, last_name_input, ""+loggedaid);
			}
		}
		
		//email
		if (!email_input.equals("")) {
			if (old_password_input.equals(pass)) {
				String q = "UPDATE accounts" + "\n"
				+ "SET email = ?" + "\n"
				+ "WHERE aid = ?" + "\n";
				
				DatabaseManager.updateQuery(q, email_input, ""+loggedaid);
			}
		}
		
		//password
		if (!password_input.equals("")) {
			if (old_password_input.equals(pass)) {
				String q = "UPDATE accounts" + "\n"
				+ "SET password = ?" + "\n"
				+ "WHERE aid = ?" + "\n";
				
				DatabaseManager.updateQuery(q, password_input, ""+loggedaid);
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
			
			String q = "UPDATE accounts" + "\n"
			+ "SET dark_mode = ?" + "\n"
			+ "WHERE aid = ?" + "\n";
			
			DatabaseManager.updateQuery(q, ""+dark_mode_value, ""+loggedaid);
			
			String q2 = "UPDATE accounts" + "\n"
			+ "SET rpl = \"" + rpl_input + "\"\n"
			+ "WHERE aid = ?" + "\n";
			
			DatabaseManager.updateQuery(q, rpl_input, ""+loggedaid);
		}
		
		
	}
	
}
