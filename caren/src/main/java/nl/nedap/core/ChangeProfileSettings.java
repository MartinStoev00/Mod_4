package nl.nedap.core;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

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
		
		if (first_name_input.equals("")) {
			
		}
		
	}
	
}
