package nl.nedap.utility;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class DatabaseManager {
	
<<<<<<< HEAD
	
	private static final String HOST = "bronto.ewi.utwente.nl";
	private static final String DBNAME = "dab_di19202b_340";
	private static final String DBUSERNAME = "dab_di19202b_340";
	private static final String DBPASS = "pYMCMcw6zBx7xaxH";
	private static final String URL = "jdbc:postgresql://" + HOST + ":5432/" + DBNAME;
=======
	private static String URL = "jdbc:mysql://80.115.229.32:3369/caren";
	private static String DBUSERNAME = "root";
	private static String DBPASS = "kze3jBXt7oW4";
>>>>>>> ce0bc6de3d4220c96414da051d315fd4baceedd3
	
	public static ResultSet ReadQuery(String q, String ... vars) {
		
		try {
			Class.forName("org.postgresql.Driver");
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
	
public static void updateQuery(String q, String ... vars) {
		
	try {
		Class.forName("org.postgresql.Driver");
		Connection conn = DriverManager.getConnection(URL, DBNAME, DBPASS);
		
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
		statement.executeUpdate();
	} catch (Exception e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
		
}

public static void updateRegularQuery(String q) {
	
	try {
		Class.forName("org.postgresql.Driver");
		Connection conn = DriverManager.getConnection(URL, DBNAME, DBPASS);
		
		//Create prepared statement object
		Statement statement = conn.createStatement();
		
		//Result set of statement execution
		statement.executeUpdate(q);
	} catch (Exception e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
		
}
	
	public static Boolean IsAssociate(int assTo, int ass) {
		//if (sessionId == id) {return true;}
		
		String q = "SELECT a.aid" + "\n"
				+ "FROM accounts a, relationships r" + "\n"
				+ "WHERE r.person_id = ?" + "\n"
				+ "AND r.related_person_id = ?";
		
		ResultSet r = ReadQuery(q, ""+assTo, ""+ass);
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
	
	public static Boolean IsClient(int sessionId, int id) {
		//if (sessionId == id) {return true;}
		
		String q = "SELECT a.aid" + "\n"
				+ "FROM accounts a, care_providers p, care_providers_people c" + "\n"
				+ "WHERE c.care_provider_id = ? AND c.person_id = ?";
		
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

	public static boolean isBeingCareForBy(int loggedpid, int pid) {
		String q = "SELECT a.aid" + "\n"
				+ "FROM accounts a, care_providers p, care_providers_people c" + "\n"
				+ "WHERE c.care_provider_id = ? AND c.person_id = ?";
		
		ResultSet r = ReadQuery(q, ""+pid, ""+loggedpid);
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
