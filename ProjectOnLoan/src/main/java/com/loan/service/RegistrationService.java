package com.loan.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.loan.entity.Registration;
import com.loan.repository.RegistrationRepository;

@Service
public class RegistrationService {

	@Autowired
	private RegistrationRepository repository;

	// Get All User Details
	public List<Registration> getAllUsers() {
		List<Registration> registrationLIst = repository.findAll();
		if (null != registrationLIst) {
			return registrationLIst;
		}
		return null;
	}
	
	// Get User Details By ID
	public Registration getUserById(int id) {
	
		return repository.findById(id).orElse(null);
		
	}
	
	// Any employee can register
	public Registration saveRegisteration(Registration registration)
	{
		Registration saveregistration=repository.save(registration);
		if(null!=saveregistration)
		{
			return saveregistration;
		}
		else
		{
			return registration;
		}
	}
	
	public List<Registration> saveRegisterations(List<Registration> registration)
	{
		List<Registration> saveRegistrations=repository.saveAll(registration);
		if(null!=saveRegistrations)
		{
			return saveRegistrations;
		}
		else
		{
			return null;
		}
		
	}
}
