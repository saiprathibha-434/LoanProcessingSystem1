package com.loan.helper;


import com.loan.entity.Registration;
import com.loan.entity.Status;

public class LoanHelper extends Registration {

	public boolean checkApplication(Status status)
	{
		boolean adminApprovl=true;
		if(Status.ACCEPT==status)
		{
			
			return true;
		}
		else
		{
			return false;
		}
	}
	
}
