package com.springlabs.labexercises.ex15_thymeleaf_crud;

import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
