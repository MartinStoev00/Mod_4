package nl.nedap.utility;

public class ForeignCharactersChecker {

	private static String passwordCharacters = "abdefghijklmnopqrstuvwxyz0123456789ABDEFGHIJKLMNOPQRSTUVWXYZ";
	private static String emailCharacters = passwordCharacters+"@.-_";
	
	public static boolean basicHasForeignCharacters(String p) {//checker for all input fields except email
		for (int i = 0; i < p.length(); i++) {
			if (!passwordCharacters.contains(p.substring(i, i+1))) {
				return true;
			}
		}
		
		return false;
	}
	
	public static boolean emailHasForeignCharacters(String p) {//checker for email input fields
		for (int i = 0; i < p.length(); i++) {
			if (!emailCharacters.contains(p.substring(i, i+1))) {
				return true;
			}
		}
		
		return false;
	}
	
}
