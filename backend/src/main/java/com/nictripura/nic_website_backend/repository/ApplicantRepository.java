// src/main/java/com/nictripura/nic_website_backend/repository/ApplicantRepository.java
package com.nictripura.nic_website_backend.repository;

import com.nictripura.nic_website_backend.model.Applicant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApplicantRepository extends JpaRepository<Applicant, String> { }
