package model;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name = "comment")
public class Comment {	
	private int cid;
	private int rid;
	private int pid;
	private String name;
	private String visibility;
	private String text;
	private String date_added;
	private int parentid;

	public Comment() {
		this(0, 0, 0, "PH", "public", "PH", "1999-01-01", 0);
	}
	
	public Comment(int cid, int rid, int pid, String name, String visibility, String text, String date_added, int parentid) {
		this.rid = rid;
		this.cid = cid;
		this.pid = pid;
		this.name = name;
		this.visibility = visibility;
		this.text = text;
		this.date_added = date_added;
		this.parentid = parentid;
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
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
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
	
	public int getParentid() {
		return parentid;
	}

	public void setParentid(int parentid) {
		this.parentid = parentid;
	}
}
