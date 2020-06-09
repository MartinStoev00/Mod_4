package model;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name = "comment")
public class Comment {	
	private int cid;
	private int rid;
	private int pid;
	private String visibility;
	private String date_added;
	private String text;
	
	public Comment(int cid, int rid, int pid, String visibility, String date_added, String text) {
		this.rid = rid;
		this.cid = cid;
		this.visibility = visibility;
		this.date_added = date_added;
		this.text = text;
	}

	public int getCid() {
		return cid;
	}

	public void setCid(int cid) {
		this.cid = cid;
	}
	
	public int getRid() {
		return rid;
	}

	public void setRid(int rid) {
		this.rid = rid;
	}
	
	public int getPid() {
		return pid;
	}

	public void setPid(int pid) {
		this.pid = pid;
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
