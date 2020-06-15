package model;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class RecordData {
	private int systolic;
	private int diastolic;
	private int value;
	private String text;
	private String description;
	private String unit;
	
	public RecordData() {
		this(0, 0, 0, null, null, null);
	}
	
	public RecordData(int systolic, int diastolic, int value, String text, String description, String unit) {
		this.systolic = systolic;
		this.diastolic = diastolic;
		this.value = value;
		this.text = text;
		this.description = description;
		this.unit = unit;
	}

	public int getSystolic() {
		return systolic;
	}

	public void setSystolic(int systolic) {
		this.systolic = systolic;
	}

	public int getDiastolic() {
		return diastolic;
	}

	public void setDiastolic(int diastolic) {
		this.diastolic = diastolic;
	}

	public int getValue() {
		return value;
	}

	public void setValue(int value) {
		this.value = value;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getUnit() {
		return unit;
	}

	public void setUnit(String unit) {
		this.unit = unit;
	}

	public static RecordData toRD(String string) {
		RecordData nRD = new RecordData();
		String[] split = string.split(",");
		
		for (int i = 0; i < split.length; i++) {
			String[] pair = split[i].split(":");
			String type = pair[0];
			String value = pair[1];
			switch(type) {
			case "{\"systolic\"":
				nRD.setSystolic(Integer.parseInt(value));
				break;
			case "{\"diastolic\"":
				nRD.setDiastolic(Integer.parseInt(value));
				break;
			case "{\"value\"":
				nRD.setValue(Integer.parseInt(value));
				break;
			case "{\"text\"":
				nRD.setText(value);
				break;
			case "{\"description\"":
				nRD.setDescription(value);
				break;
			case "{\"unit\"":
				nRD.setUnit(value);
				break;
			default:
				System.out.println(type);	
			}
		}

		return nRD;
	}
	
}
