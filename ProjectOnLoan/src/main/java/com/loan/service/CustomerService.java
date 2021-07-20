package com.loan.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.loan.entity.Customer;
import com.loan.entity.LoanApplication;
import com.loan.repository.CustomerRepository;

@Service
public class CustomerService 
{
	
//	  @Autowired
//      private CustomerRepository customerRepo;
//	  
//	  public Customer addCustomer(Customer customer)
//	  {
//		  Customer addCutomer=customerRepo.save(customer);
//		  if(null!=addCutomer)
//		  {
//			  return addCutomer;
//		  }
//		  
//		   return null;
//	  }
//	  
//	  public List<Customer> addCustomers(List<Customer> customers)
//	  {
//		  List<Customer> addCutomers=customerRepo.saveAll(customers);
//		  if(null!=addCutomers)
//		  {
//			  return addCutomers;
//		  }
//		  
//		   return null;
//	  }
//	  
//	  
//	  public Customer getCustomer(int id)
//	  {
//		  return customerRepo.findById(id).orElse(null);
//		
//	  }
//	  
//	  
//	  public List<Customer> getAllCustomer()
//	  {
//		  List<Customer> customerList = customerRepo.findAll();
//		  if(null!=customerList)
//		  {
//		    return customerList;
//		  }
//		  return null;
//	  }
//	
//	
//	  public Customer updateCustomer(Customer customer)
//	  {
//		  Customer existingCustomer = customerRepo.findById(customer.getCustomerId()).orElse(null);
//		  existingCustomer.setCustomerName(customer.getCustomerName());
//		  existingCustomer.setCustMobileNumber(customer.getCustMobileNumber());
//		  existingCustomer.setAadharNumber(customer.getAadharNumber());
//		  existingCustomer.setGender(customer.getGender());
//		  existingCustomer.setPanNumber(customer.getPanNumber());
//		  existingCustomer.setPassword(customer.getPassword());
//		  existingCustomer.setAddress(customer.getAddress());
//		   return customerRepo.save(existingCustomer);
//		  
//	  }
//	  
}
