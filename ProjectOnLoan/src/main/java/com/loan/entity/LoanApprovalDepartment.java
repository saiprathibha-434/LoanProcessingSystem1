package com.loan.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

@Entity
public class LoanApprovalDepartment extends Registration{
	
	@Column(name = "LAD_OFFICER_NAME")
	private String ladOfficerName;
	
	@Column(name = "LAD_OFFICER_CONTACT")
	private String ladOfficerContact;
	
	@Enumerated(EnumType.STRING)
	@Column(name="STATUS")
	private Status status;

	@Column(name = " ADMIN_APPROVAL")
	private boolean adminApproval;
	

	public String getLadOfficerName() {
		return ladOfficerName;
	}

	public void setLadOfficerName(String ladOfficerName) {
		this.ladOfficerName = ladOfficerName;
	}

	public String getLadOfficerContact() {
		return ladOfficerContact;
	}

	public void setLadOfficerContact(String ladOfficerContact) {
		this.ladOfficerContact = ladOfficerContact;
	}
	

	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}

	public boolean isAdminApproval() {
		return adminApproval;
	}

	public void setAdminApproval(boolean adminApproval) {
		this.adminApproval = adminApproval;
	}

	public LoanApprovalDepartment(String ladOfficerName, String ladOfficerContact) {
		super();
		this.ladOfficerName = ladOfficerName;
		this.ladOfficerContact = ladOfficerContact;
	}
	
	

	public LoanApprovalDepartment(int userId, String password, String role) {
		super(userId, password, role);
		
	}

	public LoanApprovalDepartment() {
		super();
	}
	
	

	@Override
	public String toString() {
		return "LoanApprovalDepartment [ladOfficerName=" + ladOfficerName + ", ladOfficerContact=" + ladOfficerContact
				+ ", status=" + status + ", adminApproval=" + adminApproval + "]";
	}

	
	
	

}
