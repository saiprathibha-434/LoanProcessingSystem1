/**
 * 
 */
package com.loan.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



/**
 * @author DELL
 *
 */

@Entity
@Table(name = "Customers")
public class Customer implements Serializable
{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int customerId;
	
	@Column(name = "CUSTOMER_NAME")
	private String customerName;
	
	@Column(name = "CUSTOMER_MOBILE_NUMBER")
	private String custMobileNumber;
	
	@Column(name = "GENDER")
	private String gender;
	
	@Column(name = "AADHAR_NUMBER")
	private String aadharNumber;
	
	@Column(name = "PAN_NUMBER")
	private String panNumber;
	
	@Column(name = "ADDRESS")
	private String address;
	
	@Column(name = "PASSWORD")
	private String password;

	public String getPassword() {
		return password;
	}
	
	public Customer() {
//		super();
	}

	public Customer(int customerId, String customerName, String custMobileNumber, String gender, String aadharNumber,
			String panNumber, String address,String password) {
		super();
		this.customerId = customerId;
		this.customerName = customerName;
		this.custMobileNumber = custMobileNumber;
		this.gender = gender;
		this.aadharNumber = aadharNumber;
		this.panNumber = panNumber;
		this.address = address;
		this.password = password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getCustomerId() {
		return customerId;
	}

	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public String getCustMobileNumber() {
		return custMobileNumber;
	}

	public void setCustMobileNumber(String custMobileNumber) {
		this.custMobileNumber = custMobileNumber;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getAadharNumber() {
		return aadharNumber;
	}

	public void setAadharNumber(String aadharNumber) {
		this.aadharNumber = aadharNumber;
	}

	public String getPanNumber() {
		return panNumber;
	}

	public void setPanNumber(String panNumber) {
		this.panNumber = panNumber;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	
//	public Customer() {
////		super();
//	}
//
//	public Customer(int customerId, String customerName, long custMobileNumber, String gender, long aadharNumber,
//			String panNumber, String address,String password) {
//		super();
//		this.customerId = customerId;
//		this.customerName = customerName;
//		this.custMobileNumber = custMobileNumber;
//		this.gender = gender;
//		this.aadharNumber = aadharNumber;
//		this.panNumber = panNumber;
//		this.address = address;
//		this.password = password;
//	}

//	@Override
//	public String toString() {
//		return "Customer [customerId=" + customerId + ", customerName=" + customerName + ", "
//				+ "custMobileNumber="+ custMobileNumber + ", gender=" + gender + ","
//				+ " aadharNumber=" + aadharNumber + ", panNumber="
//				+ panNumber + ", address=" + address+ ", password=" + password + "]";
//	}
	
	
	
	
}
