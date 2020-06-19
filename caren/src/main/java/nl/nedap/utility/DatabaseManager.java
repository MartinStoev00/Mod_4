package nl.nedap.utility;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class DatabaseManager {
	
	
	private static final String HOST = "bronto.ewi.utwente.nl";
	private static final String DBNAME = "dab_di19202b_340";
	private static final String DBUSERNAME = "dab_di19202b_340";
	private static final String DBPASS = "pYMCMcw6zBx7xaxH";
	private static final String URL = "jdbc:postgresql://" + HOST + ":5432/" + DBNAME;
	
	private static boolean inited = false;
	
	private static Connection conn;
	
	public static void init() {
		try {
			Class.forName("org.postgresql.Driver");
			conn = DriverManager.getConnection(URL, DBUSERNAME, DBPASS);
			inited = true;
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public static ResultSet ReadQuery(String q, String ... vars) {
		if (!inited) {
			init();
		}
		
		try {
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
				+ "FROM caren.accounts a, caren.relationships r" + "\n"
				+ "WHERE r.person_id = CAST(? AS int)" + "\n"
				+ "AND r.related_person_id = CAST(? AS int)";
		
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
		String q = "SELECT p.aid" + "\n"
				+ "FROM caren.accounts a, caren.people p, caren.relationships r" + "\n"
				+ "WHERE r.person_id = CAST(? AS int)" + "\n"
				+ "AND r.related_person_id = CAST(? AS int)" + "\n"
				+ "AND p.pid = r.related_person_id AND p.type = 'client'";
		
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

	public static boolean isBeingCaredForBy(int loggedpid, int pid) {
		String q = "SELECT p.aid" + "\n"
				+ "FROM caren.accounts a, caren.people p, caren.relationships r" + "\n"
				+ "WHERE r.person_id = CAST(? AS int)" + "\n"
				+ "AND r.related_person_id = CAST(? AS int)" + "\n"
				+ "AND p.pid = r.related_person_id AND p.type = 'client'";
		
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
