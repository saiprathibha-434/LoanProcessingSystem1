package com.loan.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.loan.entity.LoanApplication;

@Repository
public interface LoanApplictionRepository extends JpaRepository<LoanApplication, Integer> {

}
