package com.springlabs.labexercises.ex13_crud_postman;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
