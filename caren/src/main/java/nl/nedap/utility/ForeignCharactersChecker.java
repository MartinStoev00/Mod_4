package nl.nedap.utility;

public class ForeignCharactersChecker {

	private static String passwordCharacters = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ ";
	private static String emailCharacters = passwordCharacters+"@.-_: ";
	private static String textCharacters = passwordCharacters + emailCharacters + "!,?;#$&(){}[]%=/\"";
	
	public static boolean basicHasForeignCharacters(String p) {//checker for all input fields except email
		if (p == null) {
			return false;
		}
		for (int i = 0; i < p.length(); i++) {
			if (!passwordCharacters.contains(p.substring(i, i+1))) {
				return true;
			}
		}
		
		return false;
	}
	
	public static boolean textHasForeignCharacters(String p) {//checker for all input fields except email
		if (p == null) {
			return false;
		}
		for (int i = 0; i < p.length(); i++) {
			if (!textCharacters.contains(p.substring(i, i+1))) {
				return true;
			}
		}
		
		return false;
	}
	
	public static boolean emailHasForeignCharacters(String p) {//checker for email input fields
		if (p == null) {
			return false;
		}
		
		for (int i = 0; i < p.length(); i++) {
			if (!emailCharacters.contains(p.substring(i, i+1))) {
				return true;
			}
		}
		
		return false;
	}
	
}
