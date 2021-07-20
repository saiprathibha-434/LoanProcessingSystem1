package com.loan.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.loan.entity.LoanApplication;

import com.loan.service.LoanService;

@RestController
@RequestMapping(name = "/loan")
public class LoanController {

	@Autowired
	private LoanService loanService;
	
	@RequestMapping(value = "/requestloan", method = RequestMethod.POST )
	public ResponseEntity<String> requestLoan(LoanApplication loanApplication)
	{
		LoanApplication requestLoan=loanService.requestLoan(loanApplication);

		if(null!=requestLoan)
		{
		return ResponseEntity.status(HttpStatus.OK)
				.body(String.format("\n Request For Loan %s",requestLoan.toString()));
		}
		else
		{
			return null;
		}
	}
	
	 @RequestMapping(value="/getAllApplication",method = RequestMethod.GET)
	public ResponseEntity<String> getAllApplications() 
	{
		List<LoanApplication> getAllApplications=loanService.getAllLoanApplications();
		 return ResponseEntity.status(HttpStatus.OK)
				.body(String.format("\n ALL Requested Applications %s",getAllApplications.toString()));
	}
	
	
	
	
}
