/**
 * 
 */
package com.loan.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.loan.entity.LoanApplication;
import com.loan.entity.Registration;
import com.loan.service.RegistrationService;

/**
 * @author DELL
 *
 */
@RestController
@RequestMapping(value = "/api/loan")
public class RegistrationController {

	@Autowired
	private RegistrationService registrationService;

	@RequestMapping(value = "/getAllUsers", method = RequestMethod.GET)
	public ResponseEntity<String> getAllUsers() {

		List<Registration> registrationList = registrationService.getAllUsers();
		if (null != registrationList) {
			// Registration constructor Json with Java OBject
			System.out.println();
			return ResponseEntity.status(HttpStatus.OK)
					.body(String.format("Retrieved all user list %s\n", registrationList.toString()));
		} else {
			return ResponseEntity.status(HttpStatus.OK)
					.body(String.format("There were no Users existed in the DB"));
		}
	}

	
	      @RequestMapping(value = "/getUser/{userId}", method = RequestMethod.GET) public
	     ResponseEntity<String> getUserById(@RequestParam int userId) {
	           
	    	  if (null != registrationService)
	    	  {
	                return ResponseEntity.status(HttpStatus.OK)
	                		.body(String.format("Retrieved all user list %s\n", registrationService.toString()));
	    	  }
	    	  else
	    	  {
	    		  return ResponseEntity.status(HttpStatus.OK)
	                		.body(String.format("There was no User existed on the base of  "+userId+" in the DB "));
	    	  }
	  }
	
	 @RequestMapping(value = "/registraion", method = RequestMethod.POST)
	 public ResponseEntity<String> registraion(@RequestBody Registration registration) {
		 
		 Registration saveReg= registrationService.saveRegisteration(registration);
		 if (null != saveReg) {
				// Registration constructor Json with Java OBject
				System.out.println();
				return ResponseEntity.status(HttpStatus.OK)
						.body(String.format("Retrieved all user list %s\n", saveReg.toString()));
			} else {
				return ResponseEntity.status(HttpStatus.OK)
						.body(String.format("There were no Users existed in the DB"));
			}
	 }
	  

	 @RequestMapping(value = "/registraions", method = RequestMethod.POST)
	 public ResponseEntity<String> registraion(@RequestBody List<Registration> registration) {
		 
		 List<Registration> saveRegistrations=registrationService.saveRegisterations(registration);
		 if (null != saveRegistrations) {
				// Registration constructor Json with Java OBject
				
				return ResponseEntity.status(HttpStatus.OK)
						.body(String.format("Retrieved all user list %s\n", saveRegistrations.toString()));
			} else {
				return ResponseEntity.status(HttpStatus.OK)
						.body(String.format("There were no Users existed in the DB"));
			}
	 }
	 
    
      
}
