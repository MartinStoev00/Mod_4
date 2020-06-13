package nl.nedap.utility;

public class ForeignCharactersChecker {

	private static String passwordCharacters = "abdefghijklmnopqrstuvwxyz0123456789ABDEFGHIJKLMNOPQRSTUVWXYZ";
	
	public static boolean hasForeignCharacters(String p) {
		for (int i = 0; i < p.length(); i++) {
			if (!passwordCharacters.contains(p.substring(i, i+1))) {
				return true;
			}
		}
		
		return false;
	}
	
}
