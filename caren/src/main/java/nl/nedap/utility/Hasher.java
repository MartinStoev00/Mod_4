package nl.nedap.utility;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class Hasher {
	public static String hash(String s) {
		
		String hashes;
		try {
			MessageDigest md = MessageDigest.getInstance("SHA-512");
			byte[] hashedPasswordBytes = md.digest(s.getBytes(StandardCharsets.UTF_8));
			
			StringBuffer hexString = new StringBuffer();
			for (int i = 0; i < hashedPasswordBytes.length; i++) {
			    if ((0xff & hashedPasswordBytes[i]) < 0x10) {
			        hexString.append("0"
			                + Integer.toHexString((0xFF & hashedPasswordBytes[i])));
			    } else {
			        hexString.append(Integer.toHexString(0xFF & hashedPasswordBytes[i]));
			    }
			}
			
			return hexString.toString();
		} catch (NoSuchAlgorithmException e1) {
			e1.printStackTrace();
		}
		
		return null;
	}
}
