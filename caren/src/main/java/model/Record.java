package model;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Record {
	private int posted_by_id;
	private int posted_for_id;
	private String posted_by_name;
	private int record_id;
	private String type;
	private String data;
	private String date_added;
	
	public Record() {
		this(0, 0, null, 0, null, null, null);
	}
	
	public Record(int posted_by_id, int posted_for_id, String posted_by_name, int record_id, String type, String data, String date_added) {;
		this.posted_by_id = posted_by_id;
		this.posted_for_id = posted_for_id;
		this.posted_by_name = posted_by_name;
		this.record_id = record_id;
		this.type = type;
		this.data = data;
		this.date_added = date_added;
	}
	
	public int getPosted_by_id() {
		return posted_by_id;
	}
	public void setPosted_by_id(int posted_by_id) {
		this.posted_by_id = posted_by_id;
	}
	public int getPosted_for_id() {
		return posted_for_id;
	}
	public void setPosted_for_id(int posted_for_id) {
		this.posted_for_id = posted_for_id;
	}
	public String getPosted_by_name() {
		return posted_by_name;
	}
	public void setPosted_by_name(String posted_by_name) {
		this.posted_by_name = posted_by_name;
	}
	public int getRecord_id() {
		return record_id;
	}
	public void setRecord_id(int record_id) {
		this.record_id = record_id;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getData() {
		return data;
	}
	public void setData(String data) {
		this.data = data;
	}
	public String getDate_added() {
		return date_added;
	}
	public void setDate_added(String date_added) {
		this.date_added = date_added;
	}
	
	
	
	
}
