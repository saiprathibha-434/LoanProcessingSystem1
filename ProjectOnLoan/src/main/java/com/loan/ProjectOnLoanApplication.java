package com.loan;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.loan.entity.Customer;
import com.loan.repository.CustomerRepository;

@SpringBootApplication
public class ProjectOnLoanApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(ProjectOnLoanApplication.class, args);
	}

	@Autowired
    private CustomerRepository CustomerRepository;	
	
	@Override
	public void run(String... args) throws Exception {
	this.CustomerRepository.save(new Customer(15, "prasanna", "5647686543", "Female", "5647864356","875645345647", "warangal","abcdefg"));
	this.CustomerRepository.save(new Customer(16, "karthik", "8576549876", "Male", "8967589670","675897654390", "Hyderabad","pqrst"));
	this.CustomerRepository.save(new Customer(17, "lakshmi", "7865439086", "Female", "6758976543","768906754367", "vizag","hijk"));
		
	}

}
