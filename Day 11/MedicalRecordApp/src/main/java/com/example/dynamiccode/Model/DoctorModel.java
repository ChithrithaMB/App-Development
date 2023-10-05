
package com.example.dynamiccode.Model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="record")
public class DoctorModel{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int doctorId;
	private String doctorName;
	
	private String patName;
	private String doctordept;
    
	

	public int getDoctorId() {
		return doctorId;
	}



	public void setDoctorId(int doctorId) {
		this.doctorId = doctorId;
	}



	public String getDoctorName() {
		return doctorName;
	}



	public void setDoctorName(String doctorName) {
		this.doctorName = doctorName;
	}



	public String getPatName() {
		return patName;
	}



	public void setPatName(String patName) {
		this.patName = patName;
	}



	public String getDoctordept() {
		return doctordept;
	}



	public void setDoctordept(String doctordept) {
		this.doctordept = doctordept;
	}

    

	public DoctorModel(int doctorId, String doctorName, String patName, String doctordept) {
		super();
		this.doctorId = doctorId;
		this.doctorName = doctorName;
		this.patName = patName;
		this.doctordept = doctordept;
	}



	public DoctorModel()
	{
		
	}
}