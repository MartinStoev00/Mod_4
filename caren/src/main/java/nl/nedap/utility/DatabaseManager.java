package nl.nedap.utility;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class DatabaseManager {
	
	private static String URL = "jdbc:mysql://localhost:3369/caren";
	private static String DBUSERNAME = "root";
	private static String DBPASS = "kze3jBXt7oW4";
	
	public static ResultSet ReadQuery(String q, String ... vars) {
		
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection conn = DriverManager.getConnection(URL, DBUSERNAME, DBPASS);
			
			//Create prepared statement object
			PreparedStatement statement = conn.prepareStatement(q);
			
			//Set variables
			if (vars != null && vars.length > 0) {
				for (int i = 0; i < vars.length; i++) {
					//Add values to prepared statement
					statement.setString(i+1, vars[i]);
				}
			}
			
			//Result set of statement execution
			ResultSet resultset = statement.executeQuery();
			
			return resultset;
			
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
		
	}
	
	public static Boolean IsAssociate(int sessionId, int id) {
		String q = "SELECT a.aid" + "\n"
				+ "FROM accounts a, relationships r" + "\n"
				+ "WHERE r.person_id = ?" + "\n"
				+ "AND r.related_person_id = ?";
		
		ResultSet r = ReadQuery(q, ""+sessionId, ""+id);
		try {
			if (r.next()) {
				return true;
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		return false;
	}
}
