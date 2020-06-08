package model;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name = "comment")
public class Comment {	
	private String cid;
	private String rid;
	private String visibility;
	private String date_added;
	private String text;
	
	public Comment(String cid, String rid, String visibility, String date_added, String text) {
		this.rid = rid;
		this.cid = cid;
		this.visibility = visibility;
		this.date_added = date_added;
		this.text = text;
	}

	public String getRid() {
		return rid;
	}

	public void setRid(String rid) {
		this.rid = rid;
	}

	public String getCid() {
		return cid;
	}

	public void setCid(String cid) {
		this.cid = cid;
	}

	public String getVisibility() {
		return visibility;
	}

	public void setVisibility(String visibility) {
		this.visibility = visibility;
	}


	public String getDate_added() {
		return date_added;
	}

	public void setDate_added(String date_added) {
		this.date_added = date_added;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}
}
