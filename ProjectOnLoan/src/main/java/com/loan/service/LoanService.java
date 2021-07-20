package com.loan.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.loan.entity.LoanApplication;


import com.loan.repository.LoanApplictionRepository;
import com.loan.repository.LoanRepository;

@Service
public class LoanService {

	@Autowired
	private LoanApplictionRepository loanApiRepo;
	
	@Autowired
	private LoanRepository loanRepository;
	
	public LoanApplication requestLoan(LoanApplication loanApplication)
	{
		LoanApplication requestLoan= loanApiRepo.save(loanApplication);
		return requestLoan;
		
	}
	
	

	public List<LoanApplication> getAllLoanApplications() {
		
		return loanApiRepo.findAll();
	}
	
}
