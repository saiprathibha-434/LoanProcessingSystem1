package com.loan.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.loan.entity.Registration;



public interface RegistrationRepository extends JpaRepository<Registration, Integer> {

}
