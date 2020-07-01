package nl.nedap.core;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Scanner;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

import nl.nedap.utility.DatabaseManager;
import nl.nedap.utility.ForeignCharactersChecker;
import nl.nedap.utility.Hasher;


@MultipartConfig
public class ChangeProfileSettings extends HttpServlet {

	private String getValueOfPart(Part p) {
		if (p == null) {
			return "";
		}
		
		String s = "";
		try (Scanner scanner = new Scanner(p.getInputStream())) {
		    s = scanner.nextLine(); // read from the part
		} catch (Exception e) {
			return s;
		} 
		return s;
	}
	
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		int loggedaid, loggedpid;
		try {
			loggedaid = (int)request.getSession().getAttribute("aid");
			loggedpid = (int)request.getSession().getAttribute("pid");
		} catch(Exception e) {
			return;
		}
		
		String first_name_input = getValueOfPart(request.getPart("first_name"));
		String last_name_input = getValueOfPart(request.getPart("last_name"));
		String email_input = getValueOfPart(request.getPart("email"));
		String password_input = getValueOfPart(request.getPart("password"));
		String old_password_input = Hasher.hash(getValueOfPart(request.getPart("old_password")));
		
		Part profile_picture_input = request.getPart("profile_picture");
		
		String dark_mode_input = getValueOfPart(request.getPart("dark_mode"));
		String rpl_input = getValueOfPart(request.getPart("rpl"));

		//Sanitization
		if (ForeignCharactersChecker.basicHasForeignCharacters(first_name_input) || ForeignCharactersChecker.basicHasForeignCharacters(last_name_input)
				|| ForeignCharactersChecker.emailHasForeignCharacters(email_input) || ForeignCharactersChecker.basicHasForeignCharacters(password_input)
				|| ForeignCharactersChecker.basicHasForeignCharacters(old_password_input) || ForeignCharactersChecker.emailHasForeignCharacters(dark_mode_input)
				|| ForeignCharactersChecker.basicHasForeignCharacters(rpl_input))
		{
			return;
		}
		
		String passwordQ = "SELECT a.password" + "\n"
		+ "FROM caren.people p, caren.accounts a" + "\n"
		+ "WHERE a.aid = p.aid" + "\n"
		+ "AND a.aid = CAST(? AS int);";
		
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
				response.sendRedirect("http://localhost:8080/caren/posts/failure.html");
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
				response.sendRedirect("http://localhost:8080/caren/posts/failure.html");
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
				response.sendRedirect("http://localhost:8080/caren/posts/failure.html");
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
				response.sendRedirect("http://localhost:8080/caren/posts/failure.html");
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
		
		
		/*
		ServletContext sc = getServletContext();
		System.out.println(sc.getRealPath("/1.jpg"));
		Path old = Paths.get(sc.getRealPath("") + "/Pictures/profile_pics");
		Path file = Paths.get(old+"/"+loggedpid+".jpg");
		System.out.println("PAM!");
		try (InputStream input = profile_picture_input.getInputStream()) {
			Files.copy(input, file, StandardCopyOption.REPLACE_EXISTING);
		}
		*/
		
		
		response.sendRedirect("http://localhost:8080/caren/posts/success.html");
		
	}
	
}
