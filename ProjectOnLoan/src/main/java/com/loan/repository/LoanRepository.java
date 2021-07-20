package com.loan.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.loan.entity.LoanApprovalDepartment;

@Repository
public interface LoanRepository extends JpaRepository<LoanApprovalDepartment, Integer> {

}
