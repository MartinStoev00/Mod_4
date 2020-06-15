package nl.nedap.utility;

import java.util.Properties;
import java.util.Random;

import javax.mail.*;
import javax.mail.internet.*;

public class EmailVerification {

	
	private String email = "team2nedap@gmail.com";
	private String password = "Team2passissecure";
	private String recepient = "";
	private String link ="";
	private String token="sadasd";
	
	private Properties mailProp;
	private Session mailSession;
	private MimeMessage mailMessage;
	
	private final String LETTERS = "abcdefghijklmnopqrstuvwxyz";
	private final char[] ALPHANUMERIC = (LETTERS + LETTERS.toUpperCase() + "0123456789").toCharArray();
	
	
	public EmailVerification(String email) {
		this.recepient = email;
	}
	
	public void linkGenerator(String token) {
		link = "http://localhost:8080/caren/rest/verification/" + token;
	}
	
	public void setProperties(){
		
		mailProp = System.getProperties();
		mailProp.put("mail.smtp.port", "587");
		mailProp.put("mail.smtp.auth", "true");
		mailProp.put("mail.smtp.starttls.enable", "true");
	}
	
	public void makeMessage() throws AddressException, MessagingException {
		linkGenerator(token);
		mailMessage = new MimeMessage(mailSession);
		mailMessage.addRecipient(Message.RecipientType.TO, new InternetAddress(recepient));
		
		//Email details details
		mailMessage.setSubject("Caren account verification");
		
		String emailBody = "Dear User, " +"<br><br> we would like you to verify your email using the following link : " + 
		"<h2>" + link + "</h2>" +"<br> We are so excited to have you as a user of Caren " + "<br><br> Regards, <br>Caren Team 2";
		
		mailMessage.setContent(emailBody, "text/html");
	}
	
	public static void sendEmail(EmailVerification e) throws AddressException, MessagingException {
		e.setProperties();
		
		e.mailSession = Session.getDefaultInstance(e.mailProp, null);
		e.makeMessage();
		
		Transport transport = e.mailSession.getTransport("smtp");
		transport.connect("smtp.gmail.com", e.email, e.password);
		System.out.println("send "+ e.recepient +" " + e.token );
		transport.sendMessage(e.mailMessage, e.mailMessage.getAllRecipients());
		System.out.println("sent");
		transport.close();
	}
	
	public String tokenGenerator(int length) {
		StringBuilder result = new StringBuilder();
		for (int i = 0; i <length; i++) {
			result.append(ALPHANUMERIC[new Random().nextInt(ALPHANUMERIC.length)]);
		}
		this.token = result.toString();
		return result.toString();
	}
	
	/*
	//for testing purposes
	public static void main(String[] args) throws SQLException, ClassNotFoundException {
		
		//email test
		try {
			EmailVerification em = new EmailVerification("team2nedap@gmail.com");
			System.out.println("email successfully sent");
		} catch (AddressException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (MessagingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		//token test
		
	}*/
	
}
