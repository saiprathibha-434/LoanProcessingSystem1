package com.loan.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.loan.entity.Customer;
import com.loan.repository.CustomerRepository;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/")
public class CustomerController{
	
	
    @Autowired
    private CustomerRepository customerRepository;
    
	@GetMapping("Customers")
	public List<Customer> getCustomers(){
		return this.customerRepository.findAll();
		
	}
	
}