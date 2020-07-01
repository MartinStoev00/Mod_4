package caren;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import java.sql.ResultSet;
import java.sql.SQLException;
import org.junit.Test;
import model.Associate;
import model.ProfileSettings;
import model.Record;
import nl.nedap.utility.DatabaseManager;
import nl.nedap.utility.Hasher;

/*			README
 * This class tests all functionality. Especially resources, JAXB and store procedures and queries.
 */

public class TestClasses {

	@Test
	public void testAccountExists() {
		String q = "SELECT caren.accountExists(?);";

		ResultSet resultset = DatabaseManager.ReadQuery(q, "Okey.Batz@nedap.nl");

		try {
			if (resultset.next()) { // has an account. Account exists
				assertTrue(true);
			}
		} catch (SQLException e) {
			e.printStackTrace();
			assertTrue(false);
		}
	}

	@Test
	public void testAccountInfo() {
		String accInfo = "SELECT * FROM caren.accountInfo(?);";

		// Result set of statement execution
		ResultSet passResultset = DatabaseManager.ReadQuery(accInfo, "Okey.Batz@nedap.nl");
		try {
			passResultset.next();

			int aid = passResultset.getInt(1);
			String pass = passResultset.getString(2);
			int pid = passResultset.getInt(3);
			String name = passResultset.getString(4);
			int verified = passResultset.getInt(5);
			String type = passResultset.getString(6);

			assertEquals(aid, 8);
			assertEquals(pass, Hasher.hash("123"));
			assertEquals(pid, 8);
			assertEquals(name, "Okey Batz");
			assertEquals(verified, 1);
			assertEquals(type, "client");

		} catch (SQLException e) {
			e.printStackTrace();
			assertTrue(false);
		}
	}

	@Test
	public void testGetAssociations() {
		String query = "SELECT * FROM caren.getassociations(?)";

		ResultSet records = DatabaseManager.ReadQuery(query, "8");

		try {
			if (records.next()) {
				// ResultSetMetaData metadata = records.getMetaData();
				String name = records.getString(1);
				String type = records.getString(2);
				String aaid = records.getString(3);
				String pid = records.getString(4);

				Associate associate = new Associate(name, type, aaid, pid);
				assertEquals(associate.getName(), "Arvilla Klocko");
			}

		} catch (SQLException e) {
			e.printStackTrace();
			assertTrue(false);
		}
	}

	@Test
	public void testGetProfileSettings() {
		String q = "SELECT * FROM caren.getprofilesettings(?);";

		ResultSet result = DatabaseManager.ReadQuery(q, "8");

		try {
			if (result.next()) {
				int pid = result.getShort(1);
				String first_name = result.getString(2);
				String last_name = result.getString(3);
				String email = result.getString(4);
				String password = result.getString(5);
				int dark_mode = result.getInt(6);
				int rpl = result.getShort(7);

				ProfileSettings ps = new ProfileSettings(pid, first_name, last_name, email, null, dark_mode, rpl);
				
				assertEquals(ps.getPid(), 8);
				assertEquals(ps.getFirst_name(), "Okey");
				assertEquals(ps.getLast_name(), "Batz");
				assertEquals(ps.getEmail(), "Okey.Batz@nedap.nl");
			}
		} catch (SQLException e) {
			e.printStackTrace();
			assertTrue(false);
		}
	}
	
	@Test
	public void testGetRecords() {
		String query = "SELECT * FROM caren.getrecords(?);";

		ResultSet records = DatabaseManager.ReadQuery(query, "8");

		try {
			if (records.next()) {
				int posted_by_id = records.getInt(1);
				int posted_for_id = records.getInt(2);
				String posted_by_name = records.getString(3);
				int record_id = records.getInt(4);
				String type = records.getString(5);
				String data = records.getString(6);
				String date_added = records.getString(7);
				
				Record record = new Record(posted_by_id, posted_for_id, posted_by_name, record_id, type, data, date_added);
				assertEquals(record.getPosted_by_id(), 52);
				assertEquals(record.getPosted_for_id(), 8);
				assertEquals(record.getRecord_id(), 1026);
				assertEquals(record.getType(), "blood_pressure");
			}
		} catch (SQLException e) {
			e.printStackTrace();
			assertTrue(false);
		}
	}

}
