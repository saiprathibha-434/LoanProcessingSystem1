package com.loan.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "LOAN_APPLICATION")
public class LoanApplication {

	@Id
	@Column(name="APPLICATION_ID")
	private long applicationId;
	
	@Column(name="APPLICANT_NAME")
	private String applicantName;
	
	@Column(name="GENDER")
	private String gender;
	
	
	@Column(name="MOBILE_NUMBER")
	private long mobileNumber;
	
	@Column(name="ACCOUNT_NUMBER")
	private long accountNumber;
	
	@Column(name="IFSC_CODE")
	private String ifscCode;
	
	@Column(name="PAN_NUMBER")
	private String panNumber;
	
	@Column(name="REQUEST_LOAN_AMOUNT")
	private double RequestLoanAmount;
	
	@Column(name="APPLICANT_ADDRESS")
	private String applicantAddress;
	
	@Column(name="LOAN_TYPE")
	private String loanType;
	
	@Column(name="OCCUPATION")
    private String occupation;
	
	@Column(name="SALARY_INCOME")
	private double salaryIncome;
	
	@Column(name="ADDRESS")
	private String Address;

	public long getApplicationId() {
		return applicationId;
	}

	public void setApplicationId(long applicationId) {
		this.applicationId = applicationId;
	}

	public String getApplicantName() {
		return applicantName;
	}

	public void setApplicantName(String applicantName) {
		this.applicantName = applicantName;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public long getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(long mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public long getAccountNumber() {
		return accountNumber;
	}

	public void setAccountNumber(long accountNumber) {
		this.accountNumber = accountNumber;
	}

	public String getIfscCode() {
		return ifscCode;
	}

	public void setIfscCode(String ifscCode) {
		this.ifscCode = ifscCode;
	}

	public String getPanNumber() {
		return panNumber;
	}

	public void setPanNumber(String panNumber) {
		this.panNumber = panNumber;
	}

	public double getRequestLoanAmount() {
		return RequestLoanAmount;
	}

	public void setRequestLoanAmount(double requestLoanAmount) {
		RequestLoanAmount = requestLoanAmount;
	}

	public String getApplicantAddress() {
		return applicantAddress;
	}

	public void setApplicantAddress(String applicantAddress) {
		this.applicantAddress = applicantAddress;
	}

	public String getLoanType() {
		return loanType;
	}

	public void setLoanType(String loanType) {
		this.loanType = loanType;
	}

	public String getOccupation() {
		return occupation;
	}

	public void setOccupation(String occupation) {
		this.occupation = occupation;
	}

	public double getSalaryIncome() {
		return salaryIncome;
	}

	public void setSalaryIncome(double salaryIncome) {
		this.salaryIncome = salaryIncome;
	}

	public String getAddress() {
		return Address;
	}

	public void setAddress(String address) {
		Address = address;
	}

	
	public LoanApplication(long applicationId, String applicantName, String panNumber) {
		super();
		this.applicationId = applicationId;
		this.applicantName = applicantName;
		this.panNumber = panNumber;
	}

	public LoanApplication() {
		super();
	}

	public LoanApplication(long applicationId, String applicantName, String gender, long mobileNumber,
			long accountNumber, String ifscCode, String panNumber, double requestLoanAmount, String applicantAddress,
			String loanType, String occupation, double salaryIncome, String address) {
		super();
		this.applicationId = applicationId;
		this.applicantName = applicantName;
		this.gender = gender;
		this.mobileNumber = mobileNumber;
		this.accountNumber = accountNumber;
		this.ifscCode = ifscCode;
		this.panNumber = panNumber;
		this.RequestLoanAmount = requestLoanAmount;
		this.applicantAddress = applicantAddress;
		this.loanType = loanType;
		this.occupation = occupation;
		this.salaryIncome = salaryIncome;
		this.Address = address;
	}

	@Override
	public String toString() {
		return "LoanApplication [applicationId=" + applicationId + ", applicantName=" + applicantName + ", "
				+ "gender="+ gender + ", mobileNumber=" + mobileNumber + ", accountNumber="
				+ accountNumber + ", ifscCode="+ ifscCode + ", panNumber=" + panNumber + ","
		    	+ " RequestLoanAmount=" + RequestLoanAmount	+ ", applicantAddress=" + applicantAddress + ", "
			    + "loanType=" + loanType + ", occupation=" + occupation
				+ ", salaryIncome=" + salaryIncome + ", Address=" + Address + "]";
	}
	
	
	
}
