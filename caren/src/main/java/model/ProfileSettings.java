package model;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class ProfileSettings {
	private int pid;
	private String first_name;
	private String last_name;
	private String email;
	private String password;
	private int dark_mode;
	private int rpl;
	
	public ProfileSettings() {
		this(0, "John", "Doe", "PH@gmail.com", "Hello123", 0, 4);
	}
	
	public ProfileSettings(int pid, String first_name, String last_name, String email, String password, int dark_mode, int rpl) {
		this.pid = pid;
		this.first_name = first_name;
		this.last_name = last_name;
		this.email = email;
		this.password = password;
		this.dark_mode = dark_mode;
		this.rpl = rpl;
	}

	public int getPid() {
		return pid;
	}

	public void setPid(int pid) {
		this.pid = pid;
	}

	public String getFirst_name() {
		return first_name;
	}

	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}

	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getDark_mode() {
		return dark_mode;
	}

	public void setDark_mode(int dark_mode) {
		this.dark_mode = dark_mode;
	}

	public int getRpl() {
		return rpl;
	}

	public void setRpl(int rpl) {
		this.rpl = rpl;
	}
	
	
	

}
