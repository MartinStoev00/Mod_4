package model;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Associate {
	private String name;
	private String description;
	private String aid;
	
	public Associate(String name, String description, String aid) {
		this.name = name;
		this.description = description;
		this.aid = aid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getAid() {
		return aid;
	}

	public void setAid(String aid) {
		this.aid = aid;
	}
}
